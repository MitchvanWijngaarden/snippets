func foo() {
	goto A // Jumps forward in file
	A: {
		. . . // Label A codeblock will get executed when goto A called.
	}
}

func bar() {
	B: {
		. . . // Label B codeblock will get executed when goto B called.
	}
	goto B // Jumps backwards in file
}
