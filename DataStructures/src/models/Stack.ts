export default class Stack<T> {
	protected _items: T[]

	constructor() {
		this._items = []
	}

	push(element: T): void {
		this._items.push(element)
	}

	pop(): T | undefined {
		return this._items.pop()
	}

	peek(): T | undefined {
		return this._items[this._items.length - 1]
	}

	isEmpty(): boolean {
		return this._items.length === 0
	}

	clear(): void {
		this._items = []
	}

	size(): number {
		return this._items.length
	}

	print(): void {
		console.log(this._items.toString())
	}
}
