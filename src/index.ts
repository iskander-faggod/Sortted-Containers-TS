import Sorter from "./entities/Sorter";
import NumberCollection from "./entities/NumberCollection";

const data = [1, 2, 5, 6, 7, 7, 8, 23, 5, 2, -1]
const numCollection = new NumberCollection(data)
const sorter = new Sorter(numCollection)
sorter.mergeSort(data)

