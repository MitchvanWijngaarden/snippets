%const foo = 1;
%
%{
%	const foo = 2;
%	alert(foo); // returns 2
%}
%
%alert(foo);
%