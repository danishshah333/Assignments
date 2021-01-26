var date = new Date();
document.write (date);
var year =  date.getFullYear(); 
//var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]//
//var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]//
var month = date.getMonth();
var day = date.getDay()
if (date.getDate() < 16 ) {
    document.write ("<br>First fifteen days of the month");
} else {
    document.write ("<br>Last days of the month");
};
