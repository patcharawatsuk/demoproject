function Circle(radius) {
    this.radius = radius;
    let innerfunction = function() {
        console.log('call inner function');
    }
    this.draw = function() {
        innerfunction();
        console.log("draw circle with radius : " + radius);
    }
}

let circle = new Circle(10);
circle.draw();

