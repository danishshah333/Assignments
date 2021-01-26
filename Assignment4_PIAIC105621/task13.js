var currentDate = new Date()
document.write("Current Date: " + currentDate);
var date = currentDate.getTime();
document.write ("<br>Elapsed milliseconds since January 1, 1970: " + date)
var date1 = date / (1000 * 60);
document.write ("<br>Elapsed minutes since January 1, 1970: " + date1)
