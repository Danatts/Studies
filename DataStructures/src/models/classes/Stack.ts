import IStack from "../interfaces/IStack";

export default class Stack<T> implements IStack<T>  {
	private items: T[]

	constructor() {
		this.items = []
	}

	push(element: T): void {
		this.items.push(element)
	}

	pop(): T | undefined {
		return this.items.pop()
	}

	peek(): T | undefined {
		return this.items[this.items.length - 1]
	}

	isEmpty(): boolean {
		return this.items.length === 0
	}

	clear(): void {
		this.items = []
	}

	size(): number {
		return this.items.length
	}

	print(): void {
		console.log(this.items.toString())
	}
}
