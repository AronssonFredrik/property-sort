import LanguageCode from "language-code";

/**
 * @enum {SortDirections} None = 0; Ascending = 1; Descending = 2
 */
export enum SortDirections {
    None,
    Ascending,
    Descending
}

export type SortDataTypes = string | number | unknown;

export type UnknownObject = Record<string, (SortDataTypes)>;

export type SortObject <T> = {
    [K in keyof T]: T[K]
}

export type LocaleType = LanguageCode | string;

export type SortType = string | string[];



export interface SortFunctionOptions extends Intl.CollatorOptions {
    direction: SortDirections;
    locale?: LocaleType;
}


/**
 * @param {SortDirections} direction - uses type of SortDirections
 * @param {SortType} sortKey - property key to sort by
 * @param {LocaleType} locale - the locale to sort by, use ISO 639-1 Language Code
 * @extends Intl.CollatorOptions
 * @extends SortFunctionOptions
 * @example {
 *  direction: SortDirections.Ascending,
 *  sortKey: 'id',
 *  locale: 'se',
 *  numeric: true,
 *  ignorePunctuation: true
 * }
 */
export interface SortOptions extends SortFunctionOptions {
    sortKey: SortType;
}
