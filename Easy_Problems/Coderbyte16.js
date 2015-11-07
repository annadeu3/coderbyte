function ArithGeo(arr) {
	var first = arr[0];
	var second = arr[1];
	var third = arr[2];

	if ((second - first) === (third - second)) {
		return "Arithmetic";
	} else if ((second/first) === (third/second)) {
		return "Geometric";
	} else {
		return -1;
	}
};
console.log(ArithGeo(2,4,16,24));