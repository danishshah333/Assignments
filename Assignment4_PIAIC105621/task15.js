var age = prompt("Please enter your age");
document.write ("Your age is: " + age);

var currentDate = new Date ();
//console.log (date);//
var currentYear = currentDate.getFullYear();
//console.log (year);//
var birthYear = currentYear - age
document.write ("<br>Your birth year is: " + birthYear);
