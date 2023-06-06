import IHashTable from "../interfaces/IHashTable";

export default class HashTable<V> implements IHashTable<V> {
	private _table: (V|undefined)[];

	constructor(){
		this._table = [];	
	}

	private loseloseHashCode(key: string): number {
		let hash = 0;
		key.split('').forEach(e => hash += e.charCodeAt(0));
		return hash % 37;
	}

	put(key: string, value: V): void {
		this._table[this.loseloseHashCode(key)] = value;
	}


	remove(key: string): void {
		this._table[this.loseloseHashCode(key)] = undefined;
	}

	get(key: string): V | undefined {
		return this._table[this.loseloseHashCode(key)];
	}
}
