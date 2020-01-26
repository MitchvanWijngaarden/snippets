function Car(name, color, year) {
	this.name =  name;
	this.color =  color;
	this.year = year;
}

var yaris = new Car('Toyota Yaris', 'Gold', 1998);
yaris.color; //Returns 'Gold'.
