let arr =[1,2,3,2,1,4,5,6,3,5];
// const remove = new Set(arr); // we can use predefined function set()
// console.log(remove);
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            arr.splice(j,1);
        }
    }
}
console.log(arr);