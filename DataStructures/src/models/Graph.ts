import Dictionary from "./Dictionary";

export default class Graph<T> {
	protected _vertices: T[];
	protected _adjList: Dictionary<T, T[]>;

	constructor() {
		this._vertices = [];
		this._adjList = new Dictionary();
	}

	get vertices(): T[] {
		return this._vertices;
	}

	get adjList(): Dictionary<T, T[]> {
		return this._adjList;
	}

	addVertex(v: T): void {
		this._vertices.push(v);
		this._adjList.set(v, []);
	}

	addEdge(v: T, w: T): void {
		this._adjList.get(v)?.push(w);
		this._adjList.get(w)?.push(v);
	}

	isEmpty(): boolean {
		return this._vertices.length === 0;
	}

	size(): number {
		return this._vertices.length;
	}

	clear(): void {
		this._vertices = [];
		this._adjList.clear();
	}

	toString(): string {
		let objString = '';
		this._vertices.forEach(e => {
			objString += e + ' -> ';
			this._adjList.get(e)?.forEach(j => {
				objString += j + ' ';
			})
			objString += '\n';
		})
		return objString;
	}
}

