import { SortAlphabeticalOrder } from "../alphabeticalOrder/alphabeticalOrder";
import { SortOptions } from "./sortByProperty.interface";

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



