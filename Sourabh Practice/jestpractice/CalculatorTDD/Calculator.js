var addition=(num1,num2)=>{
    
    var result=0;
    if(num1==undefined && num2==undefined)
        return result="Incorrect Values";
    else
    {
        if(num1==undefined)
            return result=num2;
        if(num2==undefined)
            return result=num1;
    }
    
    if(typeof num1=="number" && typeof num2=="number")
        return result=num1+num2;
    else
        return result="Please Enter Correct Number";
}

var subtraction=(num1,num2)=>{

    var result=0;
    if(num1==undefined && num2==undefined)
        return result="Incorrect Values";
    else
    {
        if(num1==undefined)
            return result= (num2*-1);
        if(num2==undefined)
            return result=num1;
    }
    
    if(typeof num1=="number" && typeof num2=="number")
        return result=num1-num2;
    else
        return result="Please Enter Correct Number";
}

var multiplication=(num1,num2)=>{return a+b}
var division=(num1,num2)=>{return a+b}

module.exports={addition,subtraction,multiplication,division}