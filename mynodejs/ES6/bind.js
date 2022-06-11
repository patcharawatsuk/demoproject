const person = {
    name : "Donut",
    walk() {
        console.log(this);
    }
};

person.walk();
// bind make walk() to reference to person object not a window object
const walk = person.walk.bind(person);
walk();
