# Data Types

## Primitive Types

### Integer Type

| Length   | Signed   | Unsigned |
| -------- | -------- | -------- |
| 8-bit    | i8       | u8       |
| 16-bit   | i16      | u16      |
| 32-bit   | i32      | u32      |
| 64-bit   | i64      | u64      |
| 128-bit  | i128     | u128     |
| arch     | isize    | usize    |

- Defaults types is `i32`.

### Float Type

```rs
let x: f32 = 3.0; // f32
let x: f64 = 3.0; // f32
```

- Defaults type is `f64`.

### Boolean Type

```rs
let x: bool = true;
let y: bool = false;
```

- Defaults type is `true`.

### Character Type

```rs
let c: char 'z';
let z: char = 'ℤ';
let heart_eyed_cat = '😻';
```

- Characters are specified with single quotes.
- `char` type is four bytes in size.

### String Slice

```rs
let s: &'static str = "Hello, world!";
```

- String literals are specified with double quotes.
- Slices are references so they do not have ownership.

A *string slice* is a reference to a part of a `String`.

```rs
fn main() {
    let s = String::from("hello world");

    let hello = &s[0..5];
    let world = &s[6..11];
}
```

## Compound Types

### Tuple Type

- Elements of a tuple can be of different types.
- Tuples have fixed length.

```rs
let tup: (i32, f64, u8) = (500, 6.4, 1);

// Destructuring a tuple value
let (x, y, z) = tup; // x = 500, y = 6.4, z = 1

// Accesing a tuple element
let five_hundred = tup.0;
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
```

## Structs

### Clasic struct

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

// Access and modification of data
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

### Tuple struct

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

### Unit-Like struct

```rs
struct AlwaysEqual;

fn main() {
    let subject = AlwaysEqual;
}
```

### Methods

*Methods* are like functions but inside a struct.

```rs
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

### Associated functions without `self`

```rs
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

//Calling the function
fn main() {
    let sq = Rectangle::square(3);
}
```

## Enums

*Enums* allow to define a type by enumerating its possible variants, they give a way of saying a
value is one of a possible set of values.

```rs
enum IpAddrKind {
    V4,
    v6,
}

let four = IpAddrKind::V4;
let six = IpAddrKind::V6;

// Attach data to enum variants
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);

let loopback = IpAddr::V6(String::from("::1"));
```

- Any kind of data can be inside an enum variant.

```rs
enum Message {
    Quit, // unit struct
    Move { x: i32, y: i32 }, // clasic struct
    Write(String), // tuple struct
    ChangeColor(i32, i32, i32), // tuple struct
}
```

### Methods

```rs
impl Message {
    fn call(&self) {
        // method body would be defined here
    }
}

let m = Message::Write(String::from("hello"));
m.call();
```

## Option<T>

- The `Option` type encodes the scenario in which a value could be something or it could be nothing.

```rs
enum Option<T> {
    None,
    Some(T),
}
```

```rs
fn main() {
    fn plus_one(x: Option<i32>) -> Option<i32> {
        match x {
            None => None,
            Some(i) => Some(i + 1),
        }
    }

    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);
}
```

## Collection Type

Collections can contain multiple values, and the data these collections points to is stored on the
heap, so the amount of data does not need to be known at compile time and can grow or shrink as the
program runs.

### Vectors

- Store more than one value in a single data structure that puts all the values next to each other
  in memory.
- Can only store values of the same type.
- Unlike arrays, vectors can grow and shrink in size.

```rs
// Create a vector
let mut v: Vec<i32> = Vec::new();
let v3: Vec<i32> = Vec::from([1, 2, 3]);
let v2 = vec![1, 2, 3];

// Updating a vector
v.push(5);
v.pop();

// Reading elements
let v = vec![1, 2, 3, 4, 5];

let third: &i32 = &v[2];

let third: Option<&i32> = v.get(2);
match third {
    Some(third) => println!("The third element is {third}"),
    None => println!("There is no third element."),
}
```

### String Type

- String type could be mutable.

```rs
let s = String::new();
let s = String::from("hello");

// Concatenating a string
let mut s = String::from("foo");
s.push_str("bar");

// Concatenating a character
let mut s = String::from("lo");
s.push('l');

// + Operator
let s1 = String::from("Hello, ");
let s2 = String::from("world!");
let s3 = s1 + &s2; // note s1 has been moved here and can no longer be used

// format! macro
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");

let s = format!("{s1}-{s2}-{s3}");
```

### Hash maps

```rs
// Creating a hash map
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("blue"), 10);
scores.insert(String::from("yellow"), 50);

// Accessing values
let score = scores.get(&team_name).copied().unwrap_or(0);

// Iterating
for (key, value) in &scores {
    println!("{key}: {value}");
}

// Overwriting a value
scores.insert(String::from("blue"), 10);
scores.insert(String::from("blue"), 25);

// Adding value only if a key is not present
scores.entry(String::from("yellow")).or_insert(50);

//Updating a value based on the old value  
let text = "hello world wonderful world";

let mut map = HashMap::new();

for word in text.split_whitespace() {
    let count = map.entry(word).or_insert(0);
    *count += 1;
}
```

- For types that implement the `Copy` trait, like `i32`, the values are copied into the hash map.
For owned values like `String`, the values will be moved and the hash map will be the owner of
those values
- Each unique key can only have one value associated with it at a time.

