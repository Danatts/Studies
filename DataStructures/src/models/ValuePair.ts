export default class ValuePair<K, V> {
	public key: K;
	public value: V;

	constructor(key: K, value: V) {
		this.key = key;
		this.value = value;
	}

	toString(): string {
		return `${this.key}: ${this.value}`;
	}
}
