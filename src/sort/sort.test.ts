import { sortByProperty } from "..";
import { SortDirections, UnknownObject } from "./sort.interface";
import mockCollection from "./sort.mock.json";

import { LanguageCode } from "language-code";

let collection = mockCollection;

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


describe("Sort by periodical order", () => {
    const initDate = {
        year: 2020,
        month: 0,
        day: 1
    };
    let collectionwithDate: UnknownObject[];
    beforeEach(() => {
        // inject date to each item in collection
        collectionwithDate = collection.map((item: UnknownObject, index) => {
            const day = initDate.day + index;
            return {
                ...item,
                date: new Date(Date.UTC(initDate.year, initDate.month, day))
            };
        });
    });
    describe("in ascending order", () => {
        beforeEach(() => {
            collectionwithDate = sortByProperty(collectionwithDate, {
                direction: SortDirections.Ascending,
                sortKey: ["date"]
            });
        });

        test("2020-01-01 to be first", () => {
            const readableDate = new Date(collectionwithDate[0].date as Date).toUTCString();
            expect(readableDate).toContain("01 Jan 2020");
        });
    });
    describe("in descending order order", () => {
        beforeEach(() => {
            collectionwithDate = sortByProperty(collectionwithDate, {
                direction: SortDirections.Descending,
                sortKey: "date"
            });
        });

        test("2020-01-05 to be first", () => {
            const readableDate = new Date(collectionwithDate[0].date as Date).toUTCString();
            expect(readableDate).toContain("05 Jan 2020");
        });
    });
});

