const arr = [10,2,3,4,5,2,3,6,10,2,2];
const newArr= new Set(arr);
const n=[];
var count=0;
for(i of newArr)
{
    for(j=0;j<arr.length;j++)
    {
        if(i==arr[j])
        {
            count++;
        
            if(count>1)
            {
                console.log(i+ " is also present at "+j);
            
            }
        }
    }
    count=0;
}