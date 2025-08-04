var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validates(){
var id = document.getElementById("id").value;
var password = document.getElementById("password").value;
if ( id == "admin" && password == "123"){
alert ("Login successfully");
window.location = "addstudent"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("id").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


