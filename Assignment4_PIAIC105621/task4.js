var email = prompt("enter email address ");
var char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var valid = email.includes("@") && email.startsWith(char);


if (valid === true){
    document.write (email)
}else {
    document.write ("Invalid")
}