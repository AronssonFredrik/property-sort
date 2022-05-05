import { sortByProperty, UnknownObject } from "..";
import { SortDirections, SortObject } from "./sort.interface";
import mockCollection from "./sort.mock.json";

import { LanguageCode } from "language-code";

interface Mock extends UnknownObject {
    address: {
        street: string
    }
}

let collection: SortObject<Mock[]> = mockCollection;

// mock data from https://jsonplaceholder.typicode.com/users

describe("Handle sorttype", () => {
    describe("Defined as an array", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: ["address", "street"],
                locale: LanguageCode.sv
            });
        });
        test("'Douglas Extension' should be first", () => expect(collection[0].address.street).toBe("Douglas Extension"));
        test("'Victor Plains' should be last", () => expect(collection[collection.length - 1].address.street).toBe("Victor Plains"));
    });

    describe("Defined as a sting", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: "name"
            });
        });
        test("'Chelsey Dietrich' should be first", () => expect(collection[0].name).toBe("Chelsey Dietrich"));
        test("'Patricia Lebsack' should be last", () => expect(collection[collection.length - 1].name).toBe("Patricia Lebsack"));
    });
});

describe("Sort by alphabetical order", () => {
    describe("Handle ascending order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: "username"
            });
        });
        test("Antonette should be first", () => expect(collection[0].username).toBe("Antonette"));
        test("Samantha should be last", () => expect(collection[collection.length - 1].username).toBe("Samantha"));

    });
    describe("Handle descending order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Descending,
                sortKey: "username"
            });
        });

        test("Samantha should be first", () => expect(collection[0].username).toBe("Samantha"));
        test("Antonette should be last", () => expect(collection[collection.length - 1].username).toBe("Antonette"));
    });
});

describe("Sort by numerical order", () => {
    describe("in ascending order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: "id"
            });
        });

        test("'Leanne Graham' to be first", () => {
            expect(collection[0].name).toBe("Leanne Graham");
        });
    });
    describe("in descending order order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Descending,
                sortKey: "id"
            });
        });

        test("'Chelsey Dietrich' to be first", () => {
            expect(collection[0].name).toBe("Chelsey Dietrich");
        });
    });
});

describe("Sort by boolean order", () => {
    describe("in ascending order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: "active"
            });
        });

        test("False (0) to be first", () => {
            expect(collection[0].active).toBe(false);
        });
    });
    describe("in descending order order", () => {
        beforeEach(() => {
            collection = sortByProperty(collection, {
                direction: SortDirections.Descending,
                sortKey: "active"
            });
        });

        test("True (1) to be first", () => {
            expect(collection[0].active).toBe(true);
        });
    });
});
