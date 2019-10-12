var playerOneButton= document.querySelectorAll("button")[0];
var playerTwoButton= document.querySelectorAll("button")[1];
var resetButton= document.querySelectorAll("button")[2];
var noRounds=	document.getElementById("numberBox");
var displayedRounds= document.getElementById("displayedScore");

var playerOneScore= document.getElementById("pOneScore");
var playerTwoScore= document.getElementById("pTwoScore");

var plOneCounter=0;
var plTwoCounter=0;

noRounds.addEventListener("click", function(){
	displayedRounds.innerText= noRounds.value;
})

playerOneButton.addEventListener("click", function(){
if(plOneCounter<displayedRounds.innerText){
		plOneCounter++;
		playerOneScore.textContent= plOneCounter;

		
}
// if(plOneCounter=displayedRounds.innerText){
// 			displayedRounds.style.color = "green";
// 		}

})

playerTwoButton.addEventListener("click", function(){
if(plTwoCounter<displayedRounds.innerText){
		plTwoCounter++;
		playerTwoScore.textContent= plTwoCounter;
}

resetButton.addEventListener("click", function(){
	plOneCounter=0;
	plTwoCounter=0;
	playerOneScore.textContent= 0;
	playerTwoScore.textContent= 0;
})


})