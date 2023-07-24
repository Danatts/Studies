export default class List<T> {
  private _items: T[];

  constructor() {
    this._items = [];
  }

  private swap(array: T[], index1: number, index2: number) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }

  public insert(item: T) {
    this._items.push(item);
  }

  public toString(): string {
    return this._items.join();
  }

  public bubbleSort() {
    let length = this._items.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this._items[j] > this._items[j + 1]) {
          this.swap(this._items, j, j + 1);
        }
      }
    }
  }

  public selectionSort() {
    let length = this._items.length;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (this._items[indexMin] > this._items[j]) {
          indexMin = j;
        }
        if (i !== indexMin) {
          this.swap(this._items, i, indexMin)
        }
      }
    }
  }

  public insertionSort() {
    let length = this._items.length;
    let j, temp;

    for (let i = 1; i < length; i++) {
      j = i;
      temp = this._items[i];

      while (j > 0 && this._items[j - 1] > temp) {
        this._items[j] = this._items[j - 1];
        j--;
      }
      this._items[j] = temp;
    }
  }

  public size(): number {
    return this._items.length;
  }
}
