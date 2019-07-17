//Declaring var for each part of the game

var randomResult;
var lost= 0;
var win= 0;
var pervious = 0;

var resetAndStart = function(){

    // Empty the crystals to reset the game
    $(".meh").empty();

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxxgib1z9MEAuRjyFVH87jnqWi6yFSpFz5mADdTawJ6AFL_l_LQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnrSHbUQcOHHEmVAqEjqiD9HST85GJF66MbwIFTzD2F5xPYYC",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvLUnOAZV50bF-gAP9akPQqSc6mi-g-Uf8vjGjlfVMMLe3WyhAA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL3065gKZ-KC-linVRN6sJrMxoOzoFcIqS15lzU9zIo8H66gm",
    ];

    //Adding the computer choice, then giving it a random number between 19-120
randomResult = Math.floor(Math.random()* 101) + 19;

    // console.log(randomResult)

$("#computer").html("Random Number: " + randomResult);


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

        //Connecting images with each URL
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        });

        // It can be used to show each number assigned to each crystal for cheating purposes
        // crystal.html(randomNum)
   
        //Creating each div with the image attr
        $(".meh").append(crystal);
        }
    
    $("#currentNum").html("Your total: " + pervious);

}
        // calling out the fucnstion to reset and start the game
    resetAndStart();



        // When the page loads, the click button generates a new class for each crystal after they get cleared out

$(document).on("click", ".cyrstal", function(){

    //Parsing the random number to an integer
    var cyrstalNum= parseInt($(this).attr("data-random"));

    pervious += cyrstalNum;

    $("#currentNum").html("Your total: " + pervious);

    // To see that we can get the total number
    // console.log(pervious);

    // if condition to check if we won or lost
    if(pervious > randomResult){

        lost++;
        $("#lost").html("Total number of losses: " + lost);
        alert("Opps! you lost ");
        pervious = 0;
        resetAndStart();

    }else if(pervious === randomResult){

        win++;
        $("#win").html("Total number of wins:" + win);
        alert("Yaaas!! You got the total number!");
        pervious = 0;
        resetAndStart();

    }

});

