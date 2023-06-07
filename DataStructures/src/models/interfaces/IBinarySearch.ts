export default interface IBinarySearch<T> {
	insert(key: T): void;
	search(key: T): boolean;
	inOrderTraverse(callback: () => void): void;
	preOrderTraverse(callback: () => void): void;
	postOrderTraverse(callback: () => void): void;
	min(): T | null;
	max(): T | null;
	remove(key: T): void;
}
