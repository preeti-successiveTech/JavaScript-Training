var arr=[10,2,3,4,10,5,3,20,6];
var temp;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);