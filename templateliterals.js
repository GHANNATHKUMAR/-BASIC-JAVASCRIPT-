// a way to have embedded expressions in strings
//literals -> a special type ki strings
// To create strings by doing substitution of placeholders , this phenomenon is called string interpolation
// 'string text $(expression) string text'
//Template literals in JavaScript are enclosed by backticks (`), not double inverted commas (double quotes)

//the length of a string, the output will be in numerical form
//When you use the prompt function in JavaScript, the output value is always in string form, regardless of whether the user enters a number or text.
//When you use template literals in JavaScript, the output value of a number in an expression will be in string form. Template literals are enclosed by backticks (`) and allow for embedded expressions using ${}
let specialstring='this is a template literal';
console.log(specialstring);
console.log(typeof specialstring);

let obj={
    item:"pen",
    price:10,

};
console.log("the cost of ", obj.item, "is",obj.price,"rupees"); // isme no highlight hoke aate hain 
let Output='the cosat of ${obj.item} is ${obj.price} rupees';//burt yahan template literals mein highlight hoke nai aayega because vo ek single string ke andar convert ho gaya hai 
console.log(Output);

let special='this is a template litertal ${1+2+3}';
let number = 13;
let message = `The number is ${number}`; // inside expressions that will be in string 
console.log(message); // Output will be "The number is 13"

//scape characters // \n->for next line and \t->for tab space
console.log("apna \ncollege");
console.log("apna\Tcollege");
console.log("apna\tcollege");
let str1="apna\tcollege";//expecting 13 of length
console.log(str1);
console.log(str1.length);//output->12 because in space characters mein do characters  likhte hain but vo single characters ke tarah count hoti hai
