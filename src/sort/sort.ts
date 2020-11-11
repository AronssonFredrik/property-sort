import { SortAlphabeticalOrder } from "./alphabetical/alphabetical";
import { SortOptions } from "./sort.interface";

// todo
export default (collection: any[], options: SortOptions): any[] => {
    const sortType = collection.length && typeof collection[0][options.sortKey];
    switch (sortType) {
        case 'string':
            return SortAlphabeticalOrder(collection, options);
        // fallback
        default:
            return SortAlphabeticalOrder(collection, options);
    }
}



