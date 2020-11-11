import { SortDirections } from "../sortByProperty/sortByProperty.interface";
import { SortAlphabeticalOrder } from "./alphabeticalOrder";

interface alphabeticalCollection {
    name: string;
    catCount: string;
}

let collection: alphabeticalCollection[];
const baseArray: alphabeticalCollection[] = [
    {
        name: 'Zeta',
        catCount: '2 cats'
    },
    {
        name: 'Beta',
        catCount: '10 cats'
    },
    {
        name: 'Alpha',
        catCount: '1 cat'
    }
];

const localeArrayItem = { name: 'Ärling', catCount: '' };

describe('Sort by alphabetical order', () => {
    beforeEach(() => collection = baseArray);
    describe('Handle ascending order', () => {
        beforeEach(() => {
            collection = SortAlphabeticalOrder(collection, {
                direction: SortDirections.Ascending,
                sortKey: 'name'
            });
        });
        test('Alpha should be first', () => expect(collection[0].name).toBe('Alpha'));
        test('Zeta should be last', () => expect(collection[baseArray.length - 1].name).toBe('Zeta'));

    });
    describe('Handle descending order', () => {
        beforeEach(() => {
            collection = SortAlphabeticalOrder(collection, {
                direction: SortDirections.Descending,
                sortKey: 'name'
            });
        })

        test('Zeta should be first', () => expect(collection[0].name).toBe('Zeta'));
        test('Alpha should be last', () => expect(collection[collection.length - 1].name).toBe('Alpha'));
    });

    describe('Handle diacritic characters', () => {
        let indexOfZ: number, indexOfÄ: number;
        // add an object with name that includes diacritic character
        beforeEach(() => collection = [...baseArray, localeArrayItem]);

        describe('In German', () => {
            beforeEach(() => {
                collection = SortAlphabeticalOrder(collection, {
                    direction: SortDirections.Ascending,
                    sortKey: 'name',
                    locale: 'de'
                });
                indexOfÄ = collection.findIndex(item => item.name === 'Ärling');
                indexOfZ = collection.findIndex(item => item.name === 'Zeta');
            });
            test('Ä sorts before z', () => expect(indexOfÄ).toBeLessThan(indexOfZ));

        });
        describe('In Swedish', () => {
            beforeEach(() => {
                collection = SortAlphabeticalOrder(collection, {
                    direction: SortDirections.Ascending,
                    sortKey: 'name',
                    locale: 'se'
                });
                indexOfÄ = collection.findIndex(item => item.name === 'Ärling');
                indexOfZ = collection.findIndex(item => item.name === 'Zeta');
            });
            test('Ä sorts after z', () => expect(indexOfÄ).toBeGreaterThan(indexOfZ));
        });
    });
    describe('Handle numeric strings', () => {

        beforeEach(() => collection = baseArray);

        describe('In ascending order', () => {
            beforeEach(() => {
                collection = SortAlphabeticalOrder(collection, {
                    direction: SortDirections.Ascending,
                    sortKey: 'catCount',
                    numeric: true
                });
            });
            test('1 cat to be first', () => expect(collection[0].catCount).toBe('1 cat'));
            test('10 cats to be last', () => expect(collection[collection.length - 1].catCount).toBe('10 cats'));
        });
        describe('In descending order', () => {
            beforeEach(() => {
                collection = SortAlphabeticalOrder(collection, {
                    direction: SortDirections.Descending,
                    sortKey: 'catCount',
                    numeric: true
                });
            });
            test('10 cats to be first', () => expect(collection[0].catCount).toBe('10 cats'));
            test('1 cat to be last', () => expect(collection[collection.length - 1].catCount).toBe('1 cat'));
        });

    });
}); 
