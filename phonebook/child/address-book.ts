import { Contact } from "../parent/contact";

export class AddressBook extends Contact {
    constructor(
        name: string,
        phone: string,
        email: string,
        public object: Contact[] = []
    ) {
        super(name, phone, email)
    }

    // Thêm một đối tượng vào danh bạ
    addContact(contact: Contact): void {
        this.object.push(contact)
    }

    // Trả về danh sách tất cả các đối tượng trong danh bạ
    getContact(): Contact[] {
        return this.object
    }

    getContactByName(name: string): Contact | undefined {
        return this.object.find(contact => contact.name === name)
    }
}