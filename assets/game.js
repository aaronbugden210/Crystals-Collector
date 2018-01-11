//The first four variables gives the gems a random number
//compNum is the random number that the computer generates

var redGem = Math.ceil(Math.random()*12);
var greenGem = Math.ceil(Math.random()*12);
var blueGem = Math.ceil(Math.random()*12);
var purpleGem = Math.ceil(Math.random()*12);

var compNum = Math.ceil(Math.random() * ((120 - 19) + 1) + 19);

//Player score variable
var score = 0;

//Counts wins and loses
var wins = 0;
var loses = 0;

// console.log("Red gem = " + redGem);
// console.log("Green gem = " + greenGem);
// console.log("Blue Gem = " + blueGem);
// console.log("Purple Gem = " + purpleGem);
// console.log("Comp Num = " + compNum);

//Sends value of compNum to the div that displays the value to the player
$("#goal").text("Goal: " + compNum);

//Sends values to divs displaying wins and loses to player
$("#wins").text("Wins: " + wins);
$("#loses").text("Loses: " + loses);

function reset()
{
	redGem = Math.ceil(Math.random()*12);
	greenGem = Math.ceil(Math.random()*12);
	blueGem = Math.ceil(Math.random()*12);
	purpleGem = Math.ceil(Math.random()*12);
	compNum = Math.ceil(Math.random()*120);
	score = 0;

	// console.log("Red gem = " + redGem);
	// console.log("Green gem = " + greenGem);
	// console.log("Blue Gem = " + blueGem);
	// console.log("Purple Gem = " + purpleGem);

	// console.log("Comp Num = " + compNum);
}

function endGame()
{
	if(score === compNum)
	{
		wins++;

		$("#wins").text("Wins: " + wins);

		alert("You won!");
		reset();

		$("#actScore").text("Your score is: " + score);
		$("#goal").text("Goal: " + compNum);
	}

	else if(score > compNum)
	{
		loses++;

		$("#loses").text("Loses: " + loses);

		alert("You lost, sorry.");
		reset();

		$("#actScore").text("Your score is: " + score);
		$("#goal").text("Goal: " + compNum);
	}
}

$(document).ready(function()
{
	$("#redGem").on("click", function()
	{
		score += redGem;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#greenGem").on("click", function()
	{
		score += greenGem;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#blueGem").on("click", function()
	{
		score += blueGem;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#purpleGem").on("click", function()
	{
		score += purpleGem;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

});
