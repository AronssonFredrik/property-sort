import { SortDirections } from "./sort.interface";

export const hasSortDirection = (sortDirection: SortDirections): boolean => {
    return sortDirection !== SortDirections.None;
};

