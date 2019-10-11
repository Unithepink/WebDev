// var age= prompt("What is your age?");
// if(age<0){
// 	console.log("ERROR. Insert positive number")
// }
// else if (age=== 25){
// 	console.log("Happy b-day")
// }
// if (age %2 != 0){
// 	console.log("Age odd")
// }
// if (age % Math.sqrt(age) == 0){
// 	console.log("Perfect square")
// }

function factorial(number){ 
	count=1;
for(var i=1; i<=number; i++)
	count*=i; 
	return count;
	}

console.log(factorial(5));