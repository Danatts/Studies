import Dictionary from "./models/classes/Dictionary";

let foo = new Dictionary<string>();

foo.set("Daniel", "Bogota")
foo.set("Claudia", "Ibague")
foo.set("Berenice", "Barcelona")
foo.set("Mary", "USA")
foo.set("Paula", "Argentina")

console.log(foo.items);

foo.delete("Mary")

console.log(foo.items);

console.log(foo.get("Daniel"))

console.log(foo.has("Paula"));
console.log(foo.has("Alfonso"));
console.log(foo.values())
console.log(foo.keys())
console.log(foo.size())

foo.clear()

console.log(foo.items);

