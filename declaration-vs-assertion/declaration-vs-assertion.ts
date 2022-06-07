export function declarationVsAssertion(): void {
  const a = JSON.parse('1') as number;

  console.log(typeof a);
}
