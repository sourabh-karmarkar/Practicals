var primefactor=require('./PrimeFactor');

describe('Prime Factor Tests',()=>{
    test('Input : 1 ---> Output : null',()=>{
        expect(primefactor.findPrimeFactor(1)).toBe(null);
    });
    test('Input : 2 ---> Output : 2',()=>{
        expect(primefactor.findPrimeFactor(2)).toEqual([2]);
    });
    test('Input : 3 ---> Output : 3',()=>{
        expect(primefactor.findPrimeFactor(3)).toEqual([3]);
    });
    test('Input : 4 ---> Output : 2,2',()=>{
        expect(primefactor.findPrimeFactor(4)).toEqual([2,2]);
    });
    test('Input : 8 ---> Output : 2,2,2',()=>{
        expect(primefactor.findPrimeFactor(8)).toEqual([2,2,2]);
    });
    test('Input : 9 ---> Output : 3,3',()=>{
        expect(primefactor.findPrimeFactor(9)).toEqual([3,3]);
    });
    test('Input : 1269 ---> Output : 3,3,3,47',()=>{
        expect(primefactor.findPrimeFactor(1269)).toEqual([3,3,3,47]);
    });
});