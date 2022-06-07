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

export function duckTypingAndStructuralTyping() {

  let ball: Ball = { diameter: 10 }
  let sphere: Sphere = { diameter: 20 }
  let tube: Tube = { diameter: 12, length: 3 }

  sphere = ball // ✅ OK
  ball = sphere // ✅ OK
  ball = tube // ✅ OK
  // tube = ball // 🔴 Error
}