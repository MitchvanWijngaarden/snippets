class Bird {
	 public static void fly() {
		System.out.println("*flap flap*");
	}
}

class Parrot extends Bird {
	public static void fly() {
		System.out.println("*flap flap* hello");
	}
}

class Main {
	public static void main(Stirng[] args) {
		Bird b1 = new Bird();
		Bird b2 = new Parrot();
		
		b1.fly(); // returns *flap flap*
		b2.fly(); // returns *flap flap*
	}
}
