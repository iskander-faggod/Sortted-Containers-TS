import MergeSort from "../sortedFunctions/mergeSort";
import NumberCollection from "./NumberCollection";

interface Sortable {
    merge(left: number[], right: number[]): number[];
    sort(arr: number[]): any[];
}

export default class Sorter {
    constructor(private collection: NumberCollection) {
    }

    //merge-sort
    mergeSort(arr: number[]) : any[]{
        let len = arr.length;
        if (len < 2) {
            return arr;
        }
        let middle = Math.floor(len / 2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);
        return this.collection.merge(this.mergeSort(left), this.mergeSort(right));
    }
}
