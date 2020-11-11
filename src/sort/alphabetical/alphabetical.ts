import { SortDirections, SortOptions } from "../sort.interface";

export const SortAlphabeticalOrder = (collection: any[], options: SortOptions): any[] => {
    return collection.sort((a: Record<string, string>, b: Record<string, string>) => {
        return options.direction === SortDirections.Ascending
            // sorting by ascending order
            ? a[options.sortKey].localeCompare(b[options.sortKey], options.locale, options)
            // sorting by descending order
            : b[options.sortKey].localeCompare(a[options.sortKey], options.locale, options)
    });
}