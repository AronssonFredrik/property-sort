import { SortDirections } from "../sortByProperty/sortByProperty.interface";
import { SortAlphabeticalOrder } from "./alphabeticalOrder";

let array = [
    { name: 'Zeta' },
    { name: 'Beta' },
    { name: 'Alpha' }
];

describe('Sort by alphabetical order', () => {
    describe('Handle ascending order', () => {
        beforeEach(() => {
            array = SortAlphabeticalOrder(array, {
                direction: SortDirections.Ascending,
                sortKey: 'name'
            });
        });
        test('Alpha should be first', () => expect(array[0].name).toBe('Alpha'));
        test('Zeta should be last', () => expect(array[array.length - 1].name).toBe('Zeta'));

    });
    describe('Handle descending order', () => {
        beforeEach(() => {
            array = SortAlphabeticalOrder(array, {
                direction: SortDirections.Descending,
                sortKey: 'name'
            });
        })

        test('Zeta should be first', () => expect(array[0].name).toBe('Zeta'));
        test('Alpha should be last', () => expect(array[array.length - 1].name).toBe('Alpha'));
    });

    describe('Handle diacritic characters', () => {
        let indexOfZ: number, indexOfÄ: number;
        // add an object with name that includes diacritic character
        beforeEach(() => array = [...array, { name: 'Ärling' }]);

        describe('In German', () => {
            beforeEach(() => {
                array = SortAlphabeticalOrder(array, {
                    direction: SortDirections.Ascending,
                    sortKey: 'name',
                    locale: 'de'
                });
                indexOfÄ = array.findIndex(item => item.name === 'Ärling');
                indexOfZ = array.findIndex(item => item.name === 'Zeta');
            });
            test('Ä sorts before z', () => expect(indexOfÄ).toBeLessThan(indexOfZ));

        });
        describe('In Swedish', () => {
            beforeEach(() => {
                array = SortAlphabeticalOrder(array, {
                    direction: SortDirections.Ascending,
                    sortKey: 'name',
                    locale: 'se'
                });
                indexOfÄ = array.findIndex(item => item.name === 'Ärling');
                indexOfZ = array.findIndex(item => item.name === 'Zeta');
            });
            test('Ä sorts after z', () => expect(indexOfÄ).toBeGreaterThan(indexOfZ));
        });
    });
}); 
