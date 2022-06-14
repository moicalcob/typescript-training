
const myName: string = 'Cristo'


type Person = {
  name: string,
  age: number,
  height?: number
}
const me: Person = { name: myName, age: 28 }


type HumanWorker = Person & {
  occupation: string
}
const plumber: HumanWorker = { name: 'Mario', age: 99, height: 150, occupation: 'Plumber' }


const list: HumanWorker[] = [plumber]


function getAge(person: Person): number {
  return person.age
}
