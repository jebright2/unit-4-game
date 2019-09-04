var targetNumber;
var win;
var loss;


var targetNumber = (Math.floor(Math.random() * 102) + 19); 
$("#targetNumber").html('Target Number: ' + targetNumber);

for (var i = 0; i < 4; i++) {
    
    var crystalNumber = (Math.floor(Math.random() * 12) + 1);
    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-crystalvalue": crystalNumber
        });

    $(".crystals").append(crystal);
} 

$(".crystal").on('click', function() {
    console.log($(this).attr('data-crystalvalue'));
});