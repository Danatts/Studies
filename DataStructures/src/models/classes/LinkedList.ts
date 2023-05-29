import ILinkedList from "../interfaces/ILinkedList";
import Node from "./Node";

export class LinkedList<T> implements ILinkedList<T> {
	private _head: Node<T> | null = null;
	private length: number = 0;

	get head(): Node<T> | null {
		return this._head
	}

	append(element: T): void {
		let node = new Node(element);
		let current: Node<T> | null = null;

		if (this._head === null) {
			this._head = node;
		} else {
			current = this._head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.length++;
	}

	insert(position: number, element: T): boolean {
		if (position < 0 || position > this.length) return false

		let node = new Node(element);
		let current: Node<T> | null = this._head;
		let previous: Node<T> | null = null;
		let index: number = 0;

		if (position === 0) {
			node.next = current;
		} else {
			while (index++ < position) {
				previous = current;
				current = current && current.next;
			}
			node.next = current;
			if (previous) previous.next = node;
		}
		this.length++
		return true
	}

	remove(element: T): T | null {
		return this.removeAt(this.indexOf(element))
	}

	indexOf(element: T): number {
		let current: Node<T> | null = this._head;
		let index: number = 0;

		while (current) {
			if (element === current.element) {
				return index
			}
			index++;
			current = current.next;
		}
		return -1
	}

	removeAt(position: number): T | null {
		if (position < 0 || position >= this.length) return null

		let current: Node<T> | null = this._head;
		let previous: Node<T> | null = null;
		let index: number = 0;

		if (position === 0) {
			this._head = current && current.next;
		} else {
			while (index++ < position) {
				previous = current;
				current = current && current.next;
			}
			if (previous) previous.next = current && current.next;
		}
		this.length--
		return current && current.element
	}

	isEmpty(): boolean {
		return this.length === 0
	}

	size(): number {
		return this.length
	}

	toString(): string {
		let current: Node<T> | null = this._head;
		let string: string = '';

		while (current) {
			string += current.element + (current.next ? '\n' : '')
			current = current.next
		}
		return string
	}
}

export class DoublyLinkedList<T> implements ILinkedList<T> {
	private _head: Node<T> | null = null;
	private _tail: Node<T> | null = null;
	private _length: number = 0;

	get head(): Node<T> | null {
		return this._head
	}

	append(element: T): void {
		let node = new Node(element);
		let current: Node<T> | null = null;

		if (this._head === null) {
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

	insert(position: number, element: T): boolean {
		if (position < 0 || position > this._length) return false

		let node = new Node(element);
		let current: Node<T> | null = this._head;
		let previous: Node<T> | null = null;
		let index: number = 0;

		if (position === 0) {
			if (!this._head) {
				this._head = node;
				this._tail = node;
			} else {
				node.next = current;
				if (current) current.previous = node;
				this._head = node;
			}
		} else if (position == this._length) {
			current = this._tail;
			if (current) current.next = node;
			node.previous = current;
			this._tail = node;
		} else {
			while (index++ < position) {
				previous = current;
				current = current && current.next;
			}
			node.next = current;
			if (previous) previous.next = node;

			if (current) current.previous = node;
			node.previous = previous;
		}
		this._length++
		return true
	}

	remove(element: T): T | null {
		return this.removeAt(this.indexOf(element))
	}

	indexOf(element: T): number {
		let current: Node<T> | null = this._head;
		let index: number = 0;

		while (current) {
			if (element === current.element) {
				return index
			}
			index++;
			current = current.next;
		}
		return -1
	}

	removeAt(position: number): T | null {
		if (position < 0 || position >= this._length) return null

		let current: Node<T> | null = this._head;
		let previous: Node<T> | null = null;
		let index: number = 0;

		if (position === 0) {
			this._head = current && current.next;
			if (this._length === 1) {
				this._tail = null
			} else {
				if (this._head) this._head.previous = null;
			}
		} else if (position === this._length - 1) {
			current = this._tail;
			this._tail = current && current.previous;
			if (this._tail) this._tail.next = null;
		} else {
			while (index++ < position) {
				previous = current;
				current = current && current.next;
			}
			if (previous) previous.next = current && current.next;
			if (current && current.next) current.next.previous = previous;
		}
		this._length--
		return current && current.element
	}

	isEmpty(): boolean {
		return this._length === 0
	}

	size(): number {
		return this._length
	}

	toString(): string {
		let current: Node<T> | null = this._head;
		let string: string = '';

		while (current) {
			string += current.element + (current.next ? '\n' : '')
			current = current.next
		}

		return string
	}
}
