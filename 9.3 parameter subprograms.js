%function foo() {
%	var a;
%	
%	function bar() {
%		console.log(x)
%	}
%	
%	function baz() {
%		var a;
%		a = 2;
%		quuz(bar);
%	}
%	
%	function qux(funcName) {
%		var a;
%		a = 3;
%		funcName();
%	}
%	
%	function quuz() {
%		var a;
%		a = 2;
%	}
%	
%	a = 1;
%	baz();
%}
%