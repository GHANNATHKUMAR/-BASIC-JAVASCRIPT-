// block of code that perform specific task,can be invoked whenever is requird
console.log("hello!");
console.log("abc".toUpperCase());
console.log("abc".toUpperCase());
//[1,2,3].push(4);
// TOH YE log UpperCase push ye sab kya hai functions hai jo ek specific tasks provide karta hai
// har functions ke aggae () ye rahta hai 
// invoke karna matlab call karna jab bhi koi kam karwana hoga us function me jo kam hai uske liye 
function myfunction1(){
    console.log("welcome to apna college!");
    console.log("we are  learning js");
};
myfunction1();
myfunction1();myfunction1();
function myfunction(msg,n){
//parameter-> input
console.log(msg);
console.log(n);
};
myfunction("I LOVE JS",4);//argument 
// function definition ke andar jo variable hota hai vo variable hota hai aur functiion call ke andar jo pass karte hain vo argument kahte hain
function sum(x,y){
    // function programs is like local variables of function -> block scope 
    //local variables //scope
    s=x+y;
    return s;
}
let val1=sum(3,4);
console.log(val1);
function sum1(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

// arrow functions // it is a way of compact way of writing a functions\
 const a=5;

// so ek normal function ka arrow function likh sakte hain // ye modern js ka part hai jisme ye new feature hai
 const arrowsum=(a,b)=>{// toh yahan arrowsum ek ek variable hain usme functions hain 
    console.log(a+b);
 };
 arrowsum(4,5);
 arrowsum(7,5);
 const arrowmul=(a,b)=>{
    console.log(a*b);
 };
 arrowmul(7,8);
  // yani ek function ko ek aisa variable mein store kara diya 
  //kal ko chahe toh  usme normal value bhi store kar sakte hain  kyunki vo function variable ek simple variable hi toh hai
  let arrodiv=(a,b)=>{
    console.log(a/b);
 };
 arrodiv(16,8);
 arrodiv=9;
 console.log(arrodiv) ;// toh vahan agar us variable mein functionvalue tha toh kal ko normal value bhi ho sakta hai 
// arrayfunction isuse generally for small work like  sum,mul,div,sub

const printhello=()=> console.log("hello"); // for single line of code no error 
printhello();

function vowels(str){
    let count =-0;
    for( const char of str){
        console.log(char);
        if(char ==="a" || char==="e"||char==="i"||char==="e"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
}
let g=vowels("hello");
console.log(g);
 const  countvow=(str)=>{
    let count =-0;
    for( const char of str){
        console.log(char);
        if(char ==="a" || char==="e"||char==="i"||char==="e"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
 }
 countvow("hello");
 g=countvow("helloo");
 console.log(g);

 // for each methods in arrays 
 // methods bhi function hi hote hain but ye data structure ke saath jaise "abc".shift
// forEach loop in arrays
// arrodiv.forEach(callBackFunction)
// for each ka kam hota hai top create a 
// note in js we can pass functions as parameters jaise vahan pe variable pass karte hain as a parameter
function abc(){
    console.log("hello");
};
function myFunc(abc){
    return abc;
};
abc(); // Output: "hello"
const result1 = myFunc(abc);
result1(); // Output: "hello"
const returnedFunction = myFunc(abc);
returnedFunction(); // Output: "hello"

function abc() {
    console.log("hello");
    console.log("hello");
    let g = 5;
    console.log(g);
}

function myFunc(abc) {
    return abc;
}

const result7 = myFunc(abc);
result7();

// also some important thing 
function greet() {
    console.log("Hello, world!");
}
greet(); // Output: "Hello, world!"
//Functions can also be defined as expressions and assigned to variables:
const greet2 = function() {
    console.log("Hello, world!");
};
greet2(); // Output: "Hello, world!" //we call it the same way:

// toh function bhi normal variable ke tarah pass bhi kiye ja sakte hain kahin se return bhi kiye ja sakte hain 
   // aur aisa function jo kisi dusre function ko argument ke tarah pass kiya jata hain isi function ko ham name de dete hain call back 
// arr.forEach(callBackfunction)
// callbackfunction : here, it is a function to execute for each element in the array
 // a callback is function passed as an argument to another function
 //arr.forEach((val)=>{
   // console.log(val);})
 let arr =[1,2,3,4,5];
arr.forEach(function printval(val){ // val ek ek element ko uthayega aur perint karega
console.log(val);
});
// generally we pass calback  in form of array function
arr.forEach((val1)=>{
    console.log(val1);
});
//(val1)=>{
    //console.log(val1);
//} // ye hota hai hamara callback function // isme tin chize hain value(items), index(position),array itself
let arr1=["pune","delhi","mumbai"];
arr1.forEach((val,idx,arr1)=>{ // first val indicates value // second variable idx indicates index // third vala variable array 
    console.log(val);
    console.log(idx);
    console.log(arr1);
    console.log(val.toUpperCase(),idx,arr1);
})
// for each function jo hota hai vo higher order method ya higher order function kah sakte hain
// higher order functio vop hote hain jo dusre function ko as a parameter le lete hain  // ya fir kisi function ko return karte hain
// for  a given array of numbers , print the square of each vakue using forEach loop
let arr2=[1,2,3,4,5,6];
arr2.forEach((val6)=>{
    console.log(val6*val6);
});

// niche vali bhi valid hain jisme function ki definitio  likhi ho
let calsquare=(num)=>{
    console.log(num*num);
};
arr2.forEach(calsquare);
// niche vala bhi ek simple concept of callback  // and passed as a function 
function greet(name) {
    console.log('Hello, ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greet);
// niche bhi baat same hi hai
function greet(name) {
    console.log('Hello, ' + name);
}

function processUserInput(greet) {
    var name = prompt('Please enter your name.');
greet(name);
}

processUserInput(greet);



