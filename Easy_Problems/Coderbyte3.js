function LongestWord(sen) {
	var array = sen.split(" ");

	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].replace(/\W/g, "");
	}
	array = array.sort (function(a, b) {
		return b.length - a.length;});
	return array[0];
};
console.log(LongestWord("this is Sparta"))