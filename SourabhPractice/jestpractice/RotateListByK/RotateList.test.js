let rotatetest=require('./RotateList');

let arr=[2,6,7,9,23,54,89,12,43];

describe('Rotate List By K Elements',()=>{
    test('If k is greater than array size',()=>{
        let k=arr.length+1;
        expect(rotatetest.Rotate(k,arr)).toEqual("Invalid Rotate Factor");
    });

    test('If k is equal to array size then the position of elements will be as it is',()=>{
        let k=arr.length;
        expect(rotatetest.Rotate(k,arr)).toEqual(arr);
    });

    test('If k is 0 then the position of elements will be as it is',()=>{
        let k=arr.length;
        expect(rotatetest.Rotate(k,arr)).toEqual(arr);
    });

    test('If k is not a number',()=>{
        let k='a';
        expect(rotatetest.Rotate(k,arr)).toEqual("Rotate Factor Is Not A Number");
    });

    test('If k is 3 and arr is [2,6,7,9,23,54,89,12,43]',()=>{
        let k=3;
        expect(rotatetest.Rotate(k,arr)).toEqual([89,12,43,2,6,7,9,23,54]);
    });

    test('If k is 5 and arr is [12,61,7,34,44,56,232,23,54,89,12,43]',()=>{
        arr=[12,61,7,34,44,56,232,23,54,89,12,43]
        let k=5;
        expect(rotatetest.Rotate(k,arr)).toEqual([23,54,89,12,43,12,61,7,34,44,56,232]);
    });

});