import sieve from './sieve';
import configs from './configs';
import applyDragging from './dragging';
import primeList from './primeList';
import _ from 'lodash';
import './styles.scss';

const NUMBER_COUNT = 900;
const HALF = 0.5;
const LINE_WIDTH = 20;
const primes = sieve(NUMBER_COUNT);

const canvasEl = document.querySelector('canvas');
const ctx = canvasEl.getContext('2d');

let canvasWidth = 0;
let canvasHeight = 0;
let translateX = 0;
let translateY = 0;
let currentDirector;

function applyConfig(numText) {
  const lastCipher = numText[numText.length - 1];
  const config = configs[lastCipher];

  currentDirector = config.director;
  ctx.strokeStyle = config.color;
  ctx.fillStyle = config.color;
  ctx.textAlign = config.labelHorizontal;
  ctx.textBaseline = config.labelVertical;
  ctx.setLineDash(config.dash);
}

function setTranslate(newTranslateX, newTranslateY) {
  translateX = newTranslateX;
  translateY = newTranslateY;

  executeApp();
}

function drawLines() {
  let currentPosition = {
    x: Math.floor(canvasWidth * HALF),
    y: Math.floor(canvasHeight * HALF)
  };

  for (let num = 1; num < NUMBER_COUNT; num++) {
    const numText = num.toString();
    const isPrime = primes[numText];
    const previousPosition = currentPosition;

    if (isPrime) {
      applyConfig(numText);
    }

    currentPosition = currentDirector(currentPosition, LINE_WIDTH);

    ctx.beginPath();
    ctx.moveTo(previousPosition.x, previousPosition.y);
    ctx.lineTo(currentPosition.x, currentPosition.y);
    ctx.stroke();

    if (isPrime) {
      const numberX = Math.floor((currentPosition.x + previousPosition.x) * HALF);
      const numberY = Math.floor((currentPosition.y + previousPosition.y) * HALF);

      ctx.fillText(numText, numberX, numberY);
    }
  }
}

function executeApp() {
  canvasWidth = canvasEl.width = window.innerWidth;
  canvasHeight = canvasEl.height = window.innerHeight;
  ctx.translate(translateX, translateY);
  ctx.font = '12px Consolas';

  applyConfig('1');
  drawLines();
}

primeList(NUMBER_COUNT, primes);
applyDragging(canvasEl, ctx, _.throttle(setTranslate, 1));
executeApp();

window.addEventListener('resize', executeApp);
