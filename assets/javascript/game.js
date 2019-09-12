var crys1;
var crys2;
var crys3;
var crys4;
var crystalTotal = 0;
var wins = 0;
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

    var imageCrystal1 = $("#crys1");
    var imageCrystal2 = $("#crys2");
    var imageCrystal3 = $("#crys3");
    var imageCrystal4 = $("#crys4");

    imageCrystal1.attr("data-crystalvalue", crys1);
    imageCrystal2.attr("data-crystalvalue", crys2);
    imageCrystal3.attr("data-crystalvalue", crys3);
    imageCrystal4.attr("data-crystalvalue", crys4);

        console.log(crystalTotal)
   
$(".btn").on("click", function() {      

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  console.log(crystalValue);

  counter += crystalValue;
  $("#totalScore").text(counter);

    
  if (counter === targetNumber) {
    alert("You win!!!");
    wins++;
    $("#wins").text(wins);
    reset();
    
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    loss++;
    $("#loss").text(loss);

    reset();

  }

     //Resets the game
  function reset() {
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#totalScore").text("Number To Get: " + targetNumber);
    crys1 = Math.floor(Math.random() * 11 + 1);
    crys2 = Math.floor(Math.random() * 11 + 1);
    crys3 = Math.floor(Math.random() * 11 + 1);
    crys4 = Math.floor(Math.random() * 11 + 1);
    counter = 0;
    $("#totalScore").text(counter);
}; 
    


 });

}