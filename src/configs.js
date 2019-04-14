const HALF = 0.5;

const configs = {
  '1': { // UP
    director({ x, y }, lineWidth) {
      return {
        x,
        y: y - lineWidth
      };
    },
    color: '#f00',
    labelHorizontal: 'left',
    labelVertical: 'top',
    dash: [5, 5]
  },
  '5': { // DOWN
    director({ x, y }, lineWidth) {
      return {
        x,
        y: y + lineWidth
      };
    },
    color: '#f0f',
    labelHorizontal: 'right',
    labelVertical: 'top',
    dash: [0, 5, 5, 0]
  },
  '2': { // UP RIGHT
    director({ x, y }, lineWidth) {
      return {
        x: x + lineWidth,
        y: y - (lineWidth * HALF)
      };
    },
    color: '#0ff',
    labelHorizontal: 'left',
    labelVertical: 'bottom',
    dash: [5, 5]
  },
  '7': { // DOWN LEFT
    director({ x, y }, lineWidth) {
      return {
        x: x - lineWidth,
        y: y + (lineWidth * HALF)
      };
    },
    color: '#000',
    labelHorizontal: 'right',
    labelVertical: 'bottom',
    dash: [0, 5, 5, 0]
  },
  '3': { // DOWN RIGHT
    director({ x, y }, lineWidth) {
      return {
        x: x + lineWidth,
        y: y + (lineWidth * HALF)
      };
    },
    color: '#00f',
    labelHorizontal: 'left',
    labelVertical: 'bottom',
    dash: [5, 5]
  },
  '9': { // UP LEFT
    director({ x, y }, lineWidth) {
      return {
        x: x - lineWidth,
        y: y - (lineWidth * HALF)
      };
    },
    color: '#0f0',
    labelHorizontal: 'right',
    labelVertical: 'top',
    dash: [0, 5, 5, 0]
  }
};

export default configs;
