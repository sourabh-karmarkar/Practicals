let findPrimeFactor=(number)=>{
    var numberarray=[];
    var factor=2;
    if(number==1)
        return null;
    while(number/2>=factor)
    {
        if(number%factor==0)
        {
            numberarray.push(factor);
            number/=factor;
        }
        else
            factor++;
    }
    if(number>1)
        numberarray.push(number);
    return numberarray;
}

module.exports={findPrimeFactor};