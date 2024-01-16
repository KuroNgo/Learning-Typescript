import { Person } from "../parent/person";

export class Teacher extends Person {
    constructor(
        fristName: string,
        lastName: string,
        age: number,
        public teacherID: number,

        // chuyên môn 
        public specialization: string,
    ) {
        super(fristName, lastName, age)
    }

    teach(): void {
        console.log(`"The teacher  ${this.teacherID} and ${this.specialization} is teaching a class`)
    }
}
