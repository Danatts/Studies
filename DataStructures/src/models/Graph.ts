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

  public addVertex(v: T): void {
    this._vertices.push(v);
    this._adjList.set(v, []);
  }

  public addEdge(v: T, w: T): void {
    this._adjList.get(v)?.push(w);
    this._adjList.get(w)?.push(v);
  }

  public isEmpty(): boolean {
    return this._vertices.length === 0;
  }

  public size(): number {
    return this._vertices.length;
  }

  public clear(): void {
    this._vertices = [];
    this._adjList.clear();
  }

  public toString(): string {
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

