class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    print(){
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    printInitials(){
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`
    }
}

person = new Person("Jan", "Nowak")
me = new Person("Marcin", "Xyz")

console.log(person.print())
console.log(person.printInitials())
console.log(me.print())
console.log(me.printInitials())

