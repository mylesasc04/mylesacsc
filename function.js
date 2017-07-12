
function rand(num){
// this is a function
// that returns a random number between 0 and 1
  var ranNum = Math.random() * num; // assign a random # to randNum
   var result = Math.floor(ranNum);// set randNum to non decimal #
    return result;

}




var myDice =['one', 'two','three','four','five','six'];
console.log ("your a boss, you just rolled a... " + myDice[rand(6)]);
