import { SortOptions, SortObject, UnknownObject } from "./sort.interface";
import { hasSortDirection, sortByTypeof } from "./util";

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

        return sortByTypeof(a, b, options);
    });
};

