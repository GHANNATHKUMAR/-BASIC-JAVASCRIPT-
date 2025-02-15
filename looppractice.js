// print all even numbers from 0 to 100
for(let num=0; num<=100; num++){
    if(num%2 === 0){
        console.log("num =",num);
    }
}
 
// create a game where you start with any raqnom game number. Ask the user to keep guessing the game number until the user enters correct value 
let gamenum=25;
let guessnum=prompt("Guessing the game number");// prompt ke andar number jo aa rahe hain vo string ke form mein aa rahe hote hain 

while( guessnum != gamenum){ // so use karna pada != instead of
guessnum=prompt("you entered wrog number please guess again");//prompt ke andar number jo aa rahe hain vo string ke form mein aa rahe hain 
}
console.log(guessnum);
console.log("congratulations, you entered the right number ");