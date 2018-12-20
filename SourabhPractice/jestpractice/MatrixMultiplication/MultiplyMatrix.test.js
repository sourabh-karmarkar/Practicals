let mult=require('./MultiplyMatrix');

//defining rows and columns of the 2 matrices

var addElementsMatrix1=function(r1,c1)
{
    var number=1;
    //adding elements to matrix 1
    var matrix1 = [];
    for(var i=0; i<r1; i++) {
        matrix1[i] = [];
        for(var j=0; j<c1; j++) {
            matrix1[i][j] = number;
            number++;
        }
    }
    console.log(matrix1);
    return matrix1;
}

var addElementsMatrix2=function(r2,c2)
{
    var number=13;
    //adding elements to matrix 2
    var matrix2 = [];
    for(var i=0; i<r2; i++) {
        matrix2[i] = [];
        for(var j=0; j<c2; j++) {
            matrix2[i][j] = number;
            number++;
        }
    }
    console.log(matrix2);
    return matrix2;
}

describe('Matrix Multiplication',()=>{
    test('M1 : row(4) col(3) || M2 : row(3) col(5)',()=>{
        let r1=4;
        let c1=3;
        let r2=3;
        let c2=5;
        var matrix1=addElementsMatrix1(r1,c1);
        var matrix2=addElementsMatrix2(r2,c2);
        expect(mult.matrixmultiply(matrix1,matrix2,r1,c1,r2,c2)).toEqual([[118,124,130,136,142],
                                                                          [280,295,310,325,340],
                                                                          [442,466,490,514,538],
                                                                          [604,637,670,703,736]]);
    });

    test('M1 : row(4) col(5) || M2 : row(3) col(5)',()=>{
        let r1=4;
        let c1=5;
        let r2=3;
        let c2=5;
        var matrix1=addElementsMatrix1(r1,c1);
        var matrix2=addElementsMatrix2(r2,c2);
        expect(mult.matrixmultiply(matrix1,matrix2,r1,c1,r2,c2)).toEqual("Cannot Multiply Matrix");
    });
});