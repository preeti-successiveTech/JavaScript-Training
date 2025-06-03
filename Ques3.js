let num=prompt("Enter the number:");
const square = function(num)
{
    return num*num;
}
const cube = function(num,square)
{
    return num*square;
}
console.log("This is cube of this number"+cube(num,square(num)));