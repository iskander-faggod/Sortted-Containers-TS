"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    //merge-sort
    Sorter.prototype.mergeSort = function (arr) {
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        var middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle);
        return this.collection.merge(this.mergeSort(left), this.mergeSort(right));
    };
    return Sorter;
}());
exports.default = Sorter;
