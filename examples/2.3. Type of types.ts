
let isThisAGoodTraining: boolean = true

let pi: number = 3.14

let today: string = 'Tuesday'

let listOfNumbers: number[] = [1, 2, 3, 4, 5]

enum Color { Red, Green, Blue }
let myColor: Color = Color.Green

let myCoordinate: { x: number, y: number}

// ------------------------

type Person = {
  name: string,
  age: number,
  height?: number
}

const me: Person = { name: myName, age: 28 }

// ------------------------

type HumanWorker = Person & {
  occupation: string | boolean
}

const plumber: HumanWorker = { name: 'Mario', age: 99, height: 150, occupation: 'Plumber' }

// ------------------------

function getAge(person: Person): number {
  return person.age
}
