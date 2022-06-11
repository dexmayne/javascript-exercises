const repeatString = (str, numRepeats) => {
 
	let finalString = '';

	if(numRepeats < 1){
  	return "ERROR";
    }
		for(let i = 0; i < numRepeats; i ++){
    	finalString += str;
    } 
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
