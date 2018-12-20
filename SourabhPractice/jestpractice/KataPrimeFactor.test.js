const findfact=require('./KataPrimeFactor');

describe('Testing Prime Factors',()=>{
    
    test('input : 1 | output : null',()=>{
        expect(findfact.findPrimeFactor(1)).toBe(null);
    });

    test('input : 2 | output : 2',()=>{
        expect(findfact.findPrimeFactor(2)).toEqual([2]);
    });

    test('input : 3 | output : 3',()=>{
        expect(findfact.findPrimeFactor(3)).toEqual([3]);
    });

    test('input : 4 | output : 2,2',()=>{
        expect(findfact.findPrimeFactor(4)).toEqual([2,2]);
    });

    test('input : 8 | output : 2,2,2',()=>{
        expect(findfact.findPrimeFactor(8)).toEqual([2,2,2]);
    });

    test('input : 9 | output : 3,3',()=>{
        expect(findfact.findPrimeFactor(9)).toEqual([3,3]);
    });

    test('input : 1269 | output : 3,3,3,47',()=>{
        expect(findfact.findPrimeFactor(1269)).toEqual([3,3,3,47]);
    });
});