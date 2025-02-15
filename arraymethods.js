//array methods 
// Push(): add to end
// PopStateEvent(): delete from end and return 
// to String(:converts array to string)
// NOTE:IN ARRAY ARRAY METHODS 
// METHODS MATLAB ARRAY KE ANDAR KUCHH CHIZ AISI HOTI HAI JO KAM KARKE DETI HAI 
// NOTE : ARRAY KE ANDAR KUCHH METHODS HOTE HAIN JO ARRAY KO  CHANGE KARKE DETE BUT KUCHH HOTE HAIN JO HAMARE ARRAY KO CHANGE NAHI KARTE HAIN BUT NEW ARRAY HAME RETURN KARKE DETE HAIN
// STRINGS ME TOH HAME PATA THA STRING IMMUTABLE HOTI HAI VO CHANGE HOTI NAHI// VAHAN PE HAR BAR JO BHI METHODS HOTE THE NEW STRING RETURN KARKE DETE THE 
// LEKIN ARRAY KE ANDAR AISA NAHI HOTA HAI  KUCHH METHODS SAME ARRAY KE ANDAR CHANGE KAR DETA HAI KUCHH NEW ARRAY RETURN KAR DETE HAIN
// GENERALLY WE USE GOOGLE KAUN SA ARRAY METHODS KYA KARTA HAIN

let fooditems = ["potato", "apple", "litchi", "tomato"];
 let pushitems=fooditems.push("chips", "burger", "paneer");
 console.log(pushitems) ;// This will print the new length of the array 7 this will not print array but will print length 
 fooditems.push("chips", "burger", "paneer"); // Adds "chips", "burger", "paneer" to the array
 console.log(fooditems.length);//10 
 console.log(fooditems); // ["potato", "apple", "litchi", "tomato", "chips", "burger", "paneer"]
 fooditems.pop(); // Removes the last item "paneer"
 console.log(fooditems); // ["potato", "apple", "litchi", "tomato", "chips", "burger"]
 console.log(fooditems.length);
let deleteditem=fooditems.pop();
console.log("deleted",deleteditem);//burger 
console.log(fooditems.pop());//chips // change will be also in main array
console.log(fooditems); 
console.log(fooditems.push("soyabin"));// this array methods will change in main array 
console.log(fooditems); // change in main array 

// tostring // change array to string 
// no change in main array directly
console.log(fooditems); 
console.log(fooditems.toString());// will print in potato,apple,litchi,tomato,soyabin in this form as a string 
console.log(fooditems); // same print will happen like 28 line n

//concat() // to joins multiple arrays and return result 
let marbleheros=["thor","spiderman","ironman"];
let dcheros=["superman","batman"];
let heros=marbleheros.concat(dcheros); // but nothing will change in main array of both
console.log(marbleheros);
console.log(dcheros);

//NOW NOTE:
// unshift():add to start // unshift method it is same like push methods  in strings 
//shift(): delete from start & return  // it i same like pop method 
let val=marbleheros.shift();
console.log("deleted",val);
console.log(marbleheros);
marbleheros.shift();
console.log(marbleheros);
marbleheros.unshift("potato","aloo");// change in main array 
console.log(marbleheros);
marbleheros.shift();
console.log(marbleheros);// change in main array 

// slice(): returns a piece of that array // slice(startldx)// original array ke andar change nahi karta hamara slice  methods 
//splice(): change original array(add,remove,replace)//spliuce (startldx,delcount,newEli...)
let marveheros=["thor","spiderman","ironman","antman","DR.STRANGE"];
console.log(marveheros);
console.log(marveheros.slice(1,3));// no change in main array // 2 will come ek kam same thing happening as likestring here 
console.log(marveheros);
let newmarveheros=marveheros.slice(1,3);
console.log(newmarveheros);
newmarveheros=marveheros.slice();//agar bracket me kuchh nahi likha hai matlab pura slice karke return kar doh 5) ['thor', 'spiderman', 'ironman', 'antman', 'DR.STRANGE']
console.log(newmarveheros);
// splice using // change uin main array
//array =[1,2,3,4,5,6,7] // index of array[0,1,2,3,4,5,6]// splice[3,2,101,102]  // means pahle 101,102 add ho jayega  index 3 se chalu hoga aur 2 element delete hoga including index 2 means yani 4,5 delete ho jayega  // yani array ho jayega [1,2,3,101,102,6,7]
let numerarray=[1,2,3,4,5,6,7];
numerarray.splice(2,3,101,102); // change in main array
console.log(numerarray);
//  only for adding element in array
// note abhi array ho gaya hai [1,2,101,102,6,7] isme add kqarna hai manke chalo 1002 2 ke baad toh splice[2,0,1002]
numerarray.splice(2,0,1002);
console.log(numerarray); // now array become [1, 2, 1002, 101, 102, 6, 7]
// delete an element 
numerarray.splice(5,1); // 6 will be deleted // same 6,7 ko bhi delete kar sakte the 
console.log(numerarray);// so array will become  now [1, 2, 1002, 101, 102, 7]
// replace element  manke chalo 2 ko replace karna hai // toh 2 ko delete karo aur jo replace karna hai vo daal do 
numerarray.splice(1,1,34567); //(6) [1, 34567, 1002, 101, 102, 7]
console.log(numerarray);//so array will become  now [1, 2, 1002, 101, 102, 7]
let vale=numerarray.splice(3);  // iska matlab index 3 se leke end tak delete kar do
console.log("deleted",vale);//(3) [101, 102, 7]
console.log(numerarray);//(3) [1, 34567, 1002]
numerarray.splice(); // agar kuchh nahi likha hai toh iska matlab kuchh bhi delete nahi hone vala 
console.log(numerarray);