//methods meaning kuchh kam karwana 
// these are built-in functions to manipulate a string 
// str.toUpperCase()//CAMELCASE
//str.tolowercase()
//str.trim() //removes whitespaces
// let str="ApnaCollege";
// str.toUpperCase();
// console.log(str);//will print normally because jitne bhi methods hai string ke ye hame ek nayi value return karwata hai // yani vo kabhi bhi vo pahle vala string ko change nahi karega
let str="ApnaCollege";//strings are immutable(jo chiz change nahi hoti )  //for change you should use new str
  let newstr=str.toUpperCase();
  console.log(str);
console.log(newstr);

str=str.toUpperCase();// yajan pe bhi store karaye 
console.log(str);
str=str.toLowerCase();
console.log(str);
console.log(str.toUpperCase()); //will print APNACOLLEGE but will not change purana string
let str1="     apna    college js    ";
console.log(str1.toUpperCase());
console.log(str1);
console.log(str1.trim()); // aage aur pichhe ka spaces hata dega  toh ant aur last vala spaces ko whitespaces kahte hain
console.log(str1);
str1=str1.trim();
console.log(str1);
// NOTE: strings are immutable in js 
//also mmethods will return mew value 
//more methods are here also in js 
// str.slice(start,end?)//returns part of string 
//str.concat(str2) //joins str2 with str1
// str.replace()(searchVal,newVal)
let str2="011223456";
console.log(str2.slice(0,11));//011223456
console.log(str2.slice(1,5));//1122 //5th index ko include nahi karega 
console.log(str2.slice(1)); // toh agar last vala hata nhi dein kyonki vo optional hota hai tohvo 1 index se leke poora last tak lega //11223456
console.log(str2.slice()); // agar ham kuchh bhi na de toh vo pura print kara dega but when we use generally then we pass index
let str3="apna";
let str4="college";
console.log(str3.concat(str4));
console.log(str3);
console.log(str4);
let res=str3.concat(str4);
console.log(res);
// for concatation we use below option also 
let res1=str3+str4;
console.log(res1);
let result="i am learning from coding "+ str3+str4;
console.log(result);
 let str5="hello";
 console.log(str5.replace("h","y")); //yellow
 console.log(str5.replace("lo","p"));//yani search value ko new value bana do//help
 console.log(str5);
 str5=str5.replace("h","y");
 console.log(str5);
 let str6="hellolololo";
 console.log(str6.replace("lo","p"));//first vala lo ko change karta
 console.log(str6.replaceAll("lo","p"));// all lo will be replaced from p
let str7="kumart";
 console.log(str7.charAt(2));//// at 2nd index m is  present
 //str[0]="s"; // no change will  be styring because string is changing by creating new string
 console.log(str7);
let str8=str7.replace("k","s");
console.log(str8);//sumart
str7=str7.replace("s","k");
console.log(str7);