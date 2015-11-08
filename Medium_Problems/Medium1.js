/*Using the JavaScript language, have the function PrimeTime(num) take the num parameter 
being passed and return the string true if the parameter is a prime number, otherwise return 
the string false. The range will be between 1 and 2^16. 
Use the Parameter Testing feature in the box below to test your code with different arguments.*/

function PrimeTime(num) {
	for ( var i = 2; i < num; i++ ) {
		if ( num % i == 0 )
			return false;
	}
	return true;
}
console.log(PrimeTime(19)); 