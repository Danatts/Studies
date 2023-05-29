import ISets from "../interfaces/ISets";

export default class Set<T> implements ISets<T>{
	private _items: T[];

	constructor() {
		this._items = [];
	}

	static from<T>(array: T[]): Set<T> {
		let set = new Set<T>();
		array.forEach(e => set.add(e));
		return set
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
		return this._items.includes(element)
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

	union(set: Set<T>): Set<T> {
		let unionSet = Set.from([...this._items]);
		set.values().forEach(e => unionSet.add(e));
		return unionSet	
	}

	intersection(set: Set<T>): Set<T> {
		return Set.from(this._items.filter(e => set.has(e)))
	}

	difference(set: Set<T>): Set<T> {
		return Set.from(this._items.filter(e => !set.has(e)))
	}

	subset(set: Set<T>): boolean {
		return this._items.every(e => set.has(e))
	}
}
