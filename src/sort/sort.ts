import { sortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { sortNumericalOrder } from "./numerical/numerical";
import { SortOptions, UnknownObject } from "./sort.interface";

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

export default <T extends UnknownObject, U extends SortOptions>(collection: T[], options: U): T[] => {
    return collection.sort((a, b) => {
        // setting sort key on desired object item.
        switch (typeof options.sortKey) {
            case "object":
                // loop through each sortkey in the object
                options.sortKey.map((key) => {
                    a = a[key] as T;
                    b = b[key] as T;
                });
                break;
            case "string":
                (a as unknown as string) = a[options.sortKey] as string;
                (b as unknown as string) = b[options.sortKey] as string;
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
                if (a instanceof Date) {
                    // if instance of Date, it will be sorted numerically by milliseconds
                    const milliseconds = {
                        a: (a as Date).getTime(),
                        b: (b as unknown as Date).getTime(),
                    };

                    return sortNumericalOrder(milliseconds.a, milliseconds.b, options);
                }
                else {
                    console.error(`Unable to sort by the type ${typeof options.sortKey}.`);
                    break;
                }
            // fallback
            case "undefined":
                console.error(`Unable to succesfully sort by ${options.sortKey}.`);
                break;
            default:
                break;
        }

    });
};
