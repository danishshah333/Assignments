var password = prompt ("Please enter the password that meets the following conditions:\n  a. It should contain alphabets and numbers\n  b. It should not start with a number\n  c. It must at least 8 characters long")
var alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var num = [1,2,3,4,5,6,7,8,9];
var firstChar = password.charAt(0);


if (password.length < 8 ){
     document.write ("password should be atleast 8 characters long");
} else if (firstChar == num){
     document.write ("First character should not be a number");
} else if(password !== alphabets && numbers){
    document.write ("password should be a combination of alphabets and numbers")
} else {
     document.write ("correct")
}