let gamenum="25";
let guessnum=prompt("Guessing the game number");
while( guessnum !== gamenum){ // so use kiye !== because already used string in gamenum
guessnum=prompt("you entered wrog number please guess again");//prompt ke andar number jo aa rahe hain vo string ke form mein aa rahe hain 
}
console.log(guessnum);
console.log("congratulations, you entered the right number ");