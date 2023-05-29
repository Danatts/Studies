import Set from "./models/classes/Sets";

const foo = new Set<number>();

foo.add(5)
foo.add(7)
foo.add(9)
foo.add(11)
console.log(foo.values())
console.log(foo.has(9))
console.log(foo.has(10))
foo.delete(9)
console.log(foo.values())
console.log(foo.size())
foo.clear()
console.log(foo.values())
console.log(foo.size())
