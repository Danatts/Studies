import TreeNode from "../classes/TreeNode";

export default interface ITreeNode<T> {
	key: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;
}
