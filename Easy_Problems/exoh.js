function ExOh(str) {
	var xo = ["x", "o"];
	var newStr = str.split("");
	var numX = 0;
	var numO = 0;
    
    for (var j = 0; j < newStr.length; j++) {
    	if (newStr[j] === xo[0]) {
        	numX += 1;
        } else if (newStr[j] ===xo[1]) {
        	numO += 1;
        }
    }
    
   	if (numX === numO) {
    	return true;
    } else {
    	return false;
    } 
};
console.log(ExOh("xxxxoooo"));