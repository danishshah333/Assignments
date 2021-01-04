var a = prompt("Enter first number");
var num1 = Number(a);
var b = prompt("Enter second number");
var num2 = Number(b);
var op = prompt ("Enter operations");
if (op === "-") {
    document.write ("The subtraction of " + num1 + " and " + num2 + " is : " + (num1 - num2));
} else if (op === "+") {
    document.write ("The addition of " + num1 + " and " + num2 + " is : " + (num1 + num2));
} else if (op === "*") {
    document.write ("The mutiplication of " + num1 + " and " + num2 + " is : " + (num1 * num2));
} else if (op === "/") {
    document.write ("The division of " + num1 + " and " + num2 + " is : " + (num1 / num2));
} else if (op === "%") {
    document.write ("The modulus of " + num1 + " and " + num2 + " is : " + (num1 % num2));
} else {
    document.write ("Try again");
}    