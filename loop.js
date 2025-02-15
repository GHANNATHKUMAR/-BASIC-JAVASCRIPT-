//loops and strings 
// for loop
for(let count=1; count <=5; count++){
    console.log("apna college");
}
//calculate sum of 1 to n 
let sum=0;
let n=prompt("enter value of n:");
for(let count=1; count <=n; count++){
   sum=sum+count;
}
console.log("sum is",sum);

for(let count=1; count <=n; count++){
    console.log("i=",count);
 }
// console.log("i=",i); // here you will get error because i is defined into loop // but mnot in case of var // so we will use generally let
