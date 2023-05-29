import Node from "../classes/Node";

export default interface INode<T>{
	element: T;
	previous?: Node<T> | null
	next: Node<T> | null
}
