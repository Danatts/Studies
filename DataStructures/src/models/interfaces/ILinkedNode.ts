import Node from "../classes/LinkedNode";

export default interface ILinkedNode<T>{
	element: T;
	previous?: Node<T> | null
	next: Node<T> | null
}
