import { sortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { sortNumericalOrder } from "./numerical/numerical";
import { SortOptions, SortObject, UnknownObject, SortDirections } from "./sort.interface";
import { hasSortDirection } from "./util";

/**
 * @module
 * @function SortByProperty
 * @param collection - array to sort
 * @param {SortOptions} options - typeof SortOptions
 * @example {
 *  direction: SortDirections.Ascending,
 *  sortKey: 'id',
 *  locale: 'se',
 *  numeric: true
 * }
 * @returns sorted array
 */

export default <T extends (SortObject<T | UnknownObject>), U extends SortOptions>(collection: T[], options: U): T[] => {
    if (!hasSortDirection(options.direction)) {
        return collection;
    }

    return collection.sort((a, b) => {
        // setting sort key on desired object item.
        switch (typeof options.sortKey) {
            case "object":
                // loop through each sortkey in the object
                options.sortKey.map((key) => {
                    a = a[key as keyof T] as T;
                    b = b[key as keyof T] as T;
                });
                break;
            case "string":
                (a as unknown as string) = a[options.sortKey as keyof T] as string;
                (b as unknown as string) = b[options.sortKey as keyof T] as string;
                break;

        }

        switch (typeof a) {
            case "string":
                return sortAlphabeticalOrder(a as string, b as unknown as string, options);
            case "number":
                return sortNumericalOrder(a as number, b as unknown as number, options);
            case "boolean":
                // if boolean, it will sort it numerically by it's number value (0/1)

                return sortNumericalOrder(Number(a), Number(b), options);
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

    });
};

