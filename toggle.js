var button= document.querySelector('button');

var buttonState=true;

// button.addEventListener("click", "")


button.addEventListener("click", function(){
	if(buttonState){
		document.body.style.background= "purple"
	else{
		document.body.style.background= "white"}
		}
		buttonState = !buttonState;
	}
		;