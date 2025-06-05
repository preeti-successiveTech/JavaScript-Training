const str = "abcabcdabbcc";
var arr= new Set(str);  //to get the unique values
var newStr=" ";
var count=0 ;
for(i of arr){
    count=0; 
    for(j=0;j<str.length;j++)
    {
        if(i==str[j])
        {
            count++;
        } 
    }
    count = String(count);
    newStr+=i+count;
    
}
console.log(newStr);