export function declaration_vs_assertion(): void {
  const a = JSON.parse('1') as number;

  console.log(typeof a);
}
