export class LinkedNode<T> {
	public element: T;
	public next?: LinkedNode<T>;

	constructor(element: T, next?: LinkedNode<T>) {
		this.element = element;
		this.next = next;
	}
}

export class DoublyNode<T> extends LinkedNode<T> {
	public prev?: DoublyNode<T>;
	public next?: DoublyNode<T>;

	constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
		super(element);
		this.prev = prev;
		this.next = next;
	}
}

export class TreeNode<T> {
	public key: T;
	public left?: TreeNode<T>;
	public right?: TreeNode<T>;

	constructor(key: T) {
		this.key = key;
		this.left = undefined;
		this.right = undefined;
	}
}
