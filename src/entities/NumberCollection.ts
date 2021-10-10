export default class NumberCollection {
    constructor(private data: number[]) {
    }

    merge(left: number[], right: number[]) {
        let result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) result.push(left.shift());
            else result.push(right.shift());
        }
        while (left.length) {
            result.push(left.shift());
        }
        while (right.length) {
            result.push(right.shift());
        }
        return result;
    }
}