var a = prompt("Enter any number");
var num = Number(a);

if (num > 0) {
    document.write ("The number is positive ");
} else if (num === 0) {
    document.write ("The number is zero");
} else if (num < 0) {
    document.write ("The number is negative");
}else {
    document.write ("Try again");
}    