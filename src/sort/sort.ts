import { SortAlphabeticalOrder } from "./alphabetical/alphabetical";
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
    const sortType = collection.length && typeof collection[0][options.sortKey];
    switch (sortType) {
        case 'string':
            return SortAlphabeticalOrder(collection, options);
        // fallback
        default:
            return SortAlphabeticalOrder(collection, options);
    }
}



