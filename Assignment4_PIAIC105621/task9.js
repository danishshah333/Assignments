var sentence =('<p><strong><em>Only print this</em></strong></p>');
document.write ("<br>Output: <br>")
document.write (sentence.slice((sentence.indexOf ("Only")),(sentence.indexOf ("</em>"))));

