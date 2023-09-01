# Concurrency

- *Parallel programming:* Different parts of a program execute at the same time.
- *Concurrent programming:* Different parts of a program execute independently.

## Threads

To create a new thread, we call the `thread::spawn` function and pass it a closure containing the
code we want to run in the new thread.

```rs
use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
}
```

When the main thread of a Rust program completes, all spawned threads are shut down, whether or not
they have finished running.

The call to `thread::sleep` force a thread to stop its execution for a short duration, allowing a
different thread to run.

### Waiting for All Threads to Finish Using `join` Handles

We can save the return value of `thread::spawn` in a variable, the return type of `thread::spawn` is
`JoinHandle`. It is a owned value that, when call the `join` method on it, will wait for its thread
to finish.

```rs
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}
```

Calling `join` on the handle **blocks** the thread currently running until the thread represented by the
handle terminates.

### Using `move` Closures with Threads

To use data from the main thread in the spawned thread, the spawned thread's closure must captures
the values it needs. By using the `move` keyword before the closure, we force the closure to take
ownership of the values it is using.

```rs
use std::thread;

fn main() {
    let v = vec![1, 2, 3];

    let handle = thread::spawn(move || {
        println!("Here's a vector: {:?}", v);
    });

    handle.join().unwrap();
}
```

## Using Message Passing to Transfer Data Between Threads

To accomplish message-sending concurrency, Rust provides an implementation of *channels*. An channel
is a general programming concept by which data is sent from one thread to another.

```rs
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    // will block the main thread's execution until a values is sent
    // optionally 'try_recv' will not block execution
    println!("Got: {}", received);
}
```

### Channels and Ownership

Once the value has been sent to another thread, the thread could modify or drop before we try to
use the value again.

The `send` function takes ownership of its parameter, and when the value is moved, the receiver
takes ownership of it.

### Sending Multiple Values and Seeing the Receiver Waiting

```rs
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let vals = vec![
            String::from("hi"),
            String::from("from"),
            String::from("the"),
            String::from("thread"),
        ];

        for val in vals {
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    for received in rx {
        println!("Got: {}", received);
    }
}
```

### Creating Multiple Producers by Cloning the Transmitter

To create multiple threads that all send values to the same receiver we can clone the transmitter.

```rs
    // --snip--

    let (tx, rx) = mpsc::channel();

    let tx1 = tx.clone();
    thread::spawn(move || {
        let vals = vec![
            String::from("hi"),
            String::from("from"),
            String::from("the"),
            String::from("thread"),
        ];

        for val in vals {
            tx1.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    thread::spawn(move || {
        let vals = vec![
            String::from("more"),
            String::from("messages"),
            String::from("for"),
            String::from("you"),
        ];

        for val in vals {
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    for received in rx {
        println!("Got: {}", received);
    }

    // --snip--
```

## Shared Data

Shared memory concurrency allows multiple ownership: multiple threads can access the same memory
location at the same time.

## Mutexes 

*Mutex* is an abbreviation for *mutual exclusion*, as in, a mutex allows only one thread to access
some data at any given time. To access the data in a mutex, a thread must first signal that it wants
access by asking to acquire the mutex's lock. The lock is a data structure that is part of the mutex
that keeps track of who currently  has exclusive access to the data.

Two rules to remember:

1. You must attempt to acquire the lock before using the data.
2. When you are done with the data that the mutex guards, you must unlock the data so other threads
   can acquire the lock.

```rs
use std::sync::Mutex;

fn main() {
    let m = Mutex::new(5);

    {
        let mut num = m.lock().unwrap();
        *num = 6;
    }

    println!("m = {:?}", m);
}
```

To access the data inside the mutex, we use the `lock` method to acquire the lock. This call will
block the current thread co it cannot do any work until it is our turn to have the lock.

### Sharing a `Mutex<T>` between Multiple Threads


