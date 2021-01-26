var n1 = 42;

var a1 = ""+ n1;
var b1 = a1.split("")
var input1 = Number(b1[0]) + Number(b1[1]);
var ouput1 = input1 / b1.length

document.write ("The mean of 42 is : " + ouput1);

var n2 = 12345;

var a2 = ""+ n2;
var b2 = a2.split("")
var input2 = Number(b2[0]) + Number(b2[1]) + Number(b2[2]) + Number(b2[3]) + Number(b2[4]) ;
var ouput2 = input2 / b2.length

document.write ("<br>The mean of "+ n2 + " is : " + ouput2);


var n3 = 666;

var a3 = ""+ n3;
var b3 = a3.split("")
var input3 = Number(b3[0]) + Number(b3[1]) + Number(b3[2]);
var ouput3 = input3 / b3.length

document.write ("<br>The mean of "+ n3 + " is : " + ouput3);

