import { LanguageCode } from "language-code";
import { getLocale } from "./get-locale";
import { SortDirections, SortFunctionOptions } from "../sort.interface";

export const sortAlphabeticalOrder = (first: string, second: string, options: SortFunctionOptions): number => {
    const locale: LanguageCode = getLocale(options.locale);

    return options.direction === SortDirections.Ascending
        ? first.localeCompare(second, locale, options)
        // sorting by descending order
        : second.localeCompare(first, locale, options);
};
