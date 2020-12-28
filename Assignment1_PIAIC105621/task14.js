var a = 2; // 1
var b = 1; // 0, 1, 0
// --a = 1
// --a - --b = 1 - 0 = 1
// --a - --b + ++b = 1 - 0 + 1 = 2
var c = --a - --b + ++b + b--; // 1 - 0 + 1 + 1 = 3
document.write ( "a is " + a); 
document.write ( "<br> b is " +b);
document.write ( "<br> result is " + c);