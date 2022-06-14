interface Ball {
  diameter: number
}

interface Sphere {
  diameter: number
}

interface Tube {
  diameter: number
  length: number
}

// function wrongPrint(tube: Tube) {
//   for (const property in tube) {
//     console.log(`${property}: ${tube[property]}`);
//   }
// }

function print(tube: Tube) {
  Object.entries(tube)
    .forEach(([key, value]) => console.log(`${key}: ${value}`))
}

export function duckTypingAndStructuralTyping() {

  let ball: Ball = { diameter: 10 }
  let sphere: Sphere = { diameter: 20 }
  let tube: Tube = { diameter: 12, length: 3 }

  sphere = ball // ✅ OK
  ball = sphere // ✅ OK
  ball = tube // ✅ OK

  let ball2: Ball = { diameter: 100 }
  let tube2: Tube = { diameter: 12, length: 3 }

  // tube2 = ball2; ❌ Error

  const greatTube = {
    diameter: 12,
    length: 3,
    great: true
  }
  console.log('This is a normal tube:')
  print(tube)

  console.log('This is a great tube:')
  print(greatTube)
}
