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

- Characters are specified with sinlge quotes.
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

