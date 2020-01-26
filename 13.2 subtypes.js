class Bird {
	fly() {
		return "*flap flap*";
	}
}
	
class Parrot extends Bird {

}
	
class Chicken extends Bird {
	fly() {
		throw "I can't fly..";
	}
}

alert(new Parrot().fly(); // returns flap flap
alert(new Chicken().fly(); // error "I can't fly.."
