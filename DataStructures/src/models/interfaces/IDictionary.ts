
export default interface IDictionary<V> {
	set(key: string, value: V): void;
	delete(key: string): boolean;
	has(key: string): boolean;
	get(key: string): V | undefined;
	clear(): void;
	size(): number;
	keys(): string[];
	values(): V[];
}
