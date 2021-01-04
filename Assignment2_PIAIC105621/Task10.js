var correctPassword = "PASSWORD"
var secondpw = prompt("Please enter your password");
if (secondpw === "")  {
    document.write ("Please enter your password");
}  else if (secondpw === correctPassword) {
    document.write ("Correct! The password you entered matches the original password");
}    else {
    document.write ("Incorrect password");
}