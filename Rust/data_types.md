# Data Types

## Scalar Types

### Integer Type

| Length | Signed | Unsigned |
| - | - | - |
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32 | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

- Defaults types is `i32`.

### Float Type

```rs
let x = 2.0; // f64
let y: f32 = 3.0; // f32
```

- Defaults type is `f64`.

### Boolean Type

```rs
let x = true;
let y: bool = false;
```

- Defaults type is `true`.

### Character Type

```rs
let c = 'z';
let z: char = 'ℤ'; // with explicit type annotation
let heart_eyed_cat = '😻';
```

- Characters are specified with single quotes.
- `char` type is four bytes in size.

### String literal

```rs
let s: &str = "hello, world";
```

- String literals are inmutable.
- String literals are specified with double quotes.
- Slices are references so they do not have ownership.

### String Type

```rs
let s = String::from("hello, world");
```

- String type is mutable.

## Compound Types

### Tuple Type

- Groups together a number of values with a variety of types into one compound type.
- Tuples have fixed length.

```rs
let tup: (i32, f64, u8) = (500, 6.4, 1);

// Destructuring a tuple value
let (x, y, z) = tup; // x = 500, y = 6.4, z = 1

// Accesing a tuple element
let five_hundred = tup.0;

let six_point_four = tup.1;

let one = x.2;
```

### Array Type

- Every element of an array must have the same type.
- Array have fixed length.
- Arrays are useful when you want your data allocated on the stack rather than the heap.

```rs
let arr: [i32; 5] = [1, 2, 3, 4, 5];

// Same value for each element
let arr2 = [3u32; 5];

// Accesing an array element
let first = arr[0];
let secong = arr[1];
```

### Structs

#### Clasic struct

- The pieces of a struct can be different types.
- Each piece of data has a name and a value.

```rs
struct User {
  active: bool,
  username: String,
  email: String,
  sign_in_count: u64,
}

// To create an instance
let mut user1 = User {
  active: true,
  username: String::from("someusername123"),
  email: String::from("someone@example.com"),
  sign_in_count: 1,
};

// Access and modification of a data
user1.email = String::from("anotheremail@example.com");

// Returning an instance from a function
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username: username,
        email: email,
        sign_in_count: 1,
    }
}

// Struct update syntax
let user2 = User {
  email: String::from("another@example.com"),
  ..user1
};
```

#### Tuple struct

- Have the added meaning the struct name provides but do not have names associated with their
  fields.
- They just have the types of the fields.

```rs
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```

#### Unit-Like struct

```rs
struct AlwaysEqual;

fn main() {
    let subject = AlwaysEqual;
}
```

#### Methods

*Methods* are like functions but inside a struct.

```rs
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}
```

#### Associated functions without `self`

```
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let sq = Rectangle::square(3);
}

//Calling the function
Rectangle::square(3);
```
