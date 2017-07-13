

var prompt = require('prompt-sync')();

var bank = 1000; // start the player with 1,000 dollars
console.log('Welcome to your Adventure! Heres your cash, you have 1,000 dollars!!'); //tell the player 

var inventory = ['hyrule sword?','potion?','shield?','bow?'];

//prompt the user if they want to buy an item
while(bank>249)
for(var x =0; x < inventory.length; x++){
var answer = prompt('would you like to purchase a ' + inventory[x]);
if(answer === 'yes'|| answer === 'yes please'){
    bank = bank - 250;
    console.log('you have ' + bank + ' left ')
if(answer ==='no','no thanks'){
    console.log('okay how about these other Items?,')

};
}
};
console.log ('you outa money my boy! get outa here ya skamp!')