import LinkedList from "./models/classes/LinkedList";

let list = new LinkedList();

list.append(6)
list.append(8)
list.append(10)
list.append(12)
console.log(list.head?.next?.next?.next?.next)
console.log(list.toString())
