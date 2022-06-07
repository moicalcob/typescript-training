import { z } from 'zod';

function checkWrongType() {
  type HTTPResponse = {
    status_code: number;
  }
  // JSON.parse() returns any type, so we can assign it to a variable of the desired type
  const parsedJSON: HTTPResponse = JSON.parse('{"status":"200","body":{"id":"1","name":"John Doe","email":"jhondoe@gmail.com"}}')

  console.log(`I assume that the parsedJSON is a HTTPResponse so the status_code is ${parsedJSON.status_code}`);
}

function unknownType() {
  const parsedJSON: unknown = JSON.parse("false")

  // const isValid: boolean = parsedJSON; // 🔴 Error

  if (typeof parsedJSON !== "boolean") {
    console.log("parsedJSON is not boolean");
    return
  }

  const isValid2: boolean = parsedJSON;
  console.log(`parsedJSON is boolean and isValid2 is ${isValid2}`);

  const parsedJSON2: unknown = JSON.parse("[1,2,3]");

  // const sum = parsedJSON2.reduce((acc, curr) => {
  //   return acc + curr;
  // }) // 🔴 Error

  if (!Array.isArray(parsedJSON2)) {
    console.log("parsedJSON2 is not an array");
    return
  }

  const sum = parsedJSON2.reduce((acc, curr) => {
    return acc + curr;
  })
  console.log(`parsedJSON2 sum is ${sum}`);
}

type HTTPResponse = {
  status: number;
  body: {
    id: string;
    name: string;
    email: string;
  }
}

// Type guard
function isHttpResponse(parsedJSON: any): parsedJSON is HTTPResponse {
  return typeof parsedJSON === "object" &&
    "status" in parsedJSON &&
    "body" in parsedJSON &&
    typeof parsedJSON.body === 'object' &&
    "id" in parsedJSON.body &&
    "name" in parsedJSON.body &&
    "email" in parsedJSON.body;
}

function usingTypeGuards() {
  const parsedJSON: unknown = JSON.parse('{"status":"200","body":{"id":"1","name":"John Doe","email":"jhon@gmail.com"}}')

  if (!isHttpResponse(parsedJSON)) {
    console.log("parsedJSON is not a HTTPResponse");
    return
  }

  console.log(`parsedJSON is a HTTPResponse so the status_code is ${parsedJSON.status} and the body is: 
    {
      id: ${parsedJSON.body.id},
      name: ${parsedJSON.body.name},
      email: ${parsedJSON.body.email}
    }`);
}

// Zod example

function zodExample() {
  const HttpResponse = z.object({
    status: z.number(),
    body: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string()
    })
  });

  HttpResponse.parse(JSON.parse('{"status":200,"body":{"id":"1","name":"John Doe","email":"jhondoe@gmail.com"}}')); // ✅ OK
  HttpResponse.parse(JSON.parse('{"status":200,"body":{"name":"John Doe","email":"jhondoe@gmail.com"}}')); // 🔴 Error

  // extract the inferred type
  type HttpResponse = z.infer<typeof HttpResponse>;
}

export function typeGuardsAndUnknownType() {
  // checkWrongType();

  // unknownType();

  // usingTypeGuards();

  // zodExample();
}