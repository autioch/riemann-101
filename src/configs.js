/* eslint-disable no-magic-numbers */
const THIRTY_DEGREES = Math.PI / 6;

const arc = (center, radius, parts) => ({
  x: center.x + (radius * Math.cos(THIRTY_DEGREES * parts)),
  y: center.y + (radius * Math.sin(THIRTY_DEGREES * parts))
});

const configs = {
  '1': {
    director: (center, lineWidth) => arc(center, lineWidth, 9),
    color: '#f00',
    labelHorizontal: 'left',
    labelVertical: 'top',
    dash: [5, 5]
  },

  // '5': { // DOWN
  //   director: (center, lineWidth) => arc(center, lineWidth, 3),
  //   color: '#f0f',
  //   labelHorizontal: 'right',
  //   labelVertical: 'top',
  //   dash: [0, 5, 5, 0]
  // },
  // '2': { // UP RIGHT
  //   director: (center, lineWidth) => arc(center, lineWidth, 11),
  //   color: '#0ff',
  //   labelHorizontal: 'left',
  //   labelVertical: 'bottom',
  //   dash: [5, 5]
  // },
  '3': { // DOWN RIGHT
    director: (center, lineWidth) => arc(center, lineWidth, 0),
    color: '#00f',
    labelHorizontal: 'left',
    labelVertical: 'bottom',
    dash: [5, 5]
  },
  '7': {
    director: (center, lineWidth) => arc(center, lineWidth, 3),
    color: '#000',
    labelHorizontal: 'right',
    labelVertical: 'bottom',
    dash: [0, 5, 5, 0]
  },
  '9': {
    director: (center, lineWidth) => arc(center, lineWidth, 6),
    color: '#0b0',
    labelHorizontal: 'right',
    labelVertical: 'top',
    dash: [0, 5, 5, 0]
  }
};

export default configs;
