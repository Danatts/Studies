export default class Queue<T> {
	protected _items: T[];

	constructor() {
		this._items = [];
	}

	public enqueue(element: T): void {
		this._items.push(element);
	}

	public dequeue(): T | undefined {
		return this._items.shift();
	}

	public front(): T | undefined {
		return this._items[0];
	}

	public isEmpty(): boolean {
		return this._items.length === 0;
	}

	public clear(): void {
		this._items = [];
	}

	public size(): number {
		return this._items.length;
	}

	public print(): void {
		console.log(this._items.toString());
	}
}
