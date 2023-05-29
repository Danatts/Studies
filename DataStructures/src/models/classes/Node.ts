import INode from "../interfaces/INode";

export default class Node<T> implements INode<T>{
	element: T;
	previous: Node<T> | null = null;
	next: Node<T> | null = null;

	constructor(element: T) {
		this.element = element;
	}
}
