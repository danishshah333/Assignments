var sample = [3, "'a'", "'a'", "'a'", 2, 3, "'a'", 3, "'a'", 2, 4, 9, 3];
document.write ("sample: " + sample + "<br>");

var uniqueSample = [];
for ( i=0 ; i < sample.length ; i++ ) {
if( uniqueSample.indexOf ( sample[i] ) === -1){  //Push that elements of sample into unique sample which is not present in unique sample.
    uniqueSample.push( sample[i] );
}
}
document.write ("After removing duplication output sample is: " + uniqueSample);