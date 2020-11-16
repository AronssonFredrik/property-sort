import { SortDirections, SortFunctionOptions } from "../sort.interface";

export const sortAlphabeticalOrder = (first: string, second: string, options: SortFunctionOptions): number => {
    // set fallback locale to english if missing.
    const locale: string = options.locale || "en";
    return options.direction === SortDirections.Ascending
        ? first.localeCompare(second, locale, options)
        // sorting by descending order
        : second.localeCompare(first, locale, options);
};
