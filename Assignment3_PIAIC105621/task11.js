var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var available = false;
for (var i=0; i<a.length; i++){
if (a[i] === b ){
    document.write (b + " is <b>available</b> at index " + i + " in our bakery");
    available = true;
    break;
}
}
if (!available){
    document.write ("We are sorry. " + b + " is not <b>available</b> in our bakery" )
}