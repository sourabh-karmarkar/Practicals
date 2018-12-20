let separatedigits=require('./SeparateDigits');

describe('Separating Digits from a Number',()=>{
    test('If Number is zero',()=>{
        expect(separatedigits.separatedigits_function(0)).toBe(0);
    });

    test('If Number is undefined',()=>{
        expect(separatedigits.separatedigits_function(undefined)).toBe("Number is not defined!");
    });

    test('If Number has single digit',()=>{
        expect(separatedigits.separatedigits_function(6)).toEqual([6]);
    });
    
    test('If Number = 12 ',()=>{
        expect(separatedigits.separatedigits_function(12)).toEqual([1,2]);
    });
    
    test('If Number = 3333',()=>{
        expect(separatedigits.separatedigits_function(3333)).toEqual([3,3,3,3]);
    });

    test('If Number = 124363 ',()=>{
        expect(separatedigits.separatedigits_function(124363)).toEqual([1,2,4,3,6,3]);
    });

    test('If Number is -ve ',()=>{
        expect(separatedigits.separatedigits_function(-124363)).toEqual([1,2,4,3,6,3]);
    });

});