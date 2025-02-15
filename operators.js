// arithmetic operators 
let a=2;
let b=5;
console.log("a=",a,"&b=",b);
console.log("a+b=",a+b);
console.log("b-a=",b-a);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("b/a=",b/a);
console.log("b%a=",b%a);
console.log("b**a=",b**a);//5^2

// unary operators 
//post increment and pre increment 
console.log(a++);//2
a++;
console.log(a);//4
a=a+1;//5
console.log(a);//5
a--;
console.log(a);//4
console.log(a--);//4
a=a-1;
console.log(a);//2
++a;
console.log(a);//3
console.log(++a);//4
console.log(--a);//3
a += 5;//a=a+5
console.log(a);
console.log(b/a);
//comparison operators 
console.log("a==b",a==b);// will give boolean value true(1) or false(0)
console.log("a==b",a!=b);
 let c=5;// number 
let d="5";//string -> number then checks for a==b
console.log("c==d",c==d); // true because checks value only 
console.log("c===d",c===d);//strict version of checking and here checking data type also // so answer will come false // mostly used 
console.log("c!==d",c!==d);
 let e=4;
 let f=5;
console.log("e>f",e>f);// false 
console.log("e<f",e<f);// true 
console.log("e<=f",e<=f);// true 
//logical operators &&,||,!
let g=5;
 let h=6;
let condn1=g<h;//true
let condn2= g===h;// false 
console.log("condn1 && condn2",condn1 && condn2); //false 
// NOTE : if condition first is false then second condition will not check because already one condition became false IN LOGICAL AND 
console.log("condn1 && condn2",g<h && g===h );
console.log(g<h || g===h); // true 
//NOTE: IF FIRST CONDITION IS TRUE THEN SECOND CONDITION WILL NOT BE CHECKED HERE ALSO IN LOGICAL OR 
console.log("!(g<h)",!(g<h));//false 