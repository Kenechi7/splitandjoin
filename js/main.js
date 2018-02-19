// In JS: Create an array of 5 strings. 
// Make sure to capitalize some of the letters in your strings.

var myArray = ['KeN', 'JeN', 'BeN', 'LeN', 'BoJaCk']

// In JS: Loop through the array. 
// Change each string to lowercase, 
// and then add them to a new array.

var newArray = [];

for (var i = 0; i < myArray.length; i++) {
	newArray.push(myArray[i].toLowerCase())
}
console.log(newArray);

// In JS: Loop through the new array 
// (all lowercase strings) and log the first 
// and last character of each string to the console.

// NOTE: If you have multiple loops on the same
// page, it's always good to change the 
// iterator (usually i)

for(var k = 0; k < newArray.length; k++) {
	console.log(newArray[k][0])
	console.log(newArray[k][newArray[k].length -1])
}

// In JS: Create a variable and store your name in it.
// Using the split method and a loop, 
// log each letter of your name to the console.

var name = 'ken'
var array = [];

array.push(name.split(""));
console.log(array)

for (var n = 0; n < array.length; n++) {
	console.log(array[n])
}

// In JS: Using the join method, 
// put your name back together and replace all 
// occurrences of one letter with another. 
// (ie: replace all a's with y's)

var name = 'kenechi okochi';
var array = [];

array.push(name.split(""));
console.log(array);


name.split("k").join("o");

// In JS: Create a function that will get the 
// user's input, test it against the standard regular expression 
// for emails, and log the result in the console.

function checkEmail() {
	var pattern = /[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,3}$/;
	var myRegex = new RegExp(pattern);
	var isEmail = myRegex.test(input.value);

	if(isEmail == false) {
		alert("Please enter a valid email address!")
	}
};

// This ensures that the email contains the correct syntax 
// an email. kenechi1@yaho.com follows the correct email pattern,
// but is not a valid email.

// In JS: Make the function "listen" to the button using addEventListener().

document.getElementById("btn").addEventListener("click", checkEmail);