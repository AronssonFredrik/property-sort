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
                a = Number(a);
                b = Number(b);
                return SortNumericalOrder(a, b, options);
            // fallback
            default:
                break;
            // return SortAlphabeticalOrder(collection, options);
        }

    });
};