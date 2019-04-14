import configs from './configs';

export default function primeList(numberCount, primes, firstNumber) {
  const logEl = document.querySelector('.log');

  for (let num = firstNumber; num < numberCount; num++) {
    const numText = num.toString();

    if (!primes[numText]) {
      continue;
    }

    const logItemEl = document.createElement('div');
    const lastCipher = numText[numText.length - 1];
    const config = configs[lastCipher];

    if (config) {
      logItemEl.style.color = config.color;
    } else {
      logItemEl.style.color = '#666';
    }

    logItemEl.textContent = numText;
    logEl.appendChild(logItemEl);
  }
}
