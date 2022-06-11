function Circle(radius) {
    this.radius = radius;
    let innerfunction = function() {
        console.log('call inner function');
    }
    this.draw = function() {
        innerfunction();
        console.log("draw circle with radius : " + radius);
    }

    let locationkeep = { x: 0, y: 0};
    Object.defineProperty(this, 'location', {
        get: function() {
            return locationkeep;
        },
        set: function(value) {
            if(!value.x || !value.y) {
                throw new Error('Invalid location.');
            }
            locationkeep = value;
        }
    })
}

let circle = new Circle(10);
circle.draw();
console.log(circle.location);
circle.location = {x:1, y:1};
console.log(circle.location);

