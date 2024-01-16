import { Animal } from "../parent/animal";

export class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public speak(): void {
    console.log("Meow!");
  }
}



