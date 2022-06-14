function mergingInterfaces() {
  interface Car {
    wheels: number,
    color: string,
  }

  interface Car {
    doors: number,
  }

  // const car: Car = {
  //   wheels: 4,
  //   color: 'red',
  // } ❌ Error

  const car: Car = {
    wheels: 4,
    color: 'red',
    doors: 4,
  }

  console.log(car)

  type Truck = {
    wheels: number,
    color: string,
  }

  // type Truck = {
  //   doors: number,
  // }
}

function playingWithTypes() {
  interface PartialPointX {
    x: number
  }

  interface PartialPointY {
    y: number
  }

  // primitive
  type Name = string

  // union
  type PartialPoint = PartialPointX | PartialPointY
  const partialPoint1 = {
    x: 1,
  }

  const partialPoing2 = {
    y: 2,
  }

  const partialPoint3: PartialPoint = {
    x: 1,
    y: 3
  }

  // tuple
  type Data = [number, string]
  const data: Data = [1, 'a']
  // const dat2: Data = ['1', 'a'] ❌ Error
}

function implementingTypeAndInterface() {
  interface Car {
    wheels: number,
    color: string,
  }

  type Truck = {
    wheels: number,
    color: string,
  }

  class SomeCar implements Car {
    wheels: number
    color: string
  }

  class SomeTruck implements Truck {
    wheels: number
    color: string
  }

  type PartialTruck = { wheels: number } | { color: number }

  // class SomePartialTruck implements PartialTruck {
  //   wheels: number
  // } ❌ Error
}

export function typeVsInterface() {
  mergingInterfaces()
  playingWithTypes()
  implementingTypeAndInterface()
}