# Generic Types, Traits and Lifetimes

## Generic Types

### Function

```rs
fn foo<T>(param: T) -> T {
    // function body
}
```
### Struct

```rs
struct Point<T> {
    x:T,
    y: T,
}

fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 5.0, y: 4.0 };
}
```
### Method

```rs
struct Point<T> {
    x:T,
    y: T,
}

impl<T> Point<T> {
    fn get_x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };
    println!("p.x = {}", p.get_x());
}
```
We can also specify constraints on generic types when defining methods on the type. We could, for
example, implement methods only on Point<f32> instances rather than on Point<T> instances with any
generic type.

```rs
impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}
```
This code means the type Point<f32> will have a distance_from_origin method; other instances of
Point<T> where T is not of type f32 will not have this method defined.

```rs
struct Point<X1, Y1> {
    x: X1,
    y: Y1,
}

impl<X1, Y1> Point<X1, Y1> {
    fn mixup<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}
```

## Traits

A trait defines functionality a particular type has and can share with other types. We can use
traits to define shared behavior in an abstract way.

```rs
pub trait Summary {
    fn summarize_author(&self) -> String;

    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}
```

After the method signature, instead of providing an implementation within curly brackets, we use a
semicolon. Each type implementing this trait must provide its own custom behavior for the body of
the method. The compiler will enforce that any type that has the Summary trait will have the method
summarize defined with this signature exactly.

```rs
pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}
```

- The user must bring the trait into scope as well as the types.

### Traits as Parameters

```rs
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

Instead of a concrete type for the item parameter, we specify the impl keyword and the trait name.
This parameter accepts any type that implements the specified trait.

Another way to write the same code is:

```rs
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}
```
If we want to force both parameters to have the same type, however, we must use a trait bound,
like this:

```rs
pub fn notify<T: Summary>(item1: &T, item2: &T) {
```

### Multiple trait Bounds

```rs
pub fn notify(item: &(impl Summary + Display)) {
    // body
}

// or

pub fn notify<T: Summary + Display>(item: &T) {
    // body
}
```

### Clearer Trait Bounds with `where` Clauses

```rs
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {

// using where

fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
```

### Returning Types that implement Traits

```rs
fn returns_summarizable() -> impl Summary {
    Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    }
}
```

- You can only use `impl Trait` if you are returning a single type.
