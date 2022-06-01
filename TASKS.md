# Typescript (~1 hour training, focused on most important concepts, this can be extended to another training)

## 1. Introduction
### 1.1 Typescript syntax
- Syntax wise, Typescript y just a superset of Javascript, so the syntax would be Javascript + Types.

### 1.2 Quiz with 5-10 questions about the concepts (without correct answers)
- All of us has knowleadge about Javascript, so the goal of the quiz would be to spot some contraintuitive concepts, and after the training, repeat the quiz and be able to answer all of them correctly.

## 2. Typescript concepts (with examples)

## Relationship between Javascript and Typescript
- Typescript is compiled to Javascript
- It is a superset of Javascript
- Typescript is configurable

## What is the goal of Typescript
- Spot runtime bugs without running the code
- Improve readability

## Type of types :)
- Brief introduction about different types (number, string, array, object, Record,), not too deep, since this is the part you can find easily looking . I prefer to focus in more hidden concepts.
- Types are sets of possible values, you can join/intersect them.

## Type declaration vs type assertion
- Ways to cast a type. This could be dangerous, since we are forcing a type.
- Typescript understand whay type are you using, for example, using a conditional.

## The "any" type (Moisés)
- This is a way to disable the type checker. So, be careful.

## Types checking vs output (Moisés)
- You can obtain ouptput even with errors. Typescript errors are most like a warning. Most cases if you ignore them, you could get runtime errors.
- All types and Typescript code will be removed, so there is no performance cost.
- Type space and value space

## How to check if a variable matches a type?
- This is a common question, but it is not possible, since information about types is removed, we can't
- Classes creates both (value and type)
- Custom properties

## Type guards and the "unknown" type
- This is the last way, as explained, since Typescript understand, using conditionals, that the type is different.
- "Unknown" type is the opposite of any, you don't know the properties, so it will fail for everything, so you have to make sure it responds to other types.
- `typeof` word, `Array.isArray()`, `key in object`, length.
- Functions with `X is Type`.
- `Zod` library to parse types.

## Duck typing and structural typing

- Javascript and Typescript are duck typed (show examples), so typescript compares the structure to know if it is valid or not.
- Example with `Object.keys` iterating all keys.
- Types are open, not "sealed", so for object types, any additional property is also valid. `Zod` library can be used for this also.

## Differences between type and interface
- Main differences (they are very similar)
- You can extend interfaces or re-declare them to add properties

## Complex type examples: mapped types and template literal types

- Typescript provides more complex types, those are probably the most commons.
- Examples of mapped types
- Example using template literal types to show the relationship between types

## 3. Repeat the quiz

## 4. Resources

### Typescript + IDE capabilities
### Links (documentation + excercises + summary + playground)