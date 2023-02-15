const removeFromArray = function(userArray, ...toRemove) {
    for (let i = userArray.length - 1; i >= 0; i--) {
        for (let y of toRemove) {
            if (userArray[i] === y) {
                userArray.splice(i, 1);
                console.log(i, y);
            }
        }
    }   
    return userArray;
}

// Do not edit below this line
module.exports = removeFromArray;
