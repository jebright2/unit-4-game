var targetNumber;
var win;
var loss;

// Add my number numberOptions.lenth back into the code once I know it works
for (var i = 0; i < 4; i++) {
    
    var crystalNumber = Math.floor(Math.random() * 12);
    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-crystalvalue": random
        });

    $(".crystals").append(crystal);

} 