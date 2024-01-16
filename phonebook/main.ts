import { Contact } from "./parent/contact";

class Main {
    main() {
        this.addressBook()
    }

    addressBook() {
        const contact: Contact = new Contact("Phong", "0329245971", "hoaiphong01012002@gmail.com")
        contact.getInfo()
    }
}

const mainInstance = new Main
mainInstance.main()