# Rust Notes

## Functions

```rs
fn main () {
  another_function(5);
}

fn another_function(x: i32) {
  println!("The value of x is: {x}");
}
```

Function bodies are made up of aseries of statements optionally ending in an expression.

- **Statements** are instructions that perform some action and no not return a value.
- **Expressions** evaluate to a resultant value. They do not include ending semicolon.

### Functions with Return Values

```rs
fn five() -> i32 {
  5
}

fn main() {
  let x = five();

  println!("The value of x is: {x}");
}
```

You can return early from a function by using the `return` keyword and specifying a value.

## Control Flow

### `if` Expressions

```rs
fn main() {
  let number = 6;

  if number % 4 == 0 {
    println!("number is divisible by 4");
  } else if number % 3 == 0 {
    println!("number is divisible by 3");
  } else if number % 2 == 0 {
    println!("number is divisible by 2");
  } else {
    println!("number is not divisible by 4, 3, or 2");
  }
}
```

Rust will not automatically try to convert non-Boolean types to a Boolean. You must be explicit and
always provide `if` with a Boolean as its condition.

### Using `if` in a `let` statement

```rs
fn main() {
  let condition = true;
  let number = if condition { 5 } else { 6 };

  println!("The value of number is: {number}");
}
```

The value that have the potential to be results from each arm of the `if` must be the same type.

### Repeating code with `loop`

```rs
loop {
  let mut guess = String::new();

  io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");

  let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
      Err(_) => continue,
  };

  println!("You guessed: {guess}");

  match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
      Ordering::Greater => println!("Too big!"),
      Ordering::Equal => {
        println!("You win!");
        break;
      }
  }
}
```
### Returning values from loops

To do this, you can add the value you want returned after the `break` expression you use to stop the
loop. That value will be returned out of the loop so you can use it.

```rs
fn main() {
  let mut counter = 0;

  let result = loop {
    counter += 1;

    if counter == 10 {
      break counter * 2;
    }
  };

  println!("The result is {result}");
}
```

### Loop Labels to disambiguate between multiple loops

If you have loops within loops, `break` and `continue` apply to the innermost loop at that point.
You can optionally specify a *loop label* on a loop that you can then use with `break` or `continue`
to specify that those keywords apply to the labeledloop instead of the innermost loop.

- Loop labels must begin with a single quote.

```rs
fn main() {
  let mut count = 0;
  'counting_up: loop {
    println!("count = {count}");
    let mut remaining = 10;

    loop {
      println!("remaining = {remaining}");
      if remaining == 9 {
        break;
      }
      if count == 2 {
        break 'counting_up;
      }
      remaining -= 1;
    }

    count += 1;
  }
  println!("End count = {count}");
}
```
### Conditional loops with `while`

```rs
fn main() {
  let mut number = 3;

  while number != 0 {
    println!("{number}!");

    number -= 1;
  }

  println!("LIFTOFF!!!");
}
```

### Looping through a collection with `for`

```rs
fn main() {
  let a = [10, 20, 30, 40, 50];

  for element in a {
    println!("the value is: {element}");
  }
}
```

### Looping through a range with `for`

```rs
fn main() {
  for number in (1..4).rev() {
    println!("{number}!");
  }
  println!("LIFTOFF!!!");
}
```

### `match`

```rs
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

- Unlike `if`, that the codition needs to evaluate to a Boolean value, here can be any type.

### `if let`

```rs
fn main() {
    let config_max = Some(3u8);
    match config_max {
        Some(max) => println!("The maximum is configured to be {}", max),
        _ => (),
    }
}

// The code above can be written also like:
fn main() {
    let config_max = Some(3u8);
    if let Some(max) = config_max {
        println!("The maximum is configured to be {}", max);
    }
}


```


## Ownership

***Ownership*** is a set of rules that govern how a Rust program manages memory.

- Each value in Rust has an owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.

### Ownership and functions

Passing a variable to a function will move or copy, just as assigment does.

```rs
fn main() {
  let s = String::from("hello");  // s comes into scope

  takes_ownership(s);             // s's value moves into the function...
                                  // ... and so is no longer valid here

  let x = 5;                      // x comes into scope

  makes_copy(x);                  // x would move into the function,
                                  // but i32 is Copy, so it's okay to still
                                  // use x afterward

} // Here, x goes out of scope, then s. But because s's value was moved, nothing
  // special happens.

fn takes_ownership(some_string: String) { // some_string comes into scope
  println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
  println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.
```

### Return values and scope

Returning values can also transfer ownership.

```rs
fn main() {
  let s1 = gives_ownership();         // gives_ownership moves its return
                                      // value into s1

  let s2 = String::from("hello");     // s2 comes into scope

  let s3 = takes_and_gives_back(s2);  // s2 is moved into
                                      // takes_and_gives_back, which also
                                      // moves its return value into s3
} // Here, s3 goes out of scope and is dropped. s2 was moved, so nothing
  // happens. s1 goes out of scope and is dropped.

fn gives_ownership() -> String {             // gives_ownership will move its
                                             // return value into the function
                                             // that calls it

  let some_string = String::from("yours"); // some_string comes into scope

  some_string                              // some_string is returned and
                                           // moves out to the calling
                                           // function
}

// This function takes a String and returns one
fn takes_and_gives_back(a_string: String) -> String { // a_string comes into
                                                      // scope

  a_string  // a_string is returned and moves out to the calling function
}

```

## References and Borrowing

A **reference** is like a pointer, in that it is an address we can follow to access the data stored
at that adress. Unlike a pointer, a reference is guaranteed to point to a valid value of a
particular type for the life of that reference.

```rs
fn main() {
  let s1 = String::from("hello");

  let len = calculate_length(&s1);

  println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
  s.len()
}
```

These ampersands represent *references*, and they allow you to refer to some value without taking
ownership of it.

### Mutable references

References are immutable by default, so if we want to modify them, we have to add the `mut` key word
before.

```rs
fn main() {
  let mut s = String::from("hello");

  change(&mut s);
}

fn change(some_string: &mut String) {
  some_string.push_str(", world");
}
```

If you have a mutable reference to a value, you can have no other references to that value. 
As always, we can use curly brackets to create a new scope, allowing for multiple mutable
references.

```rs
fn main() {
  let mut s = String::from("hello");

  {
    let r1 = &mut s;
  } // r1 goes out of scope here, so we can make a new reference with no problems.

  let r2 = &mut s;
}
```

Also, we can not have a mutable reference while we have an immutable one to the same value.
Reference's scope starts from where it is introduced and continues through the last time that
reference is used. So the next chunk will compile.

```rs
fn main() {
  let mut s = String::from("hello");

  let r1 = &s; // no problem
  let r2 = &s; // no problem
  println!("{} and {}", r1, r2);
  // variables r1 and r2 will not be used after this point

  let r3 = &mut s; // no problem
  println!("{}", r3);
}
```

References must always be valid.

### String slices

A *string slice* is a reference to a part of a `String`.

```rs
fn main() {
  let s = String::from("hello world");

  let hello = &s[0..5];
  let world = &s[6..11];
}
```

#### String slices as parameters

Require a `&str` as a parameter makes the function more flexible allowing us to use the same
function both `&String` values and `&str` values. If we have a string slice, we can pass that
directly. If we have a `String`, we can pass a slice of the `String` or a reference to the `String`.

```rs
fn main() {
  let my_string = String::from("hello world");

  // `first_word` works on slices of `String`s, whether partial or whole
  let word = first_word(&my_string[0..6]);
  let word = first_word(&my_string[..]);

  // `first_word` also works on references to `String`s, which are equivalent
  // to whole slices of `String`s
  let word = first_word(&my_string);

  let my_string_literal = "hello world";

  // `first_word` works on slices of string literals, whether partial or whole
  let word = first_word(&my_string_literal[0..6]);
  let word = first_word(&my_string_literal[..]);

  // Because string literals *are* string slices already,
  // this works too, without the slice syntax!
  let word = first_word(my_string_literal);
}
```
