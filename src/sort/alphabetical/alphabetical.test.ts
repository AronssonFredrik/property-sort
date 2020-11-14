import { SortDirections } from "../sort.interface";
import { SortAlphabeticalOrder } from "./alphabetical";

let returnVal: number;

describe('Sorting alphabetically', () => {

    describe('Handle diacritic characters', () => {
        describe('In German', () => {
            beforeEach(() => {
                returnVal = SortAlphabeticalOrder('ä', 'z', {
                    direction: SortDirections.Ascending,
                    locale: 'de'
                });
            });
            test('Ä sorts before z', () => expect(returnVal).toBeLessThan(0));

        });
        describe('In Swedish', () => {
            beforeEach(() => {
                returnVal = SortAlphabeticalOrder('ä', 'z', {
                    direction: SortDirections.Ascending,
                    locale: 'se'
                });
            });
            test('Ä sorts after z', () => expect(returnVal).toBeGreaterThan(0));
        });
    });
    describe('Handle numeric strings', () => {

        describe('Not sorting in ascending order', () => {
            beforeEach(() => {
                returnVal = SortAlphabeticalOrder("3 cats", "10 cats", {
                    direction: SortDirections.Ascending,
                    numeric: false
                });

                test('Second option should return first', () => expect(returnVal).toBeGreaterThan(0));

            })
        });

        describe('In ascending order', () => {
            beforeEach(() => {
                returnVal = SortAlphabeticalOrder("3 cats", "10 cats", {
                    direction: SortDirections.Ascending,
                    numeric: true
                });
            });
            test('First option should return first', () => expect(returnVal).toBeLessThan(0));
        });
        describe('In descending order', () => {
            beforeEach(() => {
                returnVal = SortAlphabeticalOrder("1 cat", "3 cats", {
                    direction: SortDirections.Descending,
                    numeric: true
                });
            });
            test('Second item should return first', () => expect(returnVal).toBeGreaterThan(0));
        });
    });
}); 
