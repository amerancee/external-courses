"use strict"
function addSubstringBeforeWord(string, substring, wordIndex) {
  let words = string.split(' ');
  if (wordIndex >= words.length) {
    words.push(substring);
    return words.join(' ');
  }
  return (
   words.map(function(item, index) {
    if (index === wordIndex) {
      return item + ' ' + substring;
    }
    return item;
   })
   .join(' ')
  );
}

module.exports = addSubstringBeforeWord