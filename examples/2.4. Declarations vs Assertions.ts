type Animal = {
  name: string
}

const myPet: Animal = { name: 'Bob' } // Declaration

const yourPet = { name: 'Tom' } as Animal // Assertion
const anotherPet = <Animal>{ name: 'Jerry' } // Assertion (not recommended syntax)

// ----------------------------

const notAPet: Animal = {}
const notAPetWithoutErrors = {} as Animal

// ----------------------------

try {
  throw new Error ('My Error')
  // throw 'My Custom Error'
} catch (error) {
  console.log(error.stack)

  const castedError = error as Error
  console.log(castedError.stack)
}
