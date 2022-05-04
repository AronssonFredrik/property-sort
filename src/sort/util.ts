import { sortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { sortNumericalOrder } from "./numerical/numerical";
import { SortDirections, SortOptions } from "./sort.interface";

export const hasSortDirection = (sortDirection: SortDirections): boolean => {
    return sortDirection !== SortDirections.None;
};

export const sortByTypeof = (first: unknown, second: unknown, options: SortOptions): number => {
    switch (typeof first) {
        case "string":
            return sortAlphabeticalOrder(first as string, second as unknown as string, options);
        case "number":
            return sortNumericalOrder(first as number, second as unknown as number, options);
        case "boolean":
            // if boolean, it will sort it numerically by it's number value (0/1)

            return sortNumericalOrder(Number(first), Number(second), options);
        case "object":
            console.error(`Unable to succesfully sort by type ${typeof options.sortKey} (${options.sortKey}).`);
            break;
        // fallback
        case "undefined":
            console.error(`Unable to succesfully sort by type ${typeof options.sortKey} (${options.sortKey}).`);
            break;
        default:
            break;
    }

};
