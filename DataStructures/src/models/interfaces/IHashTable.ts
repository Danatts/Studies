export default interface IHashTable<V> {
	put(key: string, value: V): void;
	remove(key: string): void;
	get(key: string): V | undefined ;
}
