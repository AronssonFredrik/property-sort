import { SortObject, UnknownObject, SortOptions } from "../sort.interface";

export const getSortKey = <T extends (SortObject<T | UnknownObject>)>(
    first: T,
    second: T, options: SortOptions) => {

        // setting sort key on desired object item.
        switch (typeof options.sortKey) {
            case "object":
                // loop through each sortkey in the object
                options.sortKey.map((key) => {
                    first = first[key as keyof T] as T;
                    second = second[key as keyof T] as T;
                });
                break;
            case "string":
                (first as unknown as string) = first[options.sortKey as keyof T] as string;
                (second as unknown as string) = second[options.sortKey as keyof T] as string;
                break;
            }


        return [first, second];
};
