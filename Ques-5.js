const str= "hello john doe";
/*const arr= str.split(" ");
var str1 = "";
str1+= arr[0];
// console.log(str1);
var st="";
for (i=1;i<arr.length;i++)
{
    st = arr[i].split('');
    str1+= st[0].toUpperCase();
    for(j=1;j<st.length;j++)
    {
        str1+= st[j];
    }
   
}
 console.log(str1);
*/
var str1=" ";
 for(i=0;i<str.length;i++)
 {
    if(str[i]==" ")
    {
        str1+=str[i+1].toUpperCase();
        i++;
    }
    else{
        str1+= str[i];
    }
 }
 console.log(str1);