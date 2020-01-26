%function foo() {
%	alert("foo");
%}
%	
%var obj = {
%	bar() {
%		alert("bar");
%	 }
%}
%	
%window["foo"]() // alerts 'foo'
%obj["bar"]() // alerts 'bar'
%