const str = "Hello Preeti";
const newstr = new Set(str);  // remove the duplicate values


var strWithoutDuplicate = "";
for ( i of newstr)     // for of used for array
{
    strWithoutDuplicate+= i;
}
console.log(strWithoutDuplicate);