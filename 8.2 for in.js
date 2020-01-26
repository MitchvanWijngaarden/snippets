for(property of object) {
	. . . // code block will run until iterable objects are iterated over
}

var arr = [1, 3, 9];
for (var i of arr) {
	console.log(i); // prints "1, 3, 9"
}

arr.foo = 'Yaris';
for (var i of arr) {
	console.log(i); // prints "1, 3, 9", arr.foo is ommitted.
}
