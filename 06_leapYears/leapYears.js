const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }
    //if year is divisible by 4, AND not divisible by 100
        //return true
    //else if year is divisible by 100 AND 400
        //return true
    //else
        //return false
};

// Do not edit below this line
module.exports = leapYears;
