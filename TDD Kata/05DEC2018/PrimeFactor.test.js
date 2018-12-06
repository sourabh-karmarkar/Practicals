let primevariable=require('./PrimeFactor');

describe('Testing Prime Factor',()=>{
    
    test('input : 1 and output : null',()=>{
        expect(primevariable.findPrimeFactor(1)).toBe(null);
    });

    test('input : 2 and output : 2',()=>{
        expect(primevariable.findPrimeFactor(2)).toEqual([2]);
    });

    test('input : 3 and output : 3',()=>{
        expect(primevariable.findPrimeFactor(3)).toEqual([3]);
    });

    test('input : 4 and output : 2,2',()=>{
        expect(primevariable.findPrimeFactor(4)).toEqual([2,2]);
    });

    test('input : 8 and output : 2,2,2',()=>{
        expect(primevariable.findPrimeFactor(8)).toEqual([2,2,2]);
    });

    test('input : 9 and output : 3,3',()=>{
        expect(primevariable.findPrimeFactor(9)).toEqual([3,3]);
    });

    test('input : 9 and output : 3,3',()=>{
        expect(primevariable.findPrimeFactor(1269)).toEqual([3,3,3,47]);
    });

});