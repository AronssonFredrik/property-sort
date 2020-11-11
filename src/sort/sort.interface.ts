export interface SortOptions extends Intl.CollatorOptions {
    direction: SortDirections;
    sortKey: string;
    locale?: string; // to create ISO enum interface
}
export enum SortDirections {
    None,
    Ascending,
    Descending
}
