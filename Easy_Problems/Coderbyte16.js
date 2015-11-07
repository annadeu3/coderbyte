function ArithGeo(arr) {
	var diff = arr[1] - arr[0];
	var divide = arr[1] / arr[0];

	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i + 1] - arr[i] === diff) {
			return "Arithmetic";
		} else if (arr[i + 1] / arr[i] === divide) {
			return "Geometric";
		} else {
			return -1;
		}
	}
};
console.log(ArithGeo[2,4,16,24]);