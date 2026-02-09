export function greet(name: string): string {
  return `Hello, ${name} from Bun ${Bun.version}`;
}

if (import.meta.main) {
  console.log(greet('world'));
}
