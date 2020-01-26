class Bird {
	public String fly() {
		return "*flap flap*";
	}
}

class Parrot extends Bird {
	public String fly() {
		return "*flap flap* hello there";
	}
}

class Polymorphism {
	public static void main(Stirng[] args) {
		fly(new Parrot()); // returns *flap flap* hello there
		fly(new Bird()); // returns *flap flap*
	}
}
	
static void fly(Bird bird) {
	System.out.println(bird.fly());
}
