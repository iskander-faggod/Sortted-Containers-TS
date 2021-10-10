"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MergeSort(items) {
    return divide(items);
}
exports.default = MergeSort;
function divide(items) {
    var halfLength = Math.ceil(items.length / 2);
    var low = items.slice(0, halfLength);
    var high = items.slice(halfLength);
    if (halfLength > 1) {
        low = divide(low);
        high = divide(high);
    }
    return combine(low, high);
}
function combine(low, high) {
    var indexLow = 0;
    var indexHigh = 0;
    var lengthLow = low.length;
    var lengthHigh = high.length;
    var combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
        var lowItem = low[indexLow];
        var highItem = high[indexHigh];
        if (lowItem !== undefined) {
            if (highItem === undefined) {
                combined.push(lowItem);
                indexLow++;
            }
            else {
                if (lowItem <= highItem) {
                    combined.push(lowItem);
                    indexLow++;
                }
                else {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        else {
            if (highItem !== undefined) {
                combined.push(highItem);
                indexHigh++;
            }
        }
    }
    return combined;
}
