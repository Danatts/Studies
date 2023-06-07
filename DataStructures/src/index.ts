import BinarySearchTree from "./models/BinarySearchTree";

let foo = new BinarySearchTree<number>();

foo.insert(11);
foo.insert(15);
foo.insert(7);
foo.insert(5);
foo.insert(3);
foo.insert(9);
foo.insert(8);
foo.insert(10);
foo.insert(13);
foo.insert(12);
foo.insert(14);
foo.insert(20);
foo.insert(18);
foo.insert(25);
foo.insert(6);
foo.postOrderTraverse((e: number) => console.log(e))
