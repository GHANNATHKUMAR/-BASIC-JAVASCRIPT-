// for- of loop // for arrays and string 
//for-in loop //for objects and array
// to use loop on some special data type

//for-of loop
let str="Apna college";
let size=0;
for( let i of str){
    // iterator -> characters
console.log("i",i);
size++;
}
console.log("string size = ", size);

//for-in loop
let student ={
    name: "Rahul kumar",//key
    age:20,//key
    cgpa: 7.5,//key
    isPass: true};//key
    for(let i in student){
        console.log("key =",i,"value =",student[i]);
    }