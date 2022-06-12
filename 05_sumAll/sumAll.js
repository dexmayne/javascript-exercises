const sumAll = function(num1, num2) {

    if(isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || typeof num1 === 'string' || typeof num2 === 'string'){
        return "ERROR";
    }
    
     let min = Math.min(num1, num2);
     let max = Math.max(num1, num2);
     let finalSum = 0;
      
      for(let i = min; i <= max; i++){
          finalSum += i;
      } 
      return finalSum;
    }
    
// Do not edit below this line
module.exports = sumAll;
