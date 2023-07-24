import LinkedList from "./LinkedList";
import { DoublyNode } from "./Nodes";

export class DoublyLinkedList<T> extends LinkedList<T> {
	protected _head: DoublyNode<T> | undefined;
	protected _tail: DoublyNode<T> | undefined;

	constructor() {
		super();
		this._head = undefined;
		this._tail = undefined;
	}

	get head(): DoublyNode<T> | undefined {
		return this._head;
	}

	get tail(): DoublyNode<T> | undefined {
		return this._tail;
	}

	public append(element: T): void {
		let node = new DoublyNode(element);

		if (this._head == null) {
			this._head = node;
			this._tail = node;
		} else {
			if (this._tail) this._tail.next = node;
			node.prev = this._tail;
			this._tail = node;
		}
		this._length++;
	}

	public insert(index: number, element: T): boolean {
		if (index < 0 || index > this._length) return false

		let node = new DoublyNode(element);
		let current = this._head;

		if (index === 0) {
			if (!this._head) {
				this._head = node;
				this._tail = node;
			} else {
				node.next = current;
				if (current) current.prev = node;
				this._head = node;
			}
		} else if (index === this._length) {
			current = this._tail;
			if (current) current.next = node;
			node.prev = current;
			this._tail = node;
		} else {
			let previous = this.getElementAt(index - 1);
			current = previous?.next;
			node.next = current;
			if (previous) previous.next = node;
			if (current) current.prev = node;
			node.prev = previous;
		}
		this._length++;
		return true;
	}

	public removeAt(index: number): T | undefined {
		if (index < 0 || index >= this._length) return undefined;

		let current = this._head;

		if (index === 0) {
			this._head = current?.next;
			if (this._length === 1) {
				this._tail = undefined;
			} else {
				if (this._head) this._head.prev = undefined;
			}
		} else if (index === this._length - 1) {
			current = this._tail;
			this._tail = current?.prev;
			if (this._tail) this._tail.next = undefined;
		} else {
			current = this.getElementAt(index);
			let previous = current?.prev;
			if (previous) previous.next = current?.next;
			if (current?.next) current.next.prev = previous;
		}
		this._length--;
		return current?.element
	}

	public clear(): void {
		this._head = undefined;
		this._tail = undefined;
		this._length = 0;
	}

	public inverseToString(): string {
		let current = this._tail;
		let string: string = '';

		while (current) {
			string += current.element + (current.next ? '\n' : '')
			current = current.next
		}

		return string
	}
}
