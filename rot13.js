function rot13(str) { // LBH QVQ VG!

  // variable inits
  var i = 0; // for loop
  let output = ""; // our output string
  let charN = 0; // our charcode holder

  // main loop
  while (i < str.length) {
    
    // get the asscii code of each char
    charN = str.charCodeAt(i);
    //console.log(charN);
    
    // if its 65 or more adds 13
    if (charN >= 65) {
      charN += 13;
    }
    //console.log(charN);

    // if its 90 or more substract 26 (again +13 from original char)
    if (charN > 90) {
      charN -= 26;
    }
    //console.log(charN)

    // form our output with new 'deciphered' chars
    output = output + String.fromCharCode(charN);

    // looping business
    i++

  }

  console.log(output)
  return output;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
