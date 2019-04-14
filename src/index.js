import sieve from './sieve';
import configs from './configs';
import applyDragging from './dragging';
import primeList from './primeList';
import drawLegend from './drawLegend';
import './styles.scss';

const NUMBER_COUNT = 10000;
const HALF = 0.5;
const DOUBLE = 2;
const LINE_WIDTH = 20;
const CIRCLE_WIDTH = 2;
const primes = sieve(NUMBER_COUNT);

const canvasEl = document.querySelector('.lines');
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

      ctx.beginPath();
      ctx.arc(previousPosition.x, previousPosition.y, CIRCLE_WIDTH, 0, DOUBLE * Math.PI);
      ctx.fill();
    }
  }
}

function executeApp() {
  canvasWidth = canvasEl.width = window.innerWidth;
  canvasHeight = canvasEl.height = window.innerHeight;
  ctx.translate(translateX, translateY);
  ctx.font = '14px Consolas';

  applyConfig('1');
  drawLines();
}

function setTranslate(newTranslateX, newTranslateY) {
  translateX = newTranslateX;
  translateY = newTranslateY;

  executeApp();
}

primeList(NUMBER_COUNT, primes);
drawLegend(LINE_WIDTH);
applyDragging(canvasEl, ctx, setTranslate);
executeApp();

window.addEventListener('resize', executeApp);
