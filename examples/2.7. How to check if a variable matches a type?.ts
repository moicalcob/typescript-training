type Animal = {
  name: string;
  age: number;
  isAlive: boolean;
}

class Person {
  surname: string;
  name: string;
  age: number;

  constructor(surname: string, name: string, age: number) {
    this.surname = surname;
    this.name = name;
    this.age = age;
  }

  showAge(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

export function checkVariableMatchesType() {
  const animal1: Animal = {
    age: 1,
    isAlive: true,
    name: 'cat'
  }

  console.log('Type: ', typeof animal1);

  const person1 = new Person('Smith', 'John', 30); // Using the class' value space
  const person2: Person = { // Using the class' type space
    age: 20,
    name: 'Andrew',
    surname: 'Smith',
    showAge: function () {
      console.log(`${this.name} is ${this.age} years old but I'm executed from the type space!`);
    }
  }

  person1.showAge();
  person2.showAge();
}