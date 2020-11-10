import { SortDirections } from "../sortByProperty/sortByProperty.interface";
import { SortAlphabeticalOrder } from "./alphabeticalOrder";

let array = [
    { name: 'Zeta' },
    { name: 'Beta' },
    { name: 'Alpha' }
];

describe('Sort by alphabetical order', () => {
    test('In ascending order', () => {
        array = SortAlphabeticalOrder(array, {
            direction: SortDirections.Ascending,
            sortKey: 'name'
        });

        expect(array[0].name).toBe('Alpha');
    });
    test('In descending order', () => {
        array = SortAlphabeticalOrder(array, {
            direction: SortDirections.Descending,
            sortKey: 'name'
        });

        expect(array[0].name).toBe('Zeta');
    });

});