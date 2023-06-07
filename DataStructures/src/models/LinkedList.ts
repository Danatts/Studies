import { LinkedNode } from "./Nodes";

export default class LinkedList<T> {
	protected _head: LinkedNode<T> | undefined;
	protected _length: number;

	constructor() {
		this._head = undefined;
		this._length = 0;
	}

	get head(): LinkedNode<T> | undefined {
		return this._head
	}

	getElementAt(index: number): LinkedNode<T> | undefined {
		if (index < 0 || index > this._length) return undefined;

		let node = this._head;

		for (let i = 0; i < index && node != null; i++) {
			node = node.next;
		}
		return node;
	}

	append(element: T): void {
		let node = new LinkedNode(element);
		let current;

		if (this._head == null) {
			this._head = node;
		} else {
			current = this._head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this._length++;
	}

	insert(index: number, element: T): boolean {
		if (index < 0 || index > this._length) return false;

		let node = new LinkedNode(element);

		if (index === 0) {
			node.next = this._head;
			this._head = node;
		} else {
			let prev = this.getElementAt(index - 1);
			node.next = prev?.next;
			if (prev) prev.next = node;
		}
		this._length++;
		return true;
	}

	removeAt(index: number): T | undefined {
		if (index < 0 || index >= this._length) return undefined;

		let current = this._head;

		if (index === 0) {
			this._head = current?.next;
		} else {
			let prev = this.getElementAt(index - 1);
			current = prev?.next;
			if (prev) prev.next = current?.next;
		}
		this._length--;
		return current?.element;
	}

	remove(element: T): T | undefined {
		return this.removeAt(this.indexOf(element));
	}

	indexOf(element: T): number {
		let current = this._head;
		let index = 0;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}

	isEmpty(): boolean {
		return this._length === 0;
	}

	size(): number {
		return this._length;
	}

	clear(): void {
		this._head = undefined;
		this._length = 0;
	}

	toString(): string {
		let current = this._head;
		let string: string = '';

		while (current) {
			string += current.element + (current.next ? '\n' : '');
			current = current.next;
		}
		return string;
	}
}

