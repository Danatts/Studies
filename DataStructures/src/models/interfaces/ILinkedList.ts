export default interface ILinkedList<T> {
	append(element: T): void;
	insert(position: number, element: T): boolean;
	remove(element: T): T | null;
	indexOf(element: T): number;
	removeAt(position: number): T | null;
	isEmpty(): boolean;
	size(): number;
	toString(): string;
}
