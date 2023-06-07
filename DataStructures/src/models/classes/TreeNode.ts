import ITreeNode from "../interfaces/ITreeNode";

export default class TreeNode<T> implements ITreeNode<T> {
	key: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(key: T) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}
