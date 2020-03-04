names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = [...names]
    }

    startWith(letter){
        return new Students(this.names.filter(name => name.startsWith(letter)))
    }

    sort() {
        return new Students([...this.names].sort())
    }

    get() {
        return this.names
    }

    getFirst(n) {
        return new Students(this.names.slice(0, n))
    }

    toString() {
        return this.names.join(', ')
    }
}

students = new Students(names);
console.log(students.get().toString());
console.log(students.sort().toString());
console.log(names)
console.log(students.get());
console.log(students.startWith('P').toString());
console.log(students.startWith('M').sort().toString());
console.log(students.sort().getFirst(4).toString());
console.log(students.startWith('M').sort().getFirst(2).toString());
console.log(students.get());