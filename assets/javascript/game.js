// declare variables

var randomResult=1;
var losses = 0;
var wins = 0;
var previous = 0;

// function start the game help us restart and start the game

var startGame = function(){

$(".crystals").empty();

randomResult = Math.floor(Math.random()*99)+19;

console.log(randomResult);

$("#result").html('Random Result is: '+ randomResult);

// this loop will give a random number every time the user play
for(var i = 0; i<4; i++){
    var random = Math.floor(Math.random()*11)+1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', 
        "data-random": random});



    $(".crystals").append(crystal)

    
}

}
startGame();
// document creates an event relegation and then make listen our next even
// .crystal in that way we can succesfully restar the game
$(document).on('click', ".crystal", function(){
    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);
    if(previous > randomResult){
        console.log("you lost");
        alert("you lost");
        losses --;
        $("#lose").html(losses);
        previous = 0;
        startGame();

    }else if(previous === randomResult){
        console.log("you won");
        wins ++;
        $("#win").html(wins);
        alert("You are the best! you Won");
        previous = 0;

        startGame();
    }
  
   
});

