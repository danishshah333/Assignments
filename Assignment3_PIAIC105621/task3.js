var colorNames = ["brown","blue","red","white","black","yellow","purple","green"];
document.write (colorNames + "<br>");

colorNames.unshift ( prompt ("What color you wants to add to the beginning?"));
document.write ("<br>" + colorNames + "<br>");

colorNames.push(prompt ("What color you wants to add to the end?"));
document.write ("<br>" + colorNames + "<br>");

colorNames.unshift ("White","Black");
document.write ("<br>" + colorNames + "<br>");

colorNames.shift();
document.write ("<br>" + colorNames + "<br>");

colorNames.pop();
document.write ("<br>" + colorNames + "<br>");

colorNames.splice (prompt("At which index you wants to add a color"), 0 ,prompt("What color you wants to add"));
document.write ("<br>" + colorNames + "<br>");

colorNames.splice (prompt("At which index you wants to delete color(s)"), prompt ("How many colors you wants to delete"));
document.write ("<br>" + colorNames);