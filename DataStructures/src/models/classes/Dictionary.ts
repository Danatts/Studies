import IDictionary from "../interfaces/IDictionary";

export default class Dictionary<V> implements IDictionary<V> {
	private _items: { [key: string]: V };

	constructor() {
		this._items = {};
	}

	get items() {
		return this._items;
	}

	set(key: string, value: V): void {
		this.items[key] = value;
	}

	delete(key: string): boolean {
		if (this.has(key)) {
			delete this.items[key];
			return true;
		}
		return false;
	}

	has(key: string): boolean {
		return key in this.items;
	}

	get(key: string): V | undefined {
		return this.items[key]
	}

	clear(): void {
		this._items = {}
	}

	size(): number {
		return this.values().length;
	}

	keys(): string[] {
		return Object.keys(this.items);
	}

	values(): V[] {
		let values = [];
		for (const key in this.items) {
			if (this.has(key)) {
				values.push(this.items[key])
			}
		}
		return values;
	}
}
