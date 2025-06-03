const num= prompt("Enter the number");
const checkEvenOdd = function(num)
{
    if(num%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkEvenOdd(num));