// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

const hasDivisionRest = (dividend, divisor) => dividend % divisor !== 0;

const STARTING_PRIME = 2;

export default function sieve(maxNumber) {
  let numbers = new Array(maxNumber).fill(0).map((__, index) => index + STARTING_PRIME);

  const primes = [];

  while (numbers.length > 0) {
    const currentPrime = numbers.shift();

    primes.push(currentPrime);

    numbers = numbers.filter((num) => hasDivisionRest(num, currentPrime));
  }

  const dict = primes.reduce((obj, prime) => Object.assign(obj, {
    [prime.toString()]: true
  }), {});

  return dict;
}
