var primeFactorObject=require('./primeFactor');

describe('Prime Factor Test Cases : ', () => {
    test('Input : 1--> Output : null', () => {
        expect(primeFactorObject.primeFactorFunction(1)).toBe(null);
    });
    test('Input : 2--> Output : 2', () => {
        expect(primeFactorObject.primeFactorFunction(2)).toEqual([2]);
    });
    test('Input : 3--> Output : 3', () => {
        expect(primeFactorObject.primeFactorFunction(3)).toEqual([3]);
    });
    test('Input : 4--> Output : 2,2', () => {
        expect(primeFactorObject.primeFactorFunction(4)).toEqual([2,2]);
    });
    test('Input : 8--> Output : 2,2,2', () => {
        expect(primeFactorObject.primeFactorFunction(8)).toEqual([2,2,2]);
    });
    test('Input : 13456--> Output : 2,2,2,2,29,29', () => {
        expect(primeFactorObject.primeFactorFunction(13456)).toEqual([2,2,2,2,29,29]);
    });
});