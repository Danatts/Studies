fn fahrenheit_celcius (temp: f32, escala: char) -> f32 {
    if escala == 'c' {
        (temp * 1.8) + 32.0
    } else if escala == 'f' {
        (temp - 32.0) / 1.8
    } else {
        0.0
    }
}

fn fibonacci(num: u32) -> u32 {
    let mut a: u32 = 0;
    let mut b: u32 = 1;
    let mut c: u32;
    
    for _ in 1..=num {
        // println!("{a}");
        c = a + b;
        a = b;
        b = c;
    }
    
    a
}

fn pig_latin(bar: &mut String) {
    let first_letter = bar.remove(0);
    if !is_vowel(first_letter) {
        bar.push(first_letter);
        bar.push_str("ay");
    } else {
        bar.push_str("hay");
    }
}

fn is_vowel(letter: char) -> bool {
    letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
}

fn get_median(array: &mut Vec<u32>) -> u32 {

    array.sort();
    
    let median = if array.len() % 2 != 0 {
        array[array.len() / 2]
    } else {
        (array[array.len() / 2] + array[(array.len() / 2) - 1]) / 2
    };

    println!("{:?}", array);
    median
}

