var separatedigits_function=(num)=>{
    //if number is negative still the digits must be separated and added to array
    if(num===0)
        return 0;
    if(num===undefined)
        return "Number is not defined!";
    if(num<0)
        num=-num;

    //adding the digits of the number in the array
    var digits=num.toString().split('').map(function(i){return parseInt(i, 10);});
    return digits;
}

module.exports={separatedigits_function};