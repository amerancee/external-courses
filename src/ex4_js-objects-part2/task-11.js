"use strict"
function countIdenticalSymbols(string) {
  let symbols = string.toLowerCase().split('').sort();
  for (let i=0; i<string.length; i++) {
    let startIndex = symbols.indexOf(symbols[i], i);
    let endIndex = symbols.lastIndexOf(symbols[i], string.length);
    console.log(`${symbols[i]}: ${endIndex - startIndex + 1}`);
    i = endIndex;
  }
  return;
}

module.exports = countIdenticalSymbols