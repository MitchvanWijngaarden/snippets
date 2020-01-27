union Number {
	int i;
	float f;
}

int main() {
	Number n;
	n.i = 2;
	cout $<<$ n.i; //prints 2
	n.f = 10;
	cout $<<$ n.f; //prints  10
	cout $<<$ n.i; //prints memory allocation of variable n; the int value is written over.
}
