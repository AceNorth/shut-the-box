var theBox = ['1','2','3','4','5','6','7','8','9'];
var totalRoll = 0;
var tempTotal = 0;
var flip = [];

function giveUp() {
  console.log("Game over! Your score is " + theBox.join(""));
};

function reset() {
  tempTotal = 0;
  flip = [];
};

function rollDie() {
  totalRoll = Math.floor((Math.random() * 11) + 2);
  console.log("Your roll is " + totalRoll + " and the box looks like this:");
  console.log(theBox);
}

function takeTurn () {
  if (theBox.length === 0) {
  alert("You shut the dang box!!!");
  break;
  }; 
  if (theBox.length === 1 && theBox[0] === 1) {
    confirm ("Roll the dice! You're only rolling ONE die now!");
    totalRoll = Math.floor((Math.random() * 6) + 1);
    console.log("Your roll is " + totalRoll + " and the box looks like      this:");
  console.log(theBox);
  getNumber();
  }
  confirm("Roll the dice!");
  rollDie();
  getNumber();
};

function getNumber() {
  var chosenNum = prompt("Which number do you want to flip?", "Enter a number, 'reset', or 'give up'");
  if (chosenNum === 'give up') {
    giveUp();
  } else if (chosenNum === 'reset') {
    reset();
    takeTurn();
  } else if (flip.indexOf(chosenNum) != -1) {
    alert("You've already flipped that this turn!");
    getNumber();
  }
  else if (theBox.indexOf(chosenNum) === -1) {
    alert("That's not a valid choice!");
    getNumber();
} else {
  flip.push(chosenNum);
  tempTotal += Number(chosenNum);
  if (tempTotal > totalRoll) {
    alert("Too high!");
    reset();
    getNumber();
  } else if (tempTotal === totalRoll) {
  for (i = 0; i < flip.length; i++) {
    var x = flip[i];
    for (var y = theBox.length; y >= 0; y--) {
      if (x === theBox[y]) {
      theBox.splice(y, 1);
      }
    }
  }
  reset();
  takeTurn();
  }
  else {
  getNumber();
  }
}
};

alert('Welcome to Shut the Box!');
takeTurn();
