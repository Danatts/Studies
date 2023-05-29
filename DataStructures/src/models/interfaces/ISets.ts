import Set from "../classes/Sets";

export default interface ISets<T> {
	add(element: T): boolean;
	delete(element: T): boolean;
	has(element: T): boolean;
	clear(): void;
	size(): number;
	values(): T[];
	union(set: Set<T>): Set<T>;
	intersection(set: Set<T>): Set<T>;
	difference(set: Set<T>): Set<T>;
	subset(set: Set<T>): boolean;
}
