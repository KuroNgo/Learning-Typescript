import { Student } from "./child/student";
import { Teacher } from "./child/teacher";

class Main {
    main() {
        this.teacher()
        this.student()
    }

    teacher() {
        const teacher: Teacher = new Teacher("Ngô", "Hoài Phong", 10, 1, "Math")
        teacher.teach()
        teacher.getFullName()
    }

    student() {
        const student: Student = new Student("Kuro", "Kaze", 10, 1, ["math", "physical"])
        student.enroll("math")
        student.getFullName()
        student.showStudent()
    }
}

const mainInstance = new Main();
mainInstance.main();