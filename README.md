# Typescript training [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-ojpbsi)

## 1. Introduction
### [1.1 Typescript syntax](./examples/1.1%20Typescript%20syntax.ts)
- Syntax wise, Typescript y just a superset of Javascript, so the syntax would be Javascript + Types.

## 2. Typescript concepts (with examples)

### [2.1 Relationship between Javascript and Typescript](./examples/2.1.%20Relationship%20between%20JS%20and%20TS.ts)
- Typescript is compiled to Javascript
- It is a superset of Javascript
- Typescript is configurable

### [2.2 What is the goal of Typescript](./examples/2.2.%20What%20is%20the%20goal%20of%20Typescript.ts)
- Spot runtime bugs without running the code
- Improve readability

### [2.3 Type of types :)](./examples/2.3.%20Type%20of%20types.ts)
- Brief introduction about different types (number, string, array, object, Record,), not too deep, since this is the part you can find easily looking . I prefer to focus in more hidden concepts.
- Types are sets of possible values, you can join/intersect them.

### [2.4 Type declaration vs type assertion](./examples/2.4.%20Declarations%20vs%20Assertions.ts)
- Ways to cast a type. This could be dangerous, since we are forcing a type.
- Typescript understand whay type are you using, for example, using a conditional.

### [2.5 The "any" type](./examples/2.5.%20Any%20type.ts)
- This is a way to disable the type checker. So, be careful.

### [2.6 Types checking vs output](./examples/2.6.%20Type%20checking%20vs%20output.ts)
- You can obtain ouptput even with errors. Typescript errors are most like a warning. Most cases if you ignore them, you could get runtime errors.
- All types and Typescript code will be removed, so there is no performance cost.
- Type space and value space

### [2.7 How to check if a variable matches a type?](./examples/2.7.%20How%20to%20check%20if%20a%20variable%20matches%20a%20type%3F.ts)
- This is a common question, but it is not possible, since information about types is removed, we can't
- Classes creates both (value and type)
- Custom properties

### [2.8 Type guards and the "unknown" type](./examples/2.8%20Type%20guards%20and%20the%20%22unknown%22%20type.ts)
- This is the last way, as explained, since Typescript understand, using conditionals, that the type is different.
- "Unknown" type is the opposite of any, you don't know the properties, so it will fail for everything, so you have to make sure it responds to other types.
- `typeof` word, `Array.isArray()`, `key in object`, length.
- Functions with `X is Type`.
- `Zod` library to parse types.

### [2.9 Duck typing and structural typing](./examples/2.9%20Duck%20typing%20and%20structural%20typing.ts)

- Javascript and Typescript are duck typed (show examples), so typescript compares the structure to know if it is valid or not.
- Example with `Object.keys` iterating all keys.
- Types are open, not "sealed", so for object types, any additional property is also valid. `Zod` library can be used for this also.

### [2.10 Differences between type and interface](./examples/2.10%20Differences%20between%20type%20and%20interface.ts)
- Main differences (they are very similar)
- You can extend interfaces or re-declare them to add properties

### [2.11 Complex type examples: mapped types and template literal types](./examples/2.11%20Complex%20types.ts)

- Typescript provides more complex types, those are probably the most commons.
- Examples of mapped types
- Example using template literal types to show the relationship between types