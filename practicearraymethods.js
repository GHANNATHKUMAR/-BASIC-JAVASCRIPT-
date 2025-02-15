// create an array to store companies -> "Bloomberg" , "Microsoft","Uber","Google","IBM","Netflix"
//a.Remove the first company from the array 
//b.Remove uber and add Ola in its piece
// add Amazon at the end
//a
let companies=["Bloomberg" , "Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
//b
companies=["Bloomberg" , "Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(2,1,"ola");
console.log(companies); 
//c use push to add end or unshift to add start
companies=["Bloomberg" , "Microsoft","Uber","Google","IBM","Netflix"];
companies.push("Amazon");
console.log(companies); 
