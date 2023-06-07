import { TreeNode } from "./Nodes";

export default class BinarySearchTree<T> {
	protected _root: TreeNode<T> | undefined;

	constructor(){
		this._root = undefined;	
	}

	get root(): TreeNode<T> | undefined {
		return this._root;
	}

	private insertNode(node: TreeNode<T>, key: T): void {
		if (key < node.key) {
			if (node.left == null) {
				node.left = new TreeNode(key);
			} else {
				this.insertNode(node.left, key);
			}
		} else {
			if (node.right == null) {
				node.right = new TreeNode(key);
			} else {
				this.insertNode(node.right, key);
			}
		}
	}

	insert(key: T): void {
		if (this._root == null) {
			this._root = new TreeNode(key);
		} else {
			this.insertNode(this._root, key);
		}
	}

	private searchNode(node: TreeNode<T> | undefined, key: T): boolean {
		if (node == null) return false;
		if (key < node.key) {
			return this.searchNode(node.left, key);
		} else if (key > node.key) {
			return this.searchNode(node.right, key);
		} else {
			return true;
		}
	}

	search(key: T): boolean {
		return this.searchNode(this._root, key);
	}

	private inOrderTraverseNode(node: TreeNode<T> | undefined, callback: Function): void {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	inOrderTraverse(callback: Function): void {
		this.inOrderTraverseNode(this._root, callback);
	}

	private preOrderTraverseNode(node: TreeNode<T> | undefined, callback: Function): void {
		if (node != null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	preOrderTraverse(callback: Function): void {
		this.preOrderTraverseNode(this._root, callback);
	}

	private postOrderTraverseNode(node: TreeNode<T> | undefined, callback: Function): void {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	postOrderTraverse(callback: Function): void {
		this.postOrderTraverseNode(this._root, callback);
	}

	private minNode(node: TreeNode<T> | undefined): T | undefined {
		if (node) {
			while (node.left != null) {
				node = node.left;
			}
			return node.key;
		}
		return undefined;
	}

	min(): T | undefined {
		return this.minNode(this._root);
	}

	private maxNode(node: TreeNode<T> | undefined): T | undefined {
		if (node) {
			while (node.right != null) {
				node = node.right;
			}
			return node.key;
		}
		return undefined;
	}

	max(): T | undefined {
		return this.maxNode(this._root);
	}

	private findMinNode(node: TreeNode<T>): TreeNode<T> {
		while (node.left != null) {
			node = node.left;
		}
		return node;
	}

	private removeNode(node: TreeNode<T> | undefined, key: T): TreeNode<T> | undefined {
		if (node == null) return undefined;
		if (key < node.key) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// case 1 -> a leaf node
			if (node.left == null && node.right == null) {
				node = undefined;
				return node;
			}
			// case 2 -> a node with only one child
			if (node.left == null) {
				node = node.right;
				return node;
			} else if (node.right == null) {
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

	remove(key: T): void {
		this._root = this.removeNode(this._root, key);
	}
}
