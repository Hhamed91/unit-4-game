//Declaring var for each part of the game

var randomResult;
var lost= 0;
var win= 0;
var pervious = 0;

var resetAndStart = function(){

    // Empty the crystals to reset the game
    $(".meh").empty();

    var images = [
        "http://www.sclance.com/pngs/crystal-png/crystal_png_351264.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnrSHbUQcOHHEmVAqEjqiD9HST85GJF66MbwIFTzD2F5xPYYC",
        "https://data.whicdn.com/images/304180824/superthumb.png?t=1514540697",
        "https://data.whicdn.com/images/280966858/superthumb.png?t=1489220536",
    ];

    //Adding the computer choice, then giving it a random number
randomResult = Math.floor(Math.random()* 101) + 19;
// console.log(randomResult)

$("#computer").html("Random Result: " + randomResult);


//Create a loop to generate 4 divs for each crystal
for(var i=0; i<4; i++){

    //Each crystal should have a random hidden value between 1 - 12
    var randomNum = Math.floor(Math.random()* 11) + 1;   

    //Create a new div
    var crystal = $("<div>");

    // Add attr to each crystal with a new random number
        crystal.attr({
        "class": "cyrstal",
        "data-random": randomNum

    });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        });


    crystal.html(randomNum)
   

    $(".meh").append(crystal);
    }
    
    $("#currentNum").html("You total score is: " + pervious);

}
    // calling out the fucnstion to reset and start the game
    resetAndStart();



// When page loads, the click button generates a new class for each crystal after they get cleared out

$(document).on("click", ".cyrstal", function(){
    var cyrstalNum= parseInt($(this).attr("data-random"));

    pervious += cyrstalNum;

    $("#currentNum").html("You total score is: " + pervious);

    console.log(pervious);


    if(pervious > randomResult){

        lost++;
        $("#lost").html(lost);
        pervious = 0;
        resetAndStart();

    }else if(pervious === randomResult){

        win++;
        $("#win").html("Total number of wins " + win);
        pervious = 0;
        resetAndStart();

    }

});

