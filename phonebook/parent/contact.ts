export class Contact {
    // Properties
    name: string
    phone: string
    email: string

    // Constructor
    constructor(name: string, phone: string, email: string) {
        this.name = name
        this.phone = phone
        this.email = email
    }

    getInfo() {
        console.log(`This is a information of ${this.name} have ${this.phone} and ${this.email}`)
    }
}