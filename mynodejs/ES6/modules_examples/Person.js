export default class Person {
    constructor(name){
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}