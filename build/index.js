"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./entities/Sorter"));
var NumberCollection_1 = __importDefault(require("./entities/NumberCollection"));
var data = [1, 2, 5, 6, 7, 7, 8, 23, 5, 2, -1];
var numCollection = new NumberCollection_1.default(data);
var sorter = new Sorter_1.default(numCollection);
sorter.mergeSort(data);
