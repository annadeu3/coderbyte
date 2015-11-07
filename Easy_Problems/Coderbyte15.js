function Palindrome(str) {
	var newStr = str.split(" ").join("").split("");
	for (var i = 0; i < newStr.length; i++) {
		if(newStr.join("") === newStr.reverse().join("")) {
			return true;
		} 
		else {
			return false;
		}
	}
};
console.log(Palindrome("deu"));