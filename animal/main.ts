import { Cat } from "./child/cat";
import { Dog } from "./child/dog";

class Main {
    main() {
        console.log("Đây là chó: ");
        this.dog();
        console.log("Đây là mèo: ");
        this.cat();
    }
    
    cat() {
        const cat: Cat = new Cat("Mèo", 4);
        cat.makeSound();
        cat.speak();
    }

    dog() {
        const dog: Dog = new Dog("Chó", 4);
        dog.makeSound();
        dog.speak();
    }
}

const mainInstance = new Main();
mainInstance.main();
