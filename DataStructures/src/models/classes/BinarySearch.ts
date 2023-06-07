import TreeNode from "./TreeNode";

export default class BinarySearch<T> {
	private root: TreeNode<T> | null;;

	private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	private inOrderTraverseNode(node: TreeNode<T> | null, callback: (e: T) => void): void {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	private preOrderTraverseNode(node: TreeNode<T> | null, callback: (e: T) => void): void {
		if (node !== null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	private postOrderTraverseNode(node: TreeNode<T> | null, callback: (e: T) => void): void {
		if (node !== null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	private minNode(node: TreeNode<T> | null): T | null {
		if (node) {
			while (node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
		return null;
	}

	private maxNode(node: TreeNode<T> | null): T | null {
		if (node) {
			while (node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	private searchNode(node: TreeNode<T> | null, key: T): boolean {
		if (node === null) return false;
		if (key < node.key) {
			return this.searchNode(node.left, key);
		} else if (key > node.key) {
			return this.searchNode(node.right, key);
		} else {
			return true;
		}
	}

	private removeNode(node: TreeNode<T> | null, key: T): TreeNode<T> | null {
		if (node === null) return null;
		if (key < node.key) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// case 1 -> a leaf node
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			// case 2 -> a node with only one child
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}
			// case 3 -> a node with two children
			let aux = this.findMinNode(node.right);
			node.key = aux.key;
			node.right = this.removeNode(node.right, aux.key);
			return node;
		}
	}

	private findMinNode(node: TreeNode<T>): TreeNode<T> {
		while (node.left !== null) {
			node = node.left;
		}
		return node;
	}

	constructor() {
		this.root = null;
	}

	insert(key: T): void {
		let node = new TreeNode(key);

		if (this.root === null) {
			this.root = node;
		} else {
			this.insertNode(this.root, node);
		}
	}

	search(key: T): boolean {
		return this.searchNode(this.root, key);
	}

	inOrderTraverse(callback: (e: T) => void): void {
		this.inOrderTraverseNode(this.root, callback);
	}

	preOrderTraverse(callback: (e: T) => void): void {
		this.preOrderTraverseNode(this.root, callback);
	}

	postOrderTraverse(callback: (e: T) => void): void {
		this.postOrderTraverseNode(this.root, callback);
	}

	min(): T | null {
		return this.minNode(this.root);
	}

	max(): T | null {
		return this.maxNode(this.root);
	}

	remove(key: T): void {
		this.root = this.removeNode(this.root, key);
	}
}
