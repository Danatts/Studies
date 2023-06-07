import ILinkedNode from "../interfaces/ILinkedNode";

export default class Node<T> implements ILinkedNode<T>{
	element: T;
	previous: Node<T> | null = null;
	next: Node<T> | null = null;

	constructor(element: T) {
		this.element = element;
	}
}
