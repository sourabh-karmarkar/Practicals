module.exports=function(options){
    return function(req,res,next)
    {
        if(options.option1==1)
            console.log("Option 1");
        else
            console.log("Option 1 is invalid!");

        if(options.option2==2)
            console.log("Option 2");
        else
            console.log("Option 2 is invalid!");
        next();
    }
}