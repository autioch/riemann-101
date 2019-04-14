import configs from './configs';

export default function primeList(numberCount, primes) {
  const logEl = document.querySelector('.log');

  for (let num = 1; num < numberCount; num++) {
    const numText = num.toString();

    if (!primes[numText]) {
      continue;
    }

    const logItemEl = document.createElement('div');
    const lastCipher = numText[numText.length - 1];
    const config = configs[lastCipher];

    logItemEl.style.color = config.color;
    logItemEl.textContent = numText;
    logEl.appendChild(logItemEl);
  }
}
