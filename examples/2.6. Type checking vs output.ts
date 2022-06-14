
let x = 'hello'
x = 1234

// tsc file.ts

var x = 'hello';
x = 1234;


// -----------------------------

// Before compilation (TS)
const yourName: string = 'Moises'

function greet(who: string) {
  console.log('Hello', who)
}

// After compilation (JS)
const yourName = 'Moises'

function greet(who) {
  console.log('Hello', who)
}

// -----------------------------

interface Square {
  width: number
}

interface Rectangle extends Square {
  height: number
}

type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

// -----------------------------

function asNumber(val: number | string): number {
  return val as number
}

function asNumber(val) {
  return val
}
