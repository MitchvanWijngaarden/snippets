%foo("foo") // returns Uncaught TypeError function not found.
%
%{
%	function foo(text) {
%		alert(text);
%	}
%	
%	foo("bar"); // returns "bar"
%}
%