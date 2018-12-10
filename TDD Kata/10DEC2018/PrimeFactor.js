var findPrimeFactor=(number)=>{
    var factorarray=[];
    var factor=2;
    if(number==1)
        return null;
    while(number/2>=factor)
    {
        if(number%factor==0)
        {
            factorarray.push(factor);
            number/=factor;
        }
        else
            factor++;
    }
    if(number>1)
        factorarray.push(number);
    return factorarray;
}

module.exports={findPrimeFactor};