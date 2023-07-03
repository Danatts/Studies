# Iterators and Closures

## Closures

Closures are anonymous functions you can save in a variable or pass as arguments to other
functions. Unlike functions, closures can capture values from the scope in which they are defined.

```rs
let expensive_closure = |num: u32| -> u32 {
    println!("calculating slowly...");
    thread::sleep(Duration::from_secs(2));
    num
};
```

Closures do not usually require you to annotate the types of the parameters or the return value
like functions do.

```rs
fn  add_one_v1   (x: u32) -> u32 { x + 1 }
let add_one_v2 = |x: u32| -> u32 { x + 1 };
let add_one_v3 = |x|             { x + 1 };
let add_one_v4 = |x|               x + 1  ;
```

### `move`

If you want to force the closure to take ownership of the values it uses in the environment even though the body of the closure does not strictly need ownership, you can use the move keyword before the parameter list.

```rs
use std::thread;

fn main() {
    let list = vec![1, 2, 3];
    println!("Before defining closure: {:?}", list);

    thread::spawn(move || println!("From thread: {:?}", list))
        .join()
        .unwrap();
}
```
