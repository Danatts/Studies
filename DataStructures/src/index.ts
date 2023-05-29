import Set from "./models/classes/Sets";

const foo = new Set<number>();
const bar = new Set<number>();

foo.add(5)
foo.add(7)
foo.add(8)

bar.add(5)
bar.add(6)
bar.add(7)
bar.add(9)
bar.add(12)

console.log(foo.subset(bar))

