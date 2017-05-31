// Write a function countLetters that can return to us all the unique
// characters that exist in a string that is passed into the function.

//Furthermore, the function should also report back how many
// instances of each letter were found in the string.

//needs to return an object that can represent the stats for the
// sentence it is given: all the characters found in the input string,
// and their respective counts.

// Ex
// Input
// countLetters("lighthouse in the house")
// Output
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

var str = "lighthouse in the house";
// countLetters("lighthouse in the house")


function countLetters(str) {
  // remove spaces between strings
  var noSpaces = str.split(" ").join("").toLowerCase();
  // declare object variable to return
  var characterCounter = {};
// get each character in string
  for(var i = 0; i < noSpaces.length; i++ ) {
    var char = noSpaces.charAt(i);
    // start counting charater occurence
    var count = 0;
    for(var j = 0; j < noSpaces.length; j++) {
      var nextChar = noSpaces.charAt(j);
      if(char === nextChar) {
        count++;
      }
      characterCounter[char] = count;
    }
  }
  return characterCounter;
}

console.log(countLetters(str));








