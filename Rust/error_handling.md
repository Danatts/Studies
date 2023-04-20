# Error Handling

## Unrecoverable Errors with `panic!`

```rs
fn main() {
    panic!("crash and burn");
}
```

By default, these panics will print a failure message, unwind, clean up the stack, and quit. Via an
environment variable, you can also have Rust display the call stack when a panic occurs to make it
easier to track down the source of the panic.

### Backtrace

A `backtrace` is a list of all the functions that have been called to get to this point.

```sh
RUST_BACKTRACE=1 cargo run
```

## Recorverable Errors with `Result`

```rs
enum Result<T, E> {
    Ok(T),
    Err(E),
}

use std::fs::File;

fn main() {
    let greeting_file_result = File::open("hello.txt");

    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };
}
```

### Matching on Different Errors

```rs
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let greeting_file_result = File::open("hello.txt");

    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => {
                panic!("Problem opening the file: {:?}", other_error);
            }
        },
    };
}
```

## Shortcuts for Panic on Error: `unwrap` and `expect`

- The `unwrap` method will return the value inside the `Ok`. If the `Result` ist the `Err` variant,
  `panic!` will be called.

```rs
use std::fs::File;

fn main() {
    let greeting_file = File::open("hello.txt").unwrap();
}
```

- The `expect` method let us choose the `panic!` error message.

```rs
use std::fs::File;

fn main() {
    let greeting_file = File::open("hello.txt")
        .expect("hello.txt should be included in this project");
}
```

## Propagating Errors: the `?` Operator

When a function’s implementation calls something that might fail, instead of handling the error
within the function itself, you can return the error to the calling code so that it can decide what
to do.

```rs
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Result<String, io::Error> {
    let mut username_file = File::open("hello.txt")?;
    let mut username = String::new();
    username_file.read_to_string(&mut username)?;
    Ok(username)
}
```

- If the value is an Err, the Err will be returned from the whole function as if we had used the
  return keyword so the error value gets propagated to the calling code.

- The ? operator in a function that returns Result, Option, or another type that implements
 FromResidual.
