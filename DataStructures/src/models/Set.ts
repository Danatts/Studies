export default class Set<T> {
	protected _items: T[];

	constructor() {
		this._items = [];
	}

	static from<T>(array: T[]): Set<T> {
		let set = new Set<T>();
		array.forEach(e => set.add(e));
		return set;
	}

	public add(element: T): boolean {
		if (this._items.includes(element)) return false;
		this._items.push(element);
		return true;
	}

	public delete(element: T): boolean {
		if (!this._items.includes(element)) return false;
		this._items.splice(this._items.indexOf(element), 1);
		return true
	}

	public has(element: T): boolean {
		return this._items.includes(element);
	}

	public clear(): void {
		this._items = [];
	}

	public size(): number {
		return this._items.length;
	}

	public values(): T[] {
		return [...this._items];
	}

	public union(set: Set<T>): Set<T> {
		let unionSet = Set.from([...this._items]);
		set.values().forEach(e => unionSet.add(e));
		return unionSet;
	}

	public intersection(set: Set<T>): Set<T> {
		return Set.from(this._items.filter(e => set.has(e)));
	}

	public difference(set: Set<T>): Set<T> {
		return Set.from(this._items.filter(e => !set.has(e)));
	}

	public subset(set: Set<T>): boolean {
		return this._items.every(e => set.has(e));
	}
}
