// collection of items in linear form 
//position , index 
let heros=["ironman", "hulk","batman"];
let marks=[1,16,17];
let info=["rahul",86,"delhi"];// we can use string , number, bollean in java script but generally use same type ki information  prefer karte hain

// now 
let marks1=[87,43,89,89,43];
console.log(marks1);
console.log(marks1.length);//property

console.log(heros);
console.log(heros.length);
console.log(typeof marks1);//object //NOTE: THIS IS ALSO A OBJECT but we us arrays alag se but this is also a object type 
// we have seen primitive and non-oprimitive data types(advanced data types)like object 
// toh key ke jagah index use karte hain aisa mano 
 console.log(marks1[0]);
 console.log(marks1[1]);
 console.log(marks1[2]);
 console.log(marks1[3]);
 console.log(marks1[4]);
 console.log(marks1[5]);//undefined 
 marks1[0]=77;
 console.log(marks1[0]);
 // NOTE: strings are immutable in js but arrays are mutable like this  
 // marks[1]=77 toh is prakar se value nahi change kar sakte string ka 

 //Looping over an array
 // // printing all elements in array using loops // iterable(strings,objects,arrays )
 let her=["ironman","thor","hulk","shaktiman","spiderman","antiman"];
for (let i=0; i<her.length; i++ ){
    console.log(her[i]);
}

let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
    console.log(city);
}
let marks5=[4,190,12,13,56,78];
let sum=0;
for(let val of marks5){
    sum=sum+val;//sum += val
}
let avg=sum/ marks5.length;
console.log(`avg marks of the class= ${avg}`);// NOTE:Use backticks(`) for template literals NOT not single quotes(')

// 20% off on each then store final price 
let prices=[250,645,300,900,50];
let fprice=0;
for(let price of prices){
fprice=(price*20)/100;
price=price-fprice;
console.log(price);
}
for(let price of prices){
    console.log(price);// no change in final price 
}
// toh hamne dkha no change 
// NOTE for changing value of an  array you have to introduce index of an array
let idx=0;
for( let price of prices){//price is variable of loops which takes simple value of prices   
    console.log(`value at index ${idx} =${price}`);
    fprice=(price*20)/100;
    prices[idx]=prices[idx]-fprice;
console.log(`value after offer =${prices[idx]}`);
    idx++;
}
for(let price of prices){
    console.log(price);// now value of aARAY CHANGED IN ORIGINAL ARRAY 
}

// // SECOND WAY WAS below
// fprice=0;
// for( let i=0; i<prices.length; i++){
// fprice=(prices[i]*20)/100;
// console.log(prices[i]);
// } 
//instead of 
// // let idx=0;
// for( let price of prices){//price is variable of loops which takes simple value of prices   
//     console.log(`value at index ${idx} =${price}`);
//     fprice=(price*20)/100;
//     prices[idx]=prices[idx]-fprice;
// console.log(`value after offer =${prices[idx]}`);
//     idx++;
// }
// NOTE TOH SIMPLE CHIZ CHANGE KARNE KE LIYE INDEX PICTURE ME LANA HOGA 
