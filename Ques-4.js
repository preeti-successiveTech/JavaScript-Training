const str1 = "preeti";
const str2 = "GaRG";

// var newStr1 = str1.toUpperCase();
// console.log(newStr1);

// var newStr2 = str2.toLowerCase();
// console.log(newStr2);
function upperCase(str)
{
var st1=" ";
    for(i in str)
    {
        var code = str.charCodeAt(i);  // charCodeAt to fetch the ASCII value of that character
        if(code>=65 && code<=91)
        {
            st1+=str[i];
        }
        else
        {
            st1+=String.fromCharCode(code-32);  // to fetch character from ASCII value
        }
    }
    return st1;
}
function lowerCase(str)
{
var st1=" ";
    for(i in str)
    {
        var code = str.charCodeAt(i);
        if(code>=65 && code<=91)
        {
           st1+=String.fromCharCode(code+32);
        
        }
        else
        {
            
              st1+=str[i];   
        }
    }
    return st1;
}
console.log(upperCase(str1));
console.log(lowerCase(str2));