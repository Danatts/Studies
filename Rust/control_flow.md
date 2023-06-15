# Control Flow

## `if` Expressions

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

## Using `if` in a `let` statement

```rs
fn main() {
  let condition = true;
  let number = if condition { 5 } else { 6 };

  println!("The value of number is: {number}");
}
```

The value that have the potential to be results from each arm of the `if` must be the same type.

## Repeating code with `loop`

```rs
fn main() {
  let mut count = 0u32;

  println!("Let's count until infinity!");

  // Infinite loop
  loop {
    count += 1;

    if count == 3 {
      println!("three");

      // Skip the rest of this iteration
      continue;
    }

    println!("{}", count);

    if count == 5 {
      println!("OK, that's enough");

      // Exit this loop
      break;
    }
  }
}
```

## Returning values from loops

You can add the value you want returned after the `break` expression you use to stop the
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
}
```

## Loop Labels to disambiguate between multiple loops

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
## Conditional loops with `while`

```rs
fn main() {
  let mut number = 3;

  while number != 0 {
    println!("{number}!");
    number -= 1;
  }
}
```

## Looping through a collection with `for`

```rs
fn main() {
  let a = [10, 20, 30, 40, 50];

  for element in a {
    println!("the value is: {element}");
  }
}
```

## Looping through a range with `for`

```rs
fn main() {
  for number in (1..4).rev() {
    println!("{number}!");
  }
}
```

## `match`

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

## `if let`

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
// The `if let` construct reads: "if `let` destructures `number` into
// `Some(i)`, evaluate the block (`{}`).
```

## `while let`

```rs
fn main() {
    // Make `optional` of type `Option<i32>`
    let mut optional = Some(0);

    // This reads: "while `let` destructures `optional` into
    // `Some(i)`, evaluate the block (`{}`). Else `break`.
    while let Some(i) = optional {
        if i > 9 {
            println!("Greater than 9, quit!");
            optional = None;
        } else {
            println!("`i` is `{:?}`. Try again.", i);
            optional = Some(i + 1);
        }
        // ^ Less rightward drift and doesn't require
        // explicitly handling the failing case.
    }
}
```
