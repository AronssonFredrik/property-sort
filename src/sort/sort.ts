import { SortOptions, SortObject, UnknownObject } from "./sort.interface";
import { getSortKey, hasSortDirection, sortByTypeof } from "./util";

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


    return collection.sort((first: T, second: T) => {
        [first, second] = getSortKey(first, second, options);


        return sortByTypeof(first, second, options);
    });
};

