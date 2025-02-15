//some more methods
//map
// similar to forEach but map creates new array but forEach kuchh specific kam karke hi deta hai
// creates a new array with the results of some operation. The value its callback returns are used to form new array 
//arr.map(callbackFnx)(CSSMathValue,indexedDB,array)
let nums=[67,56,78];
nums.map((val)=>{
    console.log(val);
});
nums.map((val)=>{
    return val;// will return value but store kaha hoga kahin nahi  // yahan pe value ko hi return karwa liya
});
nums.map((val)=>{
    console.log(val);
});
console.log(nums);
let newarr=nums.map((val)=>{
return val;//will return value and will store in newarr
});
console.log(newarr);
console.log(nums);
let newarcalsquare=nums.map((val)=>{
return val;//will return value and will store in calsquare
});
console.log(newarcalsquare);
// map is used for create newarr and can store by return 

//now filter method // same as chay chhalna 
//creats a new array of elements that give true for a condition/filter
let newarr3=nums.filter((val)=>{
    return val%2==0;
})
console.log(newarr3); // yeh matlab array ban gaya of filter out elements

let newarr4=nums.filter((val)=>{
    return val%2==0;
})
console.log(newarr4); 

// reduce arraymethods
// perform some operations and reduces the array to a single value. It returns that single value.
let arr09=[1,2,3,4];
 const output=arr09.reduce((res,curr)=>{// res means previous value and curr means current vala and ye return hoke res me hi store hota hai  (1,2),(3,3),(6,4) toh after (6,4) previous vala mein yani res mein 10 chala jayega  jo ki output me store kara dete hain 
return res+curr;
});
console.log(output);//10
let arr07=[8,5,3,9,6];
const output1=arr07.reduce((prev,curr)=>{
    return prev>curr?prev:curr;// input  multiple elements in array but output 1
});
console.log(output1); //9

