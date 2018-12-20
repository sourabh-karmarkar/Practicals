let matrixmultiply=(m1,m2,row1,column1,row2,column2)=>{
    
    let result=[];
    console.log(m1);
    console.log(m2);
    if(column1!=row2)
        return "Cannot Multiply Matrix";
    else
    {
        //multiplying the 2 matrices (adding each entry to the new matrix results[][] )
        for(var i=0;i<row1;i++)
        {
            result[i] = [];
            for(var y=0;y<column2;y++)
            {
                result[i][y]=0;
                for(var z=0;z<row2;z++)
                    result[i][y]+=(m1[i][z]*m2[z][y]);
            }
        }
    }
    return result;
}

module.exports = {matrixmultiply};