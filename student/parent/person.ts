export class Person {
    // Properties
    private firstName: string
    private lastName: string
    private age: number

    // constructors
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // method 
    getFullName() {
        return `The student is ${this.firstName + this.lastName} have ${this.age}`
    }
}