var calculate=require('./Calculator');

describe('Test : Addition',()=>{
    test('num1 = undefined, num2 = 5',()=>{
        expect(calculate.addition(undefined,5)).toBe(5);
    });
    test('num1 = 10, num2 = undefined',()=>{
        expect(calculate.addition(10,undefined)).toBe(10);
    });
    test('num1 = undefined, num2 = undefined',()=>{
        expect(calculate.addition(undefined,undefined)).toBe("Incorrect Values");
    });
    test('num1 = 19, num2 = 24',()=>{
        expect(calculate.addition(19,24)).toBe(43);
    });
    test('num1 = a , num2 = 24',()=>{
        expect(calculate.addition('a',24)).toBe("Please Enter Correct Number");
    });
});

describe('Test : Subtraction',()=>{
    test('num1 = undefined, num2 = 5',()=>{
        expect(calculate.subtraction(undefined,5)).toBe(-5);
    });
    test('num1 = 10, num2 = undefined',()=>{
        expect(calculate.subtraction(10,undefined)).toBe(10);
    });
    test('num1 = undefined, num2 = undefined',()=>{
        expect(calculate.subtraction(undefined,undefined)).toBe("Incorrect Values");
    });
    test('num1 = 19, num2 = 24',()=>{
        expect(calculate.subtraction(19,24)).toBe(-5);
    });
    test('num1 = a , num2 = 24',()=>{
        expect(calculate.addition('a',24)).toBe("Please Enter Correct Number");
    });
});