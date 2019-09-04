var crys1;
var crys2;
var crys3;
var crys4;
var win = 0;
var loss = 0;

var targetNumber = (Math.floor(Math.random() * 102) + 19); 

 $("#number-to-guess").text(targetNumber);

var counter = 0;
       
for (var i = 0; i < 1; i++) {

    var crys1 = (Math.floor(Math.random() * 12) + 1);
    var crys2 = (Math.floor(Math.random() * 12) + 1);
    var crys3 = (Math.floor(Math.random() * 12) + 1);
    var crys4 = (Math.floor(Math.random() * 12) + 1);
        console.log(crys1, crys2, crys3, crys4);  
}

$("#crys").on("click", function() {      

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    win++;
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    loss++;
  }

}); 

