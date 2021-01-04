var marks = prompt("Please enter marks obtained in three subjects");
var totalMarks = prompt("Please enter total marks");
var percentage = (marks / totalMarks) * 100;
document.write ("<h1>Marks Sheet</h1>");
document.write ("Total marks : " + totalMarks);
document.write ("<br>");
document.write ("Marks obtained : " + marks);
document.write ("<br>");
document.write ("Percentage : " + percentage + "%");
document.write ("<br>");
if (percentage >= 80 && percentage <= 100) {
    document.write ("Grade : A-one","<br> Remarks : Excellent");
} else if (percentage >= 70 && percentage < 80) {
    document.write ("Grade : A","<br> Remarks : Good");
} else if (percentage >= 60 && percentage < 70) {
    document.write ("Grade : B","<br>Remarks : You need to improve");
} else {
    document.write ("Grade : Fail","<br>Sorry");}