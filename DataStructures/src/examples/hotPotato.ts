import Queue from "../models/Queue";

function hotPotato(nameList: string[], num: number): string | undefined {
	let queue = new Queue<string | undefined>();

	for (let i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	let eliminated;

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(`${eliminated} was eliminated from the game.`);
	}
	return queue.dequeue();
}

let names = ['Daniel', 'Paula', 'Edna', 'Alfonso', 'Daniela'];

let winner = hotPotato(names, 7);

console.log(`The winner is ${winner}`);
