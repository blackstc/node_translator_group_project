function calcAverage(num1, num2) {
  return num1 / num2;
}

function checkWord(word1, word2) {
  //if the two words are the return true
  if (word1.toUpperCase() === word2.toUpperCase()) {
    return true;

  //if the length of either words is greater than 1 letter different, than return false
  } else if (word1.length - word2.length > 1 || word1.length - word2.length < 1) {
    return false;
  } else {
    //split the words into an array of individual characters
    var word1Characters = word1.split("");
    var word2Characters = word2.split("");
    var characterOffset = 0;

    for (var i = 0; i < word1Characters.length; i++) {
      if (word1Characters[i + characterOffset] !== word2Characters[i]) {
        characterOffset++;
      }
    }
    if (characterOffset <= 1) {
      return true;
    } else {
      return false;
    }
  }
}
checkWord("taest", "test");
checkWord("hello", "hellO");
checkWord("heo", "hellO");
checkWord("hello", "heelslO");
