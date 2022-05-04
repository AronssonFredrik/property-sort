import { SortDataTypes, SortOptions } from "../sort.interface";
import { sortAlphabeticalOrder } from "./alphabetical";
import { sortNumericalOrder } from "./numerical";

export const sortByTypeof = ([first, second]: SortDataTypes[], options: SortOptions): number => {
    switch (typeof first) {
        case "string":
            return sortAlphabeticalOrder(first, second as string, options);
        case "number":
            return sortNumericalOrder(first, second as number, options);
        case "boolean":
            // if boolean, it will sort it numerically by it's number value (0/1)

            return sortNumericalOrder(Number(first), Number(second), options);
        default:
            console.error(`Unable to succesfully sort by type ${typeof options.sortKey} (${options.sortKey}).`);
            break;
    }
};
