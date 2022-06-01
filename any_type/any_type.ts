export function any_type() {
  let any;
  any = 'this is a string';
  console.log(`Value: ${any} Type: ${typeof any}`);
  any = true;
  console.log(`Value: ${any} Type: ${typeof any}`);
  any = 2;
  console.log(`Value: ${any} Type: ${typeof any}`);

  // Problems with any type?
  const object: Record<string, unknown> = {};

  object.string = 'true';
  object.boolean = true;
  object.number = 3;

  //console.log(object.string.includes('t'));
  //console.log(object.boolean.includes('t'));
}
