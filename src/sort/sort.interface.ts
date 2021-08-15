import LanguageCode from "language-code";

/**
 * @enum {SortDirections} None = 0; Ascending = 1; Descending = 2
 */
export enum SortDirections {
    None,
    Ascending,
    Descending
}

export interface SortFunctionOptions extends Intl.CollatorOptions {
    locale?: LanguageCode; // to create ISO enum interface
    direction: SortDirections;
}


/**
 * @param {SortDirections} direction - uses type of SortDirections
 * @param {string} sortKey - property key to sort by
 * @param {string} locale - the locale to sort by, use ISO 639-1 Language Code
 * @extends Intl.CollatorOptions
 * @example {
 *  direction: SortDirections.Ascending,
 *  sortKey: 'id',
 *  locale: 'se',
 *  numeric: true,
 *  ignorePunctuation: true
 * }
 */
export interface SortOptions extends SortFunctionOptions {
    sortKey: string | string[];
}


export type UnknownObject = Record<string, (string | number | Date | unknown)>;

export type SortObject <T> = {
    [K in keyof T]: T[K]
}
