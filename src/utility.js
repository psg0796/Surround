export const MAX_ROW = 15, MAX_COL = 10;

export class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}

export class Pair{
    constructor(x, y) {
        this._1 = x;
        this._2 = y;
    }
};

export function isValid(x, y) {
    return (x >= 0) && (y >= 0) && (x < MAX_ROW) && (y < MAX_COL);
}