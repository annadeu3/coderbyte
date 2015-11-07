function FirstReverse(str) {
	var newStr = str.split("");

	for(var i = 0; i < newStr.length; i++) {
		return newStr.reverse("").join("");
	}
};
console.log(FirstReverse("Coderbyte is cool"));