//Object initialization to be used for multiple Gem objects in the game
var Gem = 
{
	value: this.Math.ceil(Math.random()*12),
	title: null,
	resetValue: function()
	{
		this.value = Math.ceil(Math.random()*12);
	}
};

var redGem = Object.create(Gem);
redGem.title = $("#redGem").attr("title", "Value: " + redGem.value);

var greenGem = Object.create(Gem);
greenGem.title = $("#greenGem").attr("title", "Value: " + greenGem.value);

var blueGem = Object.create(Gem);
blueGem.title = $("#blueGem").attr("title", "Value: " + blueGem.value);

var purpleGem = Object.create(Gem);
purpleGem.title = $("#purpleGem").attr("title", "Value: " + purpleGem.value);

console.log("Red gem = " + redGem.value);
console.log("Green gem = " + greenGem.value);
console.log("Blue Gem = " + blueGem.value);
console.log("Purple Gem = " + purpleGem.value);
console.log("Comp Num = " + compNum);

checkValues(redGem, greenGem, blueGem, purpleGem);

var compNum = Math.ceil(Math.random() * ((120 - 19) + 1) + 19);

//Player score variable
var score = 0;

//Counts wins and loses
var wins = 0;
var loses = 0;

//Sends value of compNum to the div that displays the value to the player
$("#goal").text("Goal: " + compNum);

//Sends values to divs displaying wins and loses to player
$("#wins").text("Wins: " + wins);
$("#loses").text("Loses: " + loses);

//Function that resets the whole game to zero
//The object type 'Gem' has a reset function (resetValue()) exclusive to the object itself
function reset()
{
	redGem.resetValue();
	greenGem.resetValue();
	blueGem.resetValue();
	purpleGem.resetValue();
	compNum = Math.ceil(Math.random()*120);
	score = 0;

	console.log("New Red gem = " + redGem.value);
	console.log("New Green gem = " + greenGem.value);
	console.log("New Blue Gem = " + blueGem.value);
	console.log("New Purple Gem = " + purpleGem.value);

	checkValues(redGem, greenGem, blueGem, purpleGem);

	redGem.title = $("#redGem").attr("title", "Value: " + redGem.value);
	greenGem.title = $("#greenGem").attr("title", "Value: " + greenGem.value);
	blueGem.title = $("#blueGem").attr("title", "Value: " + blueGem.value);
	purpleGem.title = $("#purpleGem").attr("title", "Value: " + purpleGem.value);

	console.log("New Comp Num = " + compNum);
}

//Function that checks values of the Gem objects and resets them if they are equal to another Gem objects value
//Since the first gem will have the first gem (w) is the first one to gain a value,
//I chose to reset any value other than (w)
function checkValues(w, x, y, z)
{
	do
	{
		if(x.value === w.value || x.value === y.value || x.value === z.value)
		{
			x.resetValue();
			x.title = $("#greenGem").attr("title", "Value: " + x.value);
			console.log("Check values green: " + x.value);
		}

		else if(y.value === w.value || y.value === x.value || y.value === z.value)
		{
			y.resetValue();
			y.title = $("#blueGem").attr("title", "Value: " + y.value);
			console.log("Check values blue: " + y.value);
		}

		else if(z.value === w.value || z.value === x.value || z.value === y.value)
		{
			z.resetValue();
			z.title = $("#purpleGem").attr("title", "Value: " + z.value);
			console.log("Check values purple: " + z.value);
		}
	}while(x.value === w.value || x.value === y.value || x.value === z.value ||
		y.value === w.value || y.value === x.value || y.value === z.value ||
		z.value === w.value || z.value === x.value || z.value === y.value);
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
		score += redGem.value;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#greenGem").on("click", function()
	{
		score += greenGem.value;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#blueGem").on("click", function()
	{
		score += blueGem.value;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

	$("#purpleGem").on("click", function()
	{
		score += purpleGem.value;
		$("#actScore").text("Your score is: " + score);
		endGame();
	});

});
