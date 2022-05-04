import { SortOptions, SortObject, UnknownObject } from "./sort.interface";
import { getSortKey } from "./util/get-sort-key";
import { hasSortDirection } from "./util/has-sort-direction";
import { sortByTypeof } from "./util/sort-by-typeof";

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

    return collection.sort((first: T, second: T) => sortByTypeof(getSortKey(first, second, options), options));
};
