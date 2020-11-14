import { SortDirections, SortFunctionOptions } from "../sort.interface";


export const SortAlphabeticalOrder = (first: string, second: string, options: SortFunctionOptions): number => {
    // set fallback locale to english if missing.
    const locale: string = options.locale || 'en';
    return options.direction === SortDirections.Ascending
        ? first.localeCompare(second, locale, options)
        // sorting by descending order
        : second.localeCompare(first, locale, options)

}

// export const SortAlphabeticalOrder = (collection: any[], options: SortOptions): any[] => {
//     return collection.sort((a: Record<string, string>, b: Record<string, string>) => {
//         return options.direction === SortDirections.Ascending
//             // sorting by ascending order
//             ? a[options.sortKey].localeCompare(b[options.sortKey], options.locale, options)
//             // sorting by descending order
//             : b[options.sortKey].localeCompare(a[options.sortKey], options.locale, options)
//     });
// }