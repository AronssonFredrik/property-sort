import { sortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { sortNumericalOrder } from "./numerical/numerical";
import { SortDataTypes, SortDirections, SortObject, SortOptions, UnknownObject } from "./sort.interface";

export const hasSortDirection = (sortDirection: SortDirections): boolean => {
    return sortDirection !== SortDirections.None;
};

export const sortByTypeof = (first: SortDataTypes, second: SortDataTypes, options: SortOptions): number => {
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

export const getSortKey = <T extends (SortObject<T | UnknownObject>)>(
    first: T,
    second: T, options: SortOptions) => {

        // setting sort key on desired object item.
        switch (typeof options.sortKey) {
            case "object":
                // loop through each sortkey in the object
                options.sortKey.map((key) => {
                    first = first[key as keyof T] as T;
                    second = second[key as keyof T] as T;
                });
                break;
            case "string":
                (first as unknown as string) = first[options.sortKey as keyof T] as string;
                (second as unknown as string) = second[options.sortKey as keyof T] as string;
                break;
            }


        return [first, second];
};

