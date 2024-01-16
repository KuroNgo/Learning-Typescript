import { Animal } from "../parent/animal";

export class Dog extends Animal {
  constructor(name: string, age: number) {
    // super() là gọi đến constructor của lớp cha
    // super() phải được gọi trước khi có thể sử dụng this
    super(name, age);
  }

  public speak(): void {
    console.log("Woof!");
  }
}

