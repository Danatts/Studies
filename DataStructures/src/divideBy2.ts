import Stack from "./models/classes/Stack";

function divideBy2(decNumber: number): string {
	let remStack = new Stack<number>();
	let rem: number;
	let binaryString: string = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem)
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop()?.toString();
	}

	return binaryString;
}

console.log(divideBy2(233))
console.log(divideBy2(20))
console.log(divideBy2(1000))
