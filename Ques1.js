function randomnumber(){
    return Math.floor(Math.random()*10)+1;
}
let previousnumber=randomnumber();
let currentnumber= randomnumber();
while(previousnumber==currentnumber)
{
    currentnumber+= 1;
}
console.log(currentnumber);
