const primeFactorObj = require('./PrimeFactor')

describe('Prime Factor Test Cases', () => {
    test('Input : 1 ---> Outupt : null', () => {
        expect(primeFactorObj.primeFactorFunction(1)).toBe(null)
    });
    test('Input : 2 ---> Outupt : 2', () => {
        expect(primeFactorObj.primeFactorFunction(2)).toEqual([2])
    });
    test('Input : 3 ---> Outupt : 3', () => {
        expect(primeFactorObj.primeFactorFunction(3)).toEqual([3])
    });
    test('Input : 4 ---> Outupt : 2,2', () => {
        expect(primeFactorObj.primeFactorFunction(4)).toEqual([2,2])
    });
    test('Input : 8 ---> Outupt : 2,2,2', () => {
        expect(primeFactorObj.primeFactorFunction(8)).toEqual([2,2,2])
    });
    test('Input : 9 ---> Outupt : 3,3', () => {
        expect(primeFactorObj.primeFactorFunction(9)).toEqual([3,3])
    });
    test('Input : 3421312---> Outupt : 2,2,2,2,2,2,2,26729', () => {
        expect(primeFactorObj.primeFactorFunction(3421312)).toEqual([2,2,2,2,2,2,2,26729])
    });
});

