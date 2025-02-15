//prompt the user to inter their full name.generate a username for them based on the input.
//start username with @ , followed by their full name and ending with the fullname length 
//let username=prompt("please enter your full name");
//the length of a string, the output will be in numerical form

let username = prompt("please enter your full name");
// the length of a string, the output will be in numerical form
 let strlen = username.length;
console.log(strlen);
 strlen = `${strlen}`;  // Use backticks for template literals // numerical value into  string value 
 username = "@" + username + strlen;
console.log(username);

let strlen4 = username.length;
console.log(strlen4);
//    // Use backticks for template literals // numerical value into  string value 
username = "@" + username + strlen4; // this also concat string normally  to add numerical value to string here 
console.log(username); 
// NOTE: for checking strictness in numerical value and string of a number then take care jaise hamne dekha tha usme  if else me ek example 
