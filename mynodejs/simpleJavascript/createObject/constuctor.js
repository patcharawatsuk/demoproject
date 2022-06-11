function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw circle with raduis ' + this.radius);
    }
}

const another = new Circle(1);
another.draw();

//const another2 = Circle.call({}, 1);
//another2.draw();
