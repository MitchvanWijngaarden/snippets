function tailRecursion(foo, bar = 0) {
	if(foo === 0) {
		return bar;
	} else {
		return tailRecursion(foo -1, foo + bar);
}

alert(tailRecursion(5)); //returns 15
