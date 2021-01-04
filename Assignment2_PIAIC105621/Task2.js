var signalColor = prompt("Please enter color of road traffic signal");
if (signalColor === "Red" || signalColor === "red") {
    document.write ("Must Stop");
} else if (signalColor === "Yellow" || signalColor === "yellow"){
    document.write ("Ready to move");
} else if (signalColor === "Green" || signalColor === "green"){
    document.write ("Move now");
} else {
    document.write ("Re-enter again")
}