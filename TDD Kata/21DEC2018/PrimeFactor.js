var primeFactorFunction=(number)=>{
    var factorArray=[];
    var factor=2;
    if(number==1)
        return null;
    while(number/2>=factor)
    {
        if(number%factor==0)
        {
            factorArray.push(factor);
            number/=factor;
        }
        else
            factor++;
    }
    if(number>1)
        factorArray.push(number);
    return factorArray;
}

module.exports={primeFactorFunction};