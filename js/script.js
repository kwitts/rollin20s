var die = 3;
var dice = 1;
function diceRoll(die, dice) {
  var roll = 0;
  for (loop=0; loop < dice; loop++) {
    roll = roll + Math.round(Math.random() * die) % die + 1;
  };


var result = document.getElementById("result");
result.innerHTML = "";
result.innerHTML = result.innerHTML + "You rolled <span>" + roll + "</span>!";

};
