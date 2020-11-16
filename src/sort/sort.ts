import { SortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { SortNumericalOrder } from "./numerical/numerical";
import { SortOptions } from "./sort.interface";

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
export default (collection: any[], options: SortOptions): any[] => {
    return collection.sort((a, b) => {
        // setting sort key on desired object item.
        switch (typeof options.sortKey) {
            case 'string':
                a = a[options.sortKey];
                b = b[options.sortKey];
                break;

            case 'object':
                // loop through each sortkey in the object
                options.sortKey.map((key) => {
                    a = a[key];
                    b = b[key];
                });
                break;
        }

        switch (typeof a) {
            case 'string':
                return SortAlphabeticalOrder(a, b, options);
            case 'number':
                return SortNumericalOrder(a, b, options);
            case 'boolean':
                // if boolean, it will sort it numerically by it's number value (0/1)
                a = Number(a);
                b = Number(b);
                return SortNumericalOrder(a, b, options);
            case 'object':
                if (a instanceof Date) {
                    // if instance of Date, it will be sorted numerically by milliseconds
                    a = a.getTime();
                    b = b.getTime();
                    return SortNumericalOrder(a, b, options);
                }
                else {
                    break;
                }
            // fallback
            case 'undefined':
                console.error(`Unable to succesfully sort by ${options.sortKey}.`);
                break;
            default:
                break;
        }

    });
};