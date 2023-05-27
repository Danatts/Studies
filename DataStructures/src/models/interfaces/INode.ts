import Node from "../classes/Node";

export default interface INode<T>{
	element: T;
	next: Node<T> | null
}
