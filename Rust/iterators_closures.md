# Iterators and Closures

## Closures

Closures are anonymous functions you can save in a variable or pass as arguments to other
functions. 

```rs
let expensive_closure = |num: u32| -> u32 {
    println!("calculating slowly...");
    thread::sleep(Duration::from_secs(2));
    num
};
```

Unlike functions, closures can capture values from the scope in which they are defined.

```rs
#[derive(Debug, PartialEq, Copy, Clone)]
enum ShirtColor {
    red,
    blue,
}

struct Inventory {
    shirts: Vec<ShirtColor>,
}

impl Inventory {
    fn giveaway(&self, user_preference: Option<ShirtColor>) -> ShirtColor {
        user_preference.unwrap_or_else(|| self.most_stocked())
    }

    fn most_stocked(&self) -> ShirtColor {
        let mut num_red = 0;
        let mut num_blue = 0;

        for color in &self.shirts {
            match color {
                ShirtColor::red => num_red += 1,
                ShirtColor::blue => num_blue += 1,
            }
        }
        if num_red > num_blue {
            ShirtColor::red
        } else {
            ShirtColor::blue
        }
    }
}
```

Closures do not usually require you to annotate the types of the parameters or the return value
like functions do.

```rs
fn  add_one_v1   (x: u32) -> u32 { x + 1 }
let add_one_v2 = |x: u32| -> u32 { x + 1 };
let add_one_v3 = |x|             { x + 1 };
let add_one_v4 = |x|               x + 1  ;
```

### Capturing references and Moving ownership

Closures can capture values from their environment in three ways, which directly map to the three
ways a function can take a parameter: borrowing immutably, borrowing mutably, and taking ownership.
The closure will decide which of these to use based on what the body of the function does with the
captured values.

```rs
fn main() {
    let list = vec![1, 2, 3];
    let only_borrows = || println!("From closure: {:?}", list);

    println!("Before calling closure: {:?}", list); // It only captures a reference to `list`
    only_borrows();
    println!("After calling closure: {:?}", list);
}
```

```rs
fn main() {
    let mut list = vec![1, 2, 3];
    let mut borrows_mutably = || list.push(7); // It captures a mutable reference to `list`
    borrows_mutably();
    println!("After calling closure: {:?}", list);
}
```

If you want to force the closure to take ownership of the values it uses in the environment, you
can use the `move` keyword before the parameter list.

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

### Moving captured values out of closures and `Fn` Traits

The code in the body of the closure defines what happens to the references, it can be any of the
following:
- Move a captured value out of the closure
- Mutate the captures value
- Do not move nor mutate the captured value
- Capture nothing 

The way a closure captures and handles values from the environment affects which traits the closure
implements, and traits are how functions and structs can specify what kinds of closures they can
use.

Closures will automatically implement one, two or all three `Fn` traits depending on how the
closure's body handles the values:

1. `FnOnce` applies to closures that can be called once. A closure that moves captured values out of
   its body will only implement this trait. All closures implement at least this trait.
2. `FnMut` applies to closures that do not move captured values out of their body, but that might
   mutate the captured values. These closures can be called more than once.
3. `Fn` applies to closures that do not move captured values out of their body and do not mutate
   captured values, as well as closures that capture nothing from their environment. These closures
   can be called more than once.

## Iterators

The iterator pattern allows to perform task on a sequence of items in turn. An iterator is
responsible for the logic of iterating over each item and determining when the sequence has
finished.

```rs
let v1 = vec![1, 2, 3];

let v1_iter = v1.iter();

for val in v1_iter {
    println!("Got: {}", val);
}
```

### The `Iterator` Trait and the `next` Method

```rs
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
}
```

The `Iterator` trait only requires implementors to define one method: `next`, which returns one
item of the iterator at a time wrapped in `Some` and, when iterator is over, returns `None`.

```rs
fn iterator_demonstration() {
    let v1 = vec![1, 2, 3];

    let mut v1_iter = v1.iter();

    assert_eq!(v1_iter.next(), Some(&1));
    assert_eq!(v1_iter.next(), Some(&2));
    assert_eq!(v1_iter.next(), Some(&3));
    assert_eq!(v1_iter.next(), None);
}
```

- We need to make iterator mutable beacuse calling the `next` method on a iterator changes internal
  state the the iterator uses to keep track of where it is in the sequence.
- We did not need to make iterator mutable when used a `for` loop beacuse the loop took ownership of
  it and made it mutable behind the scenes.
- The values that we get form the calls to `next` are *immutable references* to the values in the
  vector. 
- If we want to create an iterator that takes ownership and return owned values, we can call
  `into_iter`.
- If we want to iterate over mutable references, we call `iter_mut`.
