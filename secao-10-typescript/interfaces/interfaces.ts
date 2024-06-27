interface Person {
    name: string
    age?: number
    [prop: string]: any

    salute(lastName: string): void
}
// interrogação indica que o atributo é opcional.
// colchetes indicam atributo com nome dinâmico.

function greet(person: Person) {
    console.log("Hi, ", person.name)
}

function changeName(person: Person) {
    person.name = 'Ana'
}

const person: Person = {
    name: "Augusto",
    age: 29,

    salute(lastName: string) {
        console.log(`My full name is ${this.name} ${lastName}`)
    }
}

greet(person)
changeName(person)
greet(person)
// greet({ name: 'Pedro', age: 25, xyz: true})
person.salute("Santos")


// Usando Classes
class Client implements Person {
    name: string = ""
    lastPurchase: Date = new Date()
    salute(lastName: string) {
        console.log(`My full name is ${this.name} ${lastName}`)
    }
}

const myClient = new Client()
myClient.name = "João"
greet(myClient)
myClient.salute("Silva")
console.log(myClient.lastPurchase)

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    // return Array(exp).fill(base).reduce((t, a) => t * a)
    // return Math.pow(2, 8)
    return base ** exp
}

console.log(potencia(2, 9))