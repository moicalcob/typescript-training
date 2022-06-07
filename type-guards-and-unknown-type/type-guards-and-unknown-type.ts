type HTTPResponse = {
  status_code: number;
}

const parsedJSON: HTTPResponse = JSON.parse('{"status":"200","body":{"id":"1","name":"John Doe","email":"jhondoe@gmail.com"}}')

function checkWrongType() {
  console.log(`I assume that the parsedJSON is a HTTPResponse so the status_code is ${parsedJSON.status_code}`);
}

export function typeGuardsAndUnknownType() {
  checkWrongType();
}