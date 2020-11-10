import { SortDirections, SortOptions } from "../sortByProperty/sortByProperty.interface";


export const SortAlphabeticalOrder = (collection: any[], options: SortOptions): any[] => {

    return collection.sort((a: Record<string, string>, b: Record<string, string>) => {
        return options.direction === SortDirections.Ascending
            // sorting by ascending order
            ? a[options.sortKey].localeCompare(b[options.sortKey])
            // sorting by descending order
            : b[options.sortKey].localeCompare(a[options.sortKey])
    });
}