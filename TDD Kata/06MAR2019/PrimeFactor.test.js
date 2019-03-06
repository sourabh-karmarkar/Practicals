primeFactorObj = require('./PrimeFactor')

describe('Prime Factor Test Cases', () => {
    test('Input : 1 ---> Output : null', () => {
        expect(primeFactorObj.primeFactorFunction(1)).toBe(null)
    });
    test('Input : 2 ---> Output : 2', () => {
        expect(primeFactorObj.primeFactorFunction(2)).toEqual([2])
    });
    test('Input : 3 ---> Output : 3', () => {
        expect(primeFactorObj.primeFactorFunction(3)).toEqual([3])
    });
    test('Input : 4 ---> Output : 2,2', () => {
        expect(primeFactorObj.primeFactorFunction(4)).toEqual([2,2])
    });
    test('Input : 8 ---> Output : 2,2,2', () => {
        expect(primeFactorObj.primeFactorFunction(8)).toEqual([2,2,2])
    });
    test('Input : 9 ---> Output : 3,3', () => {
        expect(primeFactorObj.primeFactorFunction(9)).toEqual([3,3])
    });
    test('Input : 4345456 ---> Output : 2,2,2,2,31,8761', () => {
        expect(primeFactorObj.primeFactorFunction(4345456)).toEqual([2,2,2,2,31,8761])
    });
});