# Smart Pointers

*Smart pointers* are data structures that act like a pointer but also have additional metadata and
capabilities. Another difference is that while references only borrow data, in many cases, smart
pointers *own* the data they point to.

Smart pointers are usually implemented using structs. Unlike an ordinary struct, smart pointers
implement `Deref` and `Drop` traits. The `Deref` trait allows an instance of the smart pointer
struct to behave like a reference, the `Drop` trait allows you to customize the code that is run
when an instance of the smart pointer goes out of scope.

## Box<T>

Boxes allow you to store data on the heap rather than the stack. What remains on the stack is the
pointer to the heap data.

You will use them most often in these situations:

- When you have a type whose size cannot be known at compile time and you want to use a values of
  that type in a context that requires an exact size.
- When you have a large amount of data and you want to transfer ownership but ensure the data will
  not be copied when you do so.
- When you want to own a value and you care only that it is a type that implements a particular
  trait rather than being of a specific time.

### Using a Box<T> to Store Data on the Heap

```rs
// How to use a box to store an i32 value on the heap.
fn main() {
    let b = Box::new(5);
    println!("b = {}", b);
}
```

When a box goes out of scope it will be deallocated for both the box and the data it points to.

### Using Box<T> to Get a Recursive Type with a Known Size

```rs
enum List {
    Cons(i32, Box<List>),
    Nil,
}

use crate::List::{Cons, Nil};

fn main() {
    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));
}
```

## Treating Smart Pointers Like Regular References with the `Deref` Trait

Implementing the `Deref` trait allows you to customize the behavior of the *deference operator* `*`.
By implementing `Deref` in such a way that a smart pointer can be treated like a regular reference,
you can write code that operates on references and use that code with smart pointers too.

### Dereference: Following the Pointer to the Value

```rs
fn main() {
    let x = 5;
    let y = &x;

    assert_eq!(5, x);
    assert_eq!(5, *y); // Follow the reference to the value it is pointing to
    // Once we dereference 'y', we have access to the integer value 'y' is pointing to 
}
```

### Using Box<T> Like a Reference

```rs
fn main() {
    let x = 5;
    let y = Box::new(x);

    assert_eq!(5, x);
    assert_eq!(5, *y);
}
```

### Running Code on Cleanup with the `Drop` Trait

`Drop` trait lets you customize what happens when a value is about to go out of scope.

```rs
struct CustomSmartPointer {
    data: String,
}

impl Drop for CustomSmartPointer {
    fn drop(&mut self) {
        println!("Dropping CustomSmartPointer with data `{}`!", self.data);
    }
}

fn main() {
    let c = CustomSmartPointer {
        data: String::from("my stuff"),
    };
    let d = CustomSmartPointer {
        data: String::from("other stuff"),
    };
    println!("CustomSmartPointers created.");
}
```

### Dropping a Value Early with std::mem::drop

Rust does not allow to explicitly call drop method, it is called automatically when variable is out
of scope. So if we wanted to force a value to be cleaned early, we use the `std::mem::drop`
function.

```rs
fn main() {
    let c = CustomSmartPointer {
        data: String::from("some data"),
    };
    println!("CustomSmartPointer created.");
    drop(c);
    println!("CustomSmartPointer dropped before the end of main.");
}
```

## Rc<T>, the Reference Counted Smart Pointer

You can enable multiple ownership explicitly by using the Rust type `Rc<T>`, which is an
abbreviation for *reference counting*. The `Rc<T>` type keeps track of the number of references to a
value to determine whether or not the value is still is use. If there are zero references to a
value, the value can be cleaned up without any references becoming invalid.

We use de `Rc<T>` type when we want to allocate some data on the heap for multiple parts of our
program to read and we cannot determine at compile time which part will finish using the data last.

```rs
enum List {
    Cons(i32, Rc<List>),
    Nil,
}

use crate::List::{Cons, Nil};
use std::rc::Rc;

fn main() {
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    let b = Cons(3, Rc::clone(&a));
    let c = Cons(4, Rc::clone(&a));
}
```

The implementation of `Rc::clone` does not make a deep copy of all the data like most types'
implementations of `clone` do, it only increments the reference count.

## RefCell<T> and the Interior Mutability Pattern

*Interior mutability* is a design pattern in Rust that allows you to mutate data even when there are
immutable references to that data. To mutate data, the pattern uses `unsafe` code inside a data
structure to bend Rust's usual rules that govern mutation and borrowing.

We can use types that use the interior mutability pattern only when we can ensure that the borrowing
rules will be followed at runtime.

### Enforcing Borrowing Rules at Runtime with `RefCell<T>`

With references and Box<T>, the borrowing rules' invariants are enforced at compile time. With
`RefCell<T>`, these invariants are enforced at *runtime*. With `RefCell<T>`, if you break these
rules, your program will panic and exit.


Here is a recap of the reasons to choose `Box<T>`, `Rc<T>`, or `RefCell<T>`:

- `Rc<T>` enables multiple owners of the same data; `Box<T>` and `RefCell<T>` have single owners.
- `Box<T>` allows immutable or mutable borrows checked at compile time; `Rc<T>` allows only immutable
borrows checked at compile time; `RefCell<T>` allows immutable or mutable borrows checked at runtime.
- Because `RefCell<T>` allows mutable borrows checked at runtime, you can mutate the value inside the
`RefCell<T>` even when the `RefCell<T>` is immutable.

