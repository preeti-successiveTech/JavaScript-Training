var arr = [1,2,3,7,5,0];
var inverse = [];
for(i=0;i<arr.length;i++)
{
    inverse[arr[i]]=i;
}
console.log(inverse);