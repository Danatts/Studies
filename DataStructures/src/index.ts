import HashTable from "./models/classes/HashTable";

let hash = new HashTable();

hash.put('Gandalf', 'gandalf@mail.com')
hash.put('John', 'john@mail.com')
hash.put('Tyrion', 'tyrion@mail.com')

hash.remove('Gandalf')

console.log(hash.get('Gandalf'))
console.log(hash.get('Louis'))
