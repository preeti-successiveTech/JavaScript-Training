const str = "Hello John";
const newstr = str.split(" ");
console.log(newstr);
let re=" ";
for(i of newstr)
{
    for(j=i.length-1;j>=0;j--)
    {
        re+= i[j];
    }
    re+= " ";
    
}
console.log(re);