// customLibrary.js
export function multiply(a, b) {
	return a * b;
}
	
// main.js
import {multiply} from 'customLibrary'
	
alert(multiply(5, 10));// returns 50
