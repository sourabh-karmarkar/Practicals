let findPrimeFactor=(number)=>{
    
    let arr=[];
    let factor=2;

    if(number==1)
        return null;
    while(number/2>=factor)
    {
        if(number%factor==0)
        {
            arr.push(factor);
            number/=factor;
        }
        else
            factor++;
    }
    if(number>1)
        arr.push(number);
    return arr;
}

module.exports={findPrimeFactor};