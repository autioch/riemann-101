/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/* eslint-disable no-magic-numbers */\nvar THIRTY_DEGREES = Math.PI / 6;\n\nvar arc = function arc(center, radius, parts) {\n  return {\n    x: center.x + radius * Math.cos(THIRTY_DEGREES * parts),\n    y: center.y + radius * Math.sin(THIRTY_DEGREES * parts)\n  };\n};\n\nvar configs = {\n  '1': {\n    director: function director(center, lineWidth) {\n      return arc(center, lineWidth, 9);\n    },\n    color: '#f00',\n    labelHorizontal: 'left',\n    labelVertical: 'top',\n    dash: [5, 5]\n  },\n\n  // '5': { // DOWN\n  //   director: (center, lineWidth) => arc(center, lineWidth, 3),\n  //   color: '#f0f',\n  //   labelHorizontal: 'right',\n  //   labelVertical: 'top',\n  //   dash: [0, 5, 5, 0]\n  // },\n  // '2': { // UP RIGHT\n  //   director: (center, lineWidth) => arc(center, lineWidth, 11),\n  //   color: '#0ff',\n  //   labelHorizontal: 'left',\n  //   labelVertical: 'bottom',\n  //   dash: [5, 5]\n  // },\n  '3': { // DOWN RIGHT\n    director: function director(center, lineWidth) {\n      return arc(center, lineWidth, 0);\n    },\n    color: '#00f',\n    labelHorizontal: 'left',\n    labelVertical: 'bottom',\n    dash: [5, 5]\n  },\n  '7': {\n    director: function director(center, lineWidth) {\n      return arc(center, lineWidth, 3);\n    },\n    color: '#000',\n    labelHorizontal: 'right',\n    labelVertical: 'bottom',\n    dash: [0, 5, 5, 0]\n  },\n  '9': {\n    director: function director(center, lineWidth) {\n      return arc(center, lineWidth, 6);\n    },\n    color: '#0b0',\n    labelHorizontal: 'right',\n    labelVertical: 'top',\n    dash: [0, 5, 5, 0]\n  }\n};\n\nexports.default = configs;\n\n//# sourceURL=webpack:///./src/configs.js?");

/***/ }),

/***/ "./src/dragging.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = applyDragging;\nfunction applyDragging(canvasEl, ctx, dragCallback) {\n  var startPos = void 0;\n  var currentX = 0;\n  var currentY = 0;\n  var storedX = 0;\n  var storedY = 0;\n\n  function updateDrag(ev) {\n    currentX = storedX + ev.pageX - startPos.x;\n    currentY = storedY + ev.pageY - startPos.y;\n\n    dragCallback(currentX, currentY);\n  }\n\n  function stopDrag() {\n    window.removeEventListener('mousemove', updateDrag);\n    window.removeEventListener('mouseleave', stopDrag);\n    canvasEl.removeEventListener('mouseup', stopDrag);\n\n    storedX = currentX;\n    storedY = currentY;\n  }\n\n  function startDrag(ev) {\n    window.addEventListener('mousemove', updateDrag);\n    window.addEventListener('mouseleave', stopDrag);\n    canvasEl.addEventListener('mouseup', stopDrag);\n\n    startPos = {\n      x: ev.pageX,\n      y: ev.pageY\n    };\n  }\n\n  canvasEl.addEventListener('mousedown', startDrag);\n\n  return function removeDrag() {\n    canvasEl.removeEventListener('mousedown', startDrag);\n  };\n}\n\n//# sourceURL=webpack:///./src/dragging.js?");

/***/ }),

/***/ "./src/drawLegend.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }(); /* eslint-disable no-magic-numbers */\n\n\nexports.default = drawLegend;\n\nvar _configs = __webpack_require__(\"./src/configs.js\");\n\nvar _configs2 = _interopRequireDefault(_configs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FONT_SIZE = 16;\nvar HALF = 0.5;\nvar TEXT_OFFSET = Math.floor(FONT_SIZE * HALF);\nvar LINE_WIDTH = 20;\n\nvar getOffset = function getOffset(center, end) {\n  var diff = center - end;\n\n  if (diff === 0) {\n    return 0;\n  }\n  if (diff > 0) {\n    return -TEXT_OFFSET;\n  }\n\n  return TEXT_OFFSET;\n};\n\nfunction drawLegend() {\n  // eslint-disable-line max-statements\n  var canvasEl = document.querySelector('.legend');\n  var ctx = canvasEl.getContext('2d');\n\n  canvasEl.width = (LINE_WIDTH + FONT_SIZE) * 2;\n  canvasEl.height = (LINE_WIDTH + FONT_SIZE) * 2;\n\n  var center = {\n    x: LINE_WIDTH + FONT_SIZE,\n    y: LINE_WIDTH + FONT_SIZE\n  };\n\n  Object.entries(_configs2.default).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        config = _ref2[1];\n\n    var lineEnd = config.director(center, LINE_WIDTH);\n\n    ctx.strokeStyle = config.color;\n    ctx.font = FONT_SIZE + 'px Consolas';\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n\n    ctx.beginPath();\n    ctx.moveTo(center.x, center.y);\n    ctx.lineTo(lineEnd.x, lineEnd.y);\n    ctx.stroke();\n\n    var textOffsetX = getOffset(center.x, Math.round(lineEnd.x));\n    var textOffsetY = getOffset(center.y, Math.round(lineEnd.y));\n\n    ctx.fillText(key, lineEnd.x + textOffsetX, lineEnd.y + textOffsetY);\n  });\n}\n\n//# sourceURL=webpack:///./src/drawLegend.js?");

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sieve = __webpack_require__(\"./src/sieve.js\");\n\nvar _sieve2 = _interopRequireDefault(_sieve);\n\nvar _configs = __webpack_require__(\"./src/configs.js\");\n\nvar _configs2 = _interopRequireDefault(_configs);\n\nvar _dragging = __webpack_require__(\"./src/dragging.js\");\n\nvar _dragging2 = _interopRequireDefault(_dragging);\n\nvar _primeList = __webpack_require__(\"./src/primeList.js\");\n\nvar _primeList2 = _interopRequireDefault(_primeList);\n\nvar _drawLegend = __webpack_require__(\"./src/drawLegend.js\");\n\nvar _drawLegend2 = _interopRequireDefault(_drawLegend);\n\n__webpack_require__(\"./src/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NUMBER_COUNT = 10000;\nvar HALF = 0.5;\nvar DOUBLE = 2;\nvar CIRCLE_WIDTH = 2;\nvar primes = (0, _sieve2.default)(NUMBER_COUNT);\n\nvar canvasEl = document.querySelector('.lines');\nvar lineWidthEl = document.querySelector('.line-width');\nvar firstNumberEl = document.querySelector('.first-number');\nvar ctx = canvasEl.getContext('2d');\n\nvar lineWidth = 0;\nvar firstNumber = 0;\nvar canvasWidth = 0;\nvar canvasHeight = 0;\nvar translateX = 0;\nvar translateY = 0;\nvar currentDirector = void 0;\n\nfunction applyConfig(numText) {\n  var lastCipher = numText[numText.length - 1];\n  var config = _configs2.default[lastCipher];\n\n  if (!config) {\n    // we ignore 2 and 5\n    return;\n  }\n\n  currentDirector = config.director;\n  ctx.strokeStyle = config.color;\n  ctx.fillStyle = config.color;\n  ctx.textAlign = config.labelHorizontal;\n  ctx.textBaseline = config.labelVertical;\n  ctx.setLineDash(config.dash);\n}\n\nfunction drawLines() {\n  var currentPosition = {\n    x: Math.floor(canvasWidth * HALF),\n    y: Math.floor(canvasHeight * HALF)\n  };\n\n  for (var num = firstNumber; num < NUMBER_COUNT; num++) {\n    var numText = num.toString();\n    var isPrime = primes[numText];\n    var previousPosition = currentPosition;\n\n    if (isPrime) {\n      applyConfig(numText);\n    }\n\n    currentPosition = currentDirector(currentPosition, lineWidth);\n\n    ctx.beginPath();\n    ctx.moveTo(previousPosition.x, previousPosition.y);\n    ctx.lineTo(currentPosition.x, currentPosition.y);\n    ctx.stroke();\n\n    if (isPrime) {\n      var numberX = previousPosition.x; // Math.floor((currentPosition.x + previousPosition.x) * HALF);\n      var numberY = previousPosition.y; // Math.floor((currentPosition.y + previousPosition.y) * HALF);\n\n      ctx.fillText(numText, numberX, numberY);\n\n      ctx.beginPath();\n      ctx.arc(previousPosition.x, previousPosition.y, CIRCLE_WIDTH, 0, DOUBLE * Math.PI);\n      ctx.fill();\n    }\n  }\n}\n\nfunction executeApp() {\n  canvasWidth = canvasEl.width = window.innerWidth;\n  canvasHeight = canvasEl.height = window.innerHeight;\n  lineWidth = lineWidthEl.value;\n  firstNumber = firstNumberEl.value;\n  ctx.translate(translateX, translateY);\n  ctx.font = '14px Consolas';\n\n  applyConfig('1');\n  drawLines();\n}\n\nfunction setTranslate(newTranslateX, newTranslateY) {\n  translateX = newTranslateX;\n  translateY = newTranslateY;\n\n  executeApp();\n}\n\n(0, _primeList2.default)(NUMBER_COUNT, primes, firstNumber);\n(0, _drawLegend2.default)();\n(0, _dragging2.default)(canvasEl, ctx, setTranslate);\nexecuteApp();\n\nwindow.addEventListener('resize', executeApp);\nlineWidthEl.addEventListener('input', executeApp);\nfirstNumberEl.addEventListener('input', executeApp);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/primeList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = primeList;\n\nvar _configs = __webpack_require__(\"./src/configs.js\");\n\nvar _configs2 = _interopRequireDefault(_configs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction primeList(numberCount, primes, firstNumber) {\n  var logEl = document.querySelector('.log');\n\n  for (var num = firstNumber; num < numberCount; num++) {\n    var numText = num.toString();\n\n    if (!primes[numText]) {\n      continue;\n    }\n\n    var logItemEl = document.createElement('div');\n    var lastCipher = numText[numText.length - 1];\n    var config = _configs2.default[lastCipher];\n\n    if (config) {\n      logItemEl.style.color = config.color;\n    } else {\n      logItemEl.style.color = '#666';\n    }\n\n    logItemEl.textContent = numText;\n    logEl.appendChild(logItemEl);\n  }\n}\n\n//# sourceURL=webpack:///./src/primeList.js?");

/***/ }),

/***/ "./src/sieve.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sieve;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes\n\nvar hasDivisionRest = function hasDivisionRest(dividend, divisor) {\n  return dividend % divisor !== 0;\n};\n\nvar STARTING_PRIME = 2;\n\nfunction sieve(maxNumber) {\n  var numbers = new Array(maxNumber).fill(0).map(function (__, index) {\n    return index + STARTING_PRIME;\n  });\n\n  var primes = [];\n\n  var _loop = function _loop() {\n    var currentPrime = numbers.shift();\n\n    primes.push(currentPrime);\n\n    numbers = numbers.filter(function (num) {\n      return hasDivisionRest(num, currentPrime);\n    });\n  };\n\n  while (numbers.length > 0) {\n    _loop();\n  }\n\n  var dict = primes.reduce(function (obj, prime) {\n    return Object.assign(obj, _defineProperty({}, prime.toString(), true));\n  }, {});\n\n  return dict;\n}\n\n//# sourceURL=webpack:///./src/sieve.js?");

/***/ }),

/***/ "./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ })

/******/ });