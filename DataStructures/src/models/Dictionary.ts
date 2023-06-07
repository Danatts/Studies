import { defaultToString } from "../utils/utils";
import ValuePair from "./ValuePair";

export default class Dictionary<K, V> {
	protected _table: { [key: string]: ValuePair<K, V> };

	constructor() {
		this._table = {};
	}

	get table() {
		return this._table;
	}

	protected toStrFn(key: K): string {
		return defaultToString(key);
	}

	protected keyValues(): ValuePair<K, V>[] {
		return Object.values(this._table);
	}

	set(key: K, value: V): boolean {
		if (key == null || value == null) return false;
		this._table[this.toStrFn(key)] = new ValuePair(key, value);
		return true;
	}

	get(key: K): V | undefined {
		return this._table[this.toStrFn(key)].value;
	}

	has(key: K): boolean {
		return this._table[this.toStrFn(key)] != null;
	}

	delete(key: K): boolean {
		if (this.has(key)) {
			delete this._table[this.toStrFn(key)];
			return true;
		}
		return false;
	}

	values(): V[] {
		return this.keyValues().map(valuePair => valuePair.value);
	}

	keys(): K[] {
		return this.keyValues().map(valuePair => valuePair.key);
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

		let valuePairs = this.keyValues();
		let objString = '';
		for (let i = 0; i < valuePairs.length; i++) {
			objString += `${valuePairs[i].toString()}\n`;
		}
		return objString;
	}
}
