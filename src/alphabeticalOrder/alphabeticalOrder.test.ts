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

    describe('Handle diacritic characters', () => {
        // add an object with name that includes diacritic character
        beforeEach(() => array = [...array, { name: 'Ärling' }]);
        test('in German, ä sorts before z', () => {
            array = SortAlphabeticalOrder(array, {
                direction: SortDirections.Ascending,
                sortKey: 'name',
                locale: 'de'
            });

            const indexOfÄ = array.findIndex(item => item.name === 'Ärling');
            const indexOfZ = array.findIndex(item => item.name === 'Zeta');

            expect(indexOfÄ).toBeLessThan(indexOfZ);
        });
        test('in Swedish, ä sorts before z', () => {
            array = SortAlphabeticalOrder(array, {
                direction: SortDirections.Ascending,
                sortKey: 'name',
                locale: 'se'
            });

            const indexOfÄ = array.findIndex(item => item.name === 'Ärling');
            const indexOfZ = array.findIndex(item => item.name === 'Zeta');


            expect(indexOfÄ).toBeGreaterThan(indexOfZ);
        });
    });
}); 
