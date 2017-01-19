/* custom Java Script here*/
console.log("App is Started!");
// create a refrence to the button of page
var clickMeButton = document.getElementById("clickMeButton");

//add an  event listner for click event and call the function
clickMeButton.addEventListener("click, Click");

// click function used an event listner
function Click(){
console.log("clicked!");
}