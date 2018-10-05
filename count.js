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

const myArgs = process.argv.slice(2).join(' ');

function characterCount(string) {
  let output = {};
  for (let i = 0; i < myArgs.length; i++) {
    let key = myArgs[i];
    if (myArgs[i] !== ' ') {
      if (output.hasOwnProperty(myArgs[i])) {
        output[key]++;
      } else {
        output[key] = 1;
      }
    }
  }
  return output;
}

console.log(characterCount(myArgs));
