import { SortDirections, SortFunctionOptions } from "../sort.interface";

export const sortNumericalOrder = (first: number, second: number, options: SortFunctionOptions): number => {
    return options.direction === SortDirections.Ascending
        // sorting by ascending order
        ? first - second
        // sorting by descending order
        : second - first;
};
