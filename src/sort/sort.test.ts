import SortByProperty from "..";
import { SortDirections } from "./sort.interface";
import mockCollection from './sort.mock.json';

let collection = mockCollection;

// mock data from https://jsonplaceholder.typicode.com/users

describe('Handle sorttype', () => {
    describe('Defined as an array', () => {
        beforeEach(() => {
            collection = SortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: ['address', 'street']
            });
        });
        test('"Douglas Extension" should be first', () => expect(collection[0].address.street).toBe('Douglas Extension'));
        test('"Victor Plains" should be last', () => expect(collection[collection.length - 1].address.street).toBe('Victor Plains'));
    });

    describe('Defined as a sting', () => {
        beforeEach(() => {
            collection = SortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: 'name'
            });
        });
        test('"Chelsey Dietrich" should be first', () => expect(collection[0].name).toBe('Chelsey Dietrich'));
        test('"Patricia Lebsack" should be last', () => expect(collection[collection.length - 1].name).toBe('Patricia Lebsack'));
    });
});

describe('Sort by alphabetical order', () => {
    describe('Handle ascending order', () => {
        beforeEach(() => {
            collection = SortByProperty(collection, {
                direction: SortDirections.Ascending,
                sortKey: 'username'
            });
        });
        test('Antonette should be first', () => expect(collection[0].username).toBe('Antonette'));
        test('Samantha should be last', () => expect(collection[collection.length - 1].username).toBe('Samantha'));

    });
    describe('Handle descending order', () => {
        beforeEach(() => {
            collection = SortByProperty(collection, {
                direction: SortDirections.Descending,
                sortKey: 'username'
            });
        })

        test('Samantha should be first', () => expect(collection[0].username).toBe('Samantha'));
        test('Antonette should be last', () => expect(collection[collection.length - 1].username).toBe('Antonette'));
    });
});