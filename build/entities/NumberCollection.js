"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    NumberCollection.prototype.merge = function (left, right) {
        var result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0])
                result.push(left.shift());
            else
                result.push(right.shift());
        }
        while (left.length) {
            result.push(left.shift());
        }
        while (right.length) {
            result.push(right.shift());
        }
        return result;
    };
    return NumberCollection;
}());
exports.default = NumberCollection;
