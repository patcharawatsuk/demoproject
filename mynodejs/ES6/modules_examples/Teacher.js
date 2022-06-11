import Person from "./Person.js";

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log(`${this.name} is teaching`);
    }
}