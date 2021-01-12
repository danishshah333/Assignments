a =[];
for (i=1 ; i<= 15 ; i++) {
    a.push (i) ;
}
document.write ( "Counting: " + a );



b =[];
for (i=10 ; i> 0 ; i--) {
    b.push (i) ;
}
document.write ( "<br>Reverse counting: " + b );



c =[];
for (i=0 ; i<=20 ; i++) {
    if (i % 2 === 0){
    c.push (i) ;
}
}
document.write ( "<br>Even: " + c );


d =[];
for (i=0 ; i<=20 ; i++) {
    if (i % 2 !== 0){
    d.push (i) ;
}
}
document.write ("<br>Odd: " + d);


e =[];
for (i=1 ; i<=20 ; i++) {
    if (i % 2 === 0){
    e.push (i + "K") ;
}
}
document.write ("<br>Series: " + e);
