function AlphabetSoup(str) {
	var x = str.split("") 
	return x.sort().join("")
	
};
console.log(AlphabetSoup("coderbyte is cool"))
