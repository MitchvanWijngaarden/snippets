%let foo = 1;
%
%{
%	let foo = 2;
%	alert(foo);
%}
%
%alert(foo); // returns 1
%