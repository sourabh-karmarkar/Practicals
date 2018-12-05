const calc=require('./Calculator');

//To be run after all the tests are completed
afterAll(()=>{
    console.log("afterAll!");
});

//Runs after each test
afterEach(()=>{
    console.log("afterEach!!");
});


describe("testing addition functionality",()=>{
    
    test('adds 1+2 equals 3',()=>{
        expect(calc.sum(1,2)).toBe(3);
    });

    test('adds 5+2 equals 7',()=>{
        expect(calc.sum(5,2)).toBe(7);
        });
});

describe("testing subtraction functionality",()=>{
    
    test('sub 3-2 equals 1',()=>{
        expect(calc.sub(3,2)).toBe(1);
    });

    test('adds 15-2 equals 13',()=>{
        expect(calc.sub(15,2)).toBe(13);
        });
});

describe("testing multiplication functionality (test.each)",()=>{
    test.each([[2,3,6],[4,5,20],[3,5,15]])('multiplied %i and %i',(a,b,expected)=>{
        expect(calc.multiply(a,b)).toBe(expected);
    });
});