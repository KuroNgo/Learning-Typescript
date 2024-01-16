export class Animal {
    // Properties
    private name: string;
    private age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    public makeSound(): void {
        console.log("I am an animal!");
    }
}

