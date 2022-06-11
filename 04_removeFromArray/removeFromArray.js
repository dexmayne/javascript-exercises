const removeFromArray = (userArray, ...toRemove) => 
	userArray.filter(e => !toRemove.includes(e));

// Do not edit below this line
module.exports = removeFromArray;
