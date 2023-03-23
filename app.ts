interface Fellow {
  name: string;
  age: number;
}

class User {
  constructor(private readonly person: Fellow) {}

  public getFullName(): string {
    return `${this.person.name} Doe`;
  }

  public getAge(): number {
    return this.person.age;
  }
}

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const users: User[] = [
  new User({ name: "John", age: 30 }),
  new User({ name: "Jane", age: 25 }),
  new User({ name: "Bob", age: 40 }),
];

for (const user of users) {
  console.log(`${user.getFullName()} is ${user.getAge()} years old.`);
}

let x: number = 5;

console.log(`x is currently ${x}`);

x += 10;

console.log(`x is now ${x}`);

console.log(`The factorial of 5 is ${factorial(5)}`);

if (x > 15) {
  console.log(`x is greater than 15`);
} else {
  console.log(`x is less than or equal to 15`);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What is your name? `, (name: string) => {
  console.log(`Hello, ${name}! Nice to meet you.`);

  const randomNum: number = Math.floor(Math.random() * 100) + 1;
  console.log(`Your lucky number is ${randomNum}`);

  if (isPrime(randomNum)) {
    console.log(`Your lucky number is prime!`);
  } else {
    console.log(`Your lucky number is not prime.`);
  }

  console.log(`See you later!`);
  readline.close();
});
