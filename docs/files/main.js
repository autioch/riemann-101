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

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sieve = __webpack_require__(\"./src/sieve.js\");\n\nvar _sieve2 = _interopRequireDefault(_sieve);\n\n__webpack_require__(\"./src/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar count = 900;\nvar lineWidth = 10;\nvar half = 0.5;\nvar primes = (0, _sieve2.default)(count);\n\nvar logEl = document.querySelector('div');\nvar canvasEl = document.querySelector('canvas');\nvar ctx = canvasEl.getContext('2d');\n\nvar currentDirector = void 0;\nvar currentColor = void 0;\nvar currentX = 1800; // eslint-disable-line no-magic-numbers\nvar currentY = 800; // eslint-disable-line no-magic-numbers\n\nfunction resizeCanvas() {\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n}\n\nvar configs = {\n  '1': {\n    director: function director() {\n      currentY = currentY - lineWidth;\n    },\n\n    color: '#f00',\n    labelHorizontal: 'left',\n    labelVertical: 'top'\n  },\n  '2': {\n    director: function director() {\n      currentX = currentX + lineWidth;\n      currentY = currentY - lineWidth * half;\n    },\n\n    color: '#0ff',\n    labelHorizontal: 'left',\n    labelVertical: 'bottom'\n  },\n  '3': {\n    director: function director() {\n      currentX = currentX + lineWidth;\n      currentY = currentY + lineWidth * half;\n    },\n\n    color: '#00f',\n    labelHorizontal: 'left',\n    labelVertical: 'bottom'\n  },\n  '5': {\n    director: function director() {\n      currentY = currentY + lineWidth;\n    },\n\n    color: '#f0f',\n    labelHorizontal: 'right',\n    labelVertical: 'top'\n  },\n  '7': {\n    director: function director() {\n      currentX = currentX - lineWidth;\n      currentY = currentY + lineWidth * half;\n    },\n\n    color: '#000',\n    labelHorizontal: 'right',\n    labelVertical: 'bottom'\n  },\n  '9': {\n    director: function director() {\n      currentX = currentX - lineWidth;\n      currentY = currentY - lineWidth * half;\n    },\n\n    color: '#0f0',\n    labelHorizontal: 'right',\n    labelVertical: 'top'\n  }\n};\n\nfunction applyConfig(config) {\n  currentColor = config.color;\n  currentDirector = config.director;\n  ctx.strokeStyle = config.color;\n  ctx.fillStyle = config.color;\n  ctx.textAlign = config.labelHorizontal;\n  ctx.textBaseline = config.labelVertical;\n}\nresizeCanvas();\n\napplyConfig(configs['1']);\n\nfor (var num = 1; num < count; num++) {\n  var numText = num.toString();\n\n  var isPrime = primes[numText];\n\n  if (isPrime) {\n    var lastCipher = numText[numText.length - 1];\n\n    applyConfig(configs[lastCipher]);\n  }\n  var previousX = currentX;\n  var previousY = currentY;\n\n  currentDirector();\n  ctx.beginPath();\n  ctx.moveTo(previousX, previousY);\n  ctx.lineTo(currentX, currentY);\n  ctx.stroke();\n\n  var numberX = Math.floor((currentX + previousX) * half);\n  var numberY = Math.floor((currentY + previousY) * half);\n\n  if (isPrime) {\n    var logItemEl = document.createElement('div');\n\n    logItemEl.style.color = currentColor;\n    logItemEl.textContent = numText;\n    logEl.appendChild(logItemEl);\n\n    ctx.fillText(numText, numberX, numberY);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

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