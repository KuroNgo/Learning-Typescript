import { Person } from "../parent/person";

export class Student extends Person {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        public studentID: number,
        public cources: string[] = []

    ) {
        super(firstName, lastName, age);
    }

    enroll(cources: string): void {
        this.cources.push(cources)
        console.log(`${this.getFullName()} enrolled in ${cources}`)
    }

    showStudent(): void {
        console.log(`${this.getFullName()} have cources in ${this.cources}`)
    }
}