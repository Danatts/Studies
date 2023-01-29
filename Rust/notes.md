# Rust Notes

## Data Types

### Scalar Types

#### Integer Type

| Length | Signed | Unsigned |
| - | - | - |
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32 | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

- Defaults types is `i32`.

#### Float Type

```rs
fn main() {
  let x = 2.0 // f64
    let y: f32 = 3.0 // f32
}
```

- Defaults type is `f64`.

#### Boolean Type

```rs
fn main() {
  let x = true;
  let y: bool = false
}
```

- Defaults type is `true`.

#### Character Type

```rs
fn main() {
  let c = 'z';
  let z: char = 'ℤ'; // with explicit type annotation
  let heart_eyed_cat = '😻';
}
```

- Characters are specified with single quotes.
- `char` type is four bytes in size.

### Compound Types

#### Tuple Type

- Groups together a number of values with a variety of types into one compound type.
- Tuples have fixed length.

```rs
fn main() {
  let tup: (i32, f64, u8) = (500, 6.4, 1);

  // Destructuring a tuple value
  let (x, y, z) = tup; // x = 500, y = 6.4, z = 1

  // Accesing a tuple element
  let five_hundred = tup.0;

  let six_point_four = tup.1;

  let one = x.2;
}
```

#### Array Type

- Every element of an array must have the same type.
- Array have fixed length.
- Arrays are useful when you want your data allocated on the stack rather than the heap.

```rs
fn main() {
  let arr: [i32; 5] = [1, 2, 3, 4, 5];

  // Same value for each element
  let arr2 = [3u32; 5];

  // Accesing an array element
  let first = arr[0];
  let secong = arr[1];
}
```
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

### if Expressions

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

### Using if in a let statement

```rs
fn main() {
  let condition = true;
  let number = if condition { 5 } else { 6 };

  println!("The value of number is: {number}");
}
```

The value that have the potential to be results from each arm of the `if` must be the same type.

### Repeating code with loop

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
### Conditional loops with while

```
fn main() {
  let mut number = 3;

  while number != 0 {
    println!("{number}!");

    number -= 1;
  }

  println!("LIFTOFF!!!");
}
```

### Looping through a collection with for

```
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }
}
```

### Looping through a range with for

```rs
fn main() {
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
```
