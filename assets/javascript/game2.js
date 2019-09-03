var targetNumber;
var win;
var loss;


var targetNumber = (Math.floor(Math.random() * 102) + 19); 
$("#targetNumber").html('Target Number: ' + targetNumber);
// Add my number numberOptions.lenth back into the code once I know it works
for (var i = 0; i < 4; i++) {
    
    var crystalNumber = (Math.floor(Math.random() * 12) + 1);
    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-crystalvalue": crystalNumber
        });

    $(".crystals").append(crystal);

} 