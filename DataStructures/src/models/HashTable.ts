import { defaultToString } from "../utils/utils";
import ValuePair from "./ValuePair";

export default class HashTable<K, V> {
	protected _table: { [key: string]: ValuePair<K, V> };

	constructor() {
		this._table = {};
	}

	get table(){
		return this._table;
	}

	private loseloseHashCode(key: K): number {
		if (typeof key === 'number') return key;
		let hash = 0;
		this.toStrnFn(key).split('').forEach(e => hash += e.charCodeAt(0));
		return hash % 37;
	}

	private toStrnFn(key: K) {
		return defaultToString(key);
	}

	put(key: K, value: V): boolean {
		if (key == null || value == null) return false;
		let index = this.loseloseHashCode(key);
		this._table[index] = new ValuePair(key, value);
		return true;
	}

	get(key: K): V | undefined {
		return this._table[this.loseloseHashCode(key)].value;
	}

	remove(key: K): boolean {
		if (key == null ) return false;
		delete this._table[this.loseloseHashCode(key)];
		return true;
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	size(): number {
		return Object.keys(this._table).length;
	}

	clear(): void {
		this._table = {};
	}

	toString(): string {
		if (this.isEmpty()) return '';

		let keys = Object.keys(this._table);
		let objString = '';
		for (let i = 0; i < keys.length; i++) {
			objString += `${keys[i]} => ${this._table[keys[i]].toString()}\n`;
		}
		return objString;
	}
}
