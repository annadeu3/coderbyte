function wordCount(str) {
	var numWords = 0;
	var words = str.split(" ");

	for (var i = 0; i < words.length; i++) {
	numWords += 1;
	}
	return numWords;
};
console.log(wordCount("this is sparta"));