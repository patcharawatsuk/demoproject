function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw circle with radius : " + radius);
    }
}

const circle = new Circle(10);

//loop
for (let key in circle) {
    console.log(key, circle[key]);
}

console.log(Object.values(circle));

//check properties existing
if('radius' in circle){
    console.log('have radius');
}

if('draw' in circle){
    console.log('draw');
}