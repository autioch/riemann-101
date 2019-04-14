/* eslint-disable no-magic-numbers */
import configs from './configs';

const FONT_SIZE = 16;
const HALF = 0.5;
const TEXT_OFFSET = Math.floor(FONT_SIZE * HALF);

const getOffset = (center, end) => {
  const diff = center - end;

  if (diff === 0) {
    return 0;
  }
  if (diff > 0) {
    return -TEXT_OFFSET;
  }

  return TEXT_OFFSET;
};

export default function drawLegend(lineWidth) { // eslint-disable-line max-statements
  const canvasEl = document.querySelector('.legend');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = (lineWidth + FONT_SIZE) * 2;
  canvasEl.height = (lineWidth + FONT_SIZE) * 2;

  const center = {
    x: lineWidth + FONT_SIZE,
    y: lineWidth + FONT_SIZE
  };

  Object.entries(configs).forEach(([key, config]) => {
    const lineEnd = config.director(center, lineWidth);

    ctx.strokeStyle = config.color;
    ctx.font = `${FONT_SIZE}px Consolas`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(lineEnd.x, lineEnd.y);
    ctx.stroke();

    const textOffsetX = getOffset(center.x, Math.round(lineEnd.x));
    const textOffsetY = getOffset(center.y, Math.round(lineEnd.y));

    ctx.fillText(key, lineEnd.x + textOffsetX, lineEnd.y + textOffsetY);
  });
}
