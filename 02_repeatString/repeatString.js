const repeatString = function(wordToRepeat, numberOfTimes) {
    let newWord = "";
    if (numberOfTimes > 0) {
        for (let i = 0; i < numberOfTimes; i++) {
            newWord += wordToRepeat;
        }
    } else if (numberOfTimes < 0) {
        newWord = "ERROR";
    }
    return newWord;
}

// Do not edit below this line
module.exports = repeatString;
