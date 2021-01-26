var sentence = "The quick brown fox jumps over the lazy dog";
document.write (sentence);

var sentenceWords = sentence.split (" ");

var count = 0;

for (var i=0; i<sentenceWords.length;i++){
    if (sentenceWords[i] === "The" || sentenceWords[i] === "the"){
    count++;
}
}
document.write ("<br>The number of occurrences of the word 'the' is : " + count);