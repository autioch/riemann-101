import sieve from './sieve';
import './styles.scss';

const count = 900;
const lineWidth = 10;
const half = 0.5;
const primes = sieve(count);

const logEl = document.querySelector('div');
const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');

let currentDirector;
let currentColor;
let currentX = 1800; // eslint-disable-line no-magic-numbers
let currentY = 800; // eslint-disable-line no-magic-numbers

function resizeCanvas() {
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
}

const configs = {
  '1': {
    director() {
      currentY = currentY - lineWidth;
    },
    color: '#f00',
    labelHorizontal: 'left',
    labelVertical: 'top'
  },
  '2': {
    director() {
      currentX = currentX + lineWidth;
      currentY = currentY - (lineWidth * half);
    },
    color: '#0ff',
    labelHorizontal: 'left',
    labelVertical: 'bottom'
  },
  '3': {
    director() {
      currentX = currentX + lineWidth;
      currentY = currentY + (lineWidth * half);
    },
    color: '#00f',
    labelHorizontal: 'left',
    labelVertical: 'bottom'
  },
  '5': {
    director() {
      currentY = currentY + lineWidth;
    },
    color: '#f0f',
    labelHorizontal: 'right',
    labelVertical: 'top'
  },
  '7': {
    director() {
      currentX = currentX - lineWidth;
      currentY = currentY + (lineWidth * half);
    },
    color: '#000',
    labelHorizontal: 'right',
    labelVertical: 'bottom'
  },
  '9': {
    director() {
      currentX = currentX - lineWidth;
      currentY = currentY - (lineWidth * half);
    },
    color: '#0f0',
    labelHorizontal: 'right',
    labelVertical: 'top'
  }
};

function applyConfig(config) {
  currentColor = config.color;
  currentDirector = config.director;
  ctx.strokeStyle = config.color;
  ctx.fillStyle = config.color;
  ctx.textAlign = config.labelHorizontal;
  ctx.textBaseline = config.labelVertical;
}
resizeCanvas();

applyConfig(configs['1']);

for (let num = 1; num < count; num++) {
  const numText = num.toString();

  const isPrime = primes[numText];

  if (isPrime) {
    const lastCipher = numText[numText.length - 1];

    applyConfig(configs[lastCipher]);
  }
  const previousX = currentX;
  const previousY = currentY;

  currentDirector();
  ctx.beginPath();
  ctx.moveTo(previousX, previousY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();

  const numberX = Math.floor((currentX + previousX) * half);
  const numberY = Math.floor((currentY + previousY) * half);

  if (isPrime) {
    const logItemEl = document.createElement('div');

    logItemEl.style.color = currentColor;
    logItemEl.textContent = numText;
    logEl.appendChild(logItemEl);

    ctx.fillText(numText, numberX, numberY);
  }
}
