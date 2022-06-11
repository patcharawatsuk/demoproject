function Circle(radius) {
    return {
        radius,
        draw : function() {
            console.log('create circle with radius ' + this.radius);
        }
    }
}

const circle = Circle(1);
circle.draw();
circle.location = 1;
//console.log(circle['location']); // or circle.location

/* Create Object */

circle.axis = {x:1, y:1};

//console.log('x: ' + circle['axis']['x']);
//console.log('x: ' + circle.axis.x);
console.log(circle);
delete circle['axis'];
console.log('remove axis');
console.log(circle);