const palindromes = function (sentence) {
    sentence = sentence.toUpperCase();
    const sentenceArray = sentence.split('');
    console.log(sentenceArray);
    const reverseSentence = sentenceArray.slice();
    reverseSentence.reverse();
    console.log(reverseSentence, sentenceArray);
    if (sentenceArray.toString() === reverseSentence.toString()) {
        return true;
    } else {
        return false;
    }
    //convert each letter of string to array
    //declare variable to hold reversed array
    //if array = reversed array
        //return true
    //else
        //false

};

// Do not edit below this line
module.exports = palindromes;
