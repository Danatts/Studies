# Notas Rust

## Data Types

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


