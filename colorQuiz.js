var colors= generateRandomColors(6);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var message= document.getElementById("correct")
colorDisplay.textContent=pickedColor;
var h1= document.querySelector("h1");
var tryAgainButton= document.getElementById("tryAgainButton");

function newRandomColors(){
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i]}
}

for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.backgroundColor;
		if(clickedColor==pickedColor){
			message.textContent="Correct"
			h1.style.backgroundColor=pickedColor
				for(var j=0; j<squares.length; j++){
				squares[j].style.backgroundColor= pickedColor
					}
			}
		else{
			this.style.backgroundColor= "#232323"
			message.textContent="Try again"
			console.log(colors[i].value)
			}	
				} 
					);
						}


function pickColor(){
			var random= Math.floor(Math.random() * colors.length);
	return colors[random]

}

function generateRandomColors(num){
		var arr=[]
		for (var i = 0; i < num; i++) {
			arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
		var r= Math.floor(Math.random() * 256)
		var g= Math.floor(Math.random() * 256)
		var b= Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

tryAgainButton.addEventListener("click", function(){
	if(	tryAgainButton.innerText="Try Again?"){
		newRandomColors()
		message.textContent=""
		document.style.backgroundColor= "#232323"
		tryAgainButton.textContent="New Colors"
		pickColor()
					}

	else{

	}
})

