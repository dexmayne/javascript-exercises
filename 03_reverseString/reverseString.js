const reverseString = function(arr) {
   
    let x = arr.split("");
    let newString = x.reverse().join('');
    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
