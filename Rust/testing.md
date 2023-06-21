# Testing

To change a function into a test function, add `#[test]` on the line before `fn`. When you run your
test with the `cargo test` command, Rust builds a test runner binary that runs the annotated
functions and reports on whether each test function passes or fails.

```rs
#[test]
fn it_works() {
    let result = 2 + 2;
    assert_eq!(result, 4);
}
```

## Checking Results with Macros

### `assert!`

The `assert!` macro is useful when you want to ensure that some condition in a test evaluates to
`true`. We give the `assert!` macro an argument that evaluates to a boolean.

```rs
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn larger_can_hold_smaller() {
        let larger = Rectangle {
            width: 8,
            height: 7,
        };
        let smaller = Rectangle {
            width: 5,
            height: 1,
        };

        assert!(larger.can_hold(&smaller));
    }
}
```

### `assert_eq!` and `assert_ne`

These macros compare two arguments for equality or inequality, printing both values if the assertion
fails.

```rs
pub fn add_two(a: i32) -> i32 {
    a + 2
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_adds_two() {
        assert_eq!(4, add_two(2));
    }
}
```

## Adding Custom Failure Messages

Any arguments specified after the required arguments are passed along to the `format!` macro.

```rs
pub fn greeting(name: &str) -> String {
    String::from("Hello!")
}

#[test]
fn greeting_contains_name() {
    let result = greeting("Carol");
    assert!(
        result.contains("Carol"),
        "Greeting did not contain name, value was `{}`",
        result
    );
}
```

## Checking for Panics with `should_panic` attribute

The test passes if the code inside the function panics; the test fails if the code inside the
function does not panic.

We place the `#[should_panic]` attribute after the `#[test]` attribute and before the test function
it applies to.

```rs
pub struct Guess {
    value: i32,
}

impl Guess {
    pub fn new(value: i32) -> Guess {
        if value < 1 || value > 100 {
            panic!("Guess value must be between 1 and 100, got {}.", value);
        }

        Guess { value }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn greater_than_100() {
        Guess::new(200);
    }
}
```

## Using `Result<T, E>` in Tests

```rs
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() -> Result<(), String> {
        if 2 + 2 == 4 {
            Ok(())
        } else {
            Err(String::from("two plus two does not equal four"))
        }
    }
}
```

## Test Organization

### Unit Tests

The purpose of unit tests is to test each unit of code in isolation from the rest of the code to
quickly pinpoint where code is and is not working as expected.

The convention is to create a module named `tests` in each file to contain the test functions and to
annotate the module with `cfg(test)`.

The `#[cfg(test)]` annotation on the tests module tells Rust to compile and run the test code only
when you run `cargo test`.

### Integration Tests

Integration tests are entirely external to your library. They use your library in the same way any
other code would. Their purpose is to test whether many parts of your library work together
correctly.

We create a `tests` directory at the top level of our project directory, next to `src`.

```
adder
├── Cargo.lock
├── Cargo.toml
├── src
│   └── lib.rs
└── tests
    └── integration_test.rs
```

```rs
use adder;

#[test]
fn it_adds_two() {
    assert_eq!(4, adder::add_two(2));
}
```
