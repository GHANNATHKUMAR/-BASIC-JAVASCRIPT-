// conditional statements 
let age=36;
if(age>19){
    console.log("can marry ");
}
if(age>40){
console.log("not marry");
}

 let mode="dark";
 let color;
 if(mode==="dark"){
    color="black";
 }
 if(mode==="light"){
    color="white";
 }
 let darkmode="dark-mode";
 let backgroundcolor;
 if(darkmode==="dark-mode"){
    color="black";
 }
 else{
    color="blue";
 }
 // odd or even number 
 let num=40;
 if(num%2===0){
    console.log("given number is even",num);
 }
 else{
    console.log( num,"number is not even");
 }
 // there is syntax -> rules in every program 
 let mode1="silver";
 let color1;
 if(mode1==="dark"){
    color1="black";
 }
 else if(mode==="blue"){
    color1="blue";
 }
 else if(mode==="pink"){
    color1="pink";
 }
 else{
    color1="white";
 }

 if(mode==="dark") console.log(mode); // only work in one kam and one line // but generally use curly braces 
 
 // TERNARY OPERATORS  // 3 operands will work here a? b:c// condition?true output:false output ;
 let age1=56;
 let result = age1>=18 ? "adult" : "not adult";
 console.log(result);
 age1=78;
 age1>=18 ? console.log("adult") : console.log("not adult");
 age1>=18 ? "adult" : "not adult";// simpler or compact if-else 
  // for more exploring HTML,CSS,JAVASCRIPT(JS) PREFER MDN DOCS  MOJILLA and also for reading and learning 

  //switch statement 
  const expr = 'Papayas';
  switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  