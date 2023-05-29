import ISets from "../interfaces/ISets";

export default class Set<T> implements ISets<T>{
	private _items: T[];

	constructor() {
		this._items = [];
	}

	add(element: T): boolean {
		if (this._items.includes(element)) return false
		this._items.push(element);
		return true
	}

	delete(element: T): boolean {
		if (!this._items.includes(element)) return false
		this._items.splice(this._items.indexOf(element), 1);
		return true
	}

	has(element: T): boolean {
		return this._items.includes(element);
	}

	clear(): void {
		this._items = [];
	}

	size(): number {
		return this._items.length
	}

	values(): T[] {
		return [...this._items]
	}
}
