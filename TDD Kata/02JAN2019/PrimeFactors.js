var primeFactorFunction=(number)=>{
    var primeFactorArray=[];
    var factor=2;
    if(number==1)
        return null;
    while(number/2>=factor)
    {
        if(number%factor==0)
        {
            primeFactorArray.push(factor);
            number/=factor;
        }
        else
            factor++;
    }
    if(number>1)
        primeFactorArray.push(number);
    return primeFactorArray;
}
module.exports={primeFactorFunction};