export default class Queue<T> {
	protected _items: T[];

	constructor() {
		this._items = [];
	}

	enqueue(element: T): void {
		this._items.push(element);
	}

	dequeue(): T | undefined {
		return this._items.shift();
	}

	front(): T | undefined {
		return this._items[0];
	}

	isEmpty(): boolean {
		return this._items.length === 0;
	}

	clear(): void {
		this._items = [];
	}

	size(): number {
		return this._items.length;
	}

	print(): void {
		console.log(this._items.toString());
	}
}
