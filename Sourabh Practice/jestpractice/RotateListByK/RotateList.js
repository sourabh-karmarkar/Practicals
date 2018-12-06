
var Rotate = (k,arr)=>{
    let length=arr.length;
    
    //array to add elements to their position by determining k 
    let shiftedarr=[];

    //condition for checking if k is greater than array size
    if(k>length)
        return "Invalid Rotate Factor";
    
    //condition for checking if k is equal to array length or 0
    if(k===length || k===0)
        return arr;

    //condition to check if k is number
    if(typeof k ==='number')
    {
        //looping the received array only once and adding the elements to the new array at the specific position
        for(let i=0;i<length;i++)
        {
            //condition for adding values which are shifted to the front i.e if i+k > length-1
            if(i+k>length-1)
                shiftedarr[(i+k)-(length)]=arr[i];
            
            //adding the array values from position i to a new array i+k
            else
                shiftedarr[i+k]=arr[i];
        }
    }
    else
        return "Rotate Factor Is Not A Number";
    
    return shiftedarr;
}
module.exports={Rotate}