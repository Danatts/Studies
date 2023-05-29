export default interface ISets<T> {
	add(element: T): boolean;
	delete(element: T): boolean;
	has(element: T): boolean;
	clear(): void;
	size(): number;
	values(): T[];
}
