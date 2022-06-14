
let myAny: any = 50

myAny.myMagicMethod()

// ---------------------------------------

const myJSON1 = '[1, 2, 3]'
let result1 = JSON.parse(myJSON1)

const myJSON2 = '{ "a": { "b": 42 } }'
let result2 = JSON.parse(myJSON2)

function getLength(myArray: number[]): number {
  return myArray.length
}

console.log(getLength(result1)) // 3
console.log(getLength(result2)) // undefined
