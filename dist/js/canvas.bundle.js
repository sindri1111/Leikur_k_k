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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/bottom-level-left.png":
/*!***************************************!*\
  !*** ./src/img/bottom-level-left.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4b9210afc9739b2f662c4a30507e6810.png");

/***/ }),

/***/ "./src/img/bottom-level-right.png":
/*!****************************************!*\
  !*** ./src/img/bottom-level-right.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0b50661047afd0cbb2297fd68ca959e3.png");

/***/ }),

/***/ "./src/img/cyborg_climb.png":
/*!**********************************!*\
  !*** ./src/img/cyborg_climb.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2929b0bf20d160c9309c39264c26394.png");

/***/ }),

/***/ "./src/img/cyborg_death.png":
/*!**********************************!*\
  !*** ./src/img/cyborg_death.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81c97e257ef8ceaaef20afaf808be60d.png");

/***/ }),

/***/ "./src/img/cyborg_death_left.png":
/*!***************************************!*\
  !*** ./src/img/cyborg_death_left.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "62dc31b1485102b31ea34ddf2d9908b4.png");

/***/ }),

/***/ "./src/img/cyborg_idle.png":
/*!*********************************!*\
  !*** ./src/img/cyborg_idle.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6776bac22369dcd38d641adb64f580cb.png");

/***/ }),

/***/ "./src/img/cyborg_idle_left.png":
/*!**************************************!*\
  !*** ./src/img/cyborg_idle_left.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "28fb4250bd0128017e6125283a4ba229.png");

/***/ }),

/***/ "./src/img/cyborg_jump.png":
/*!*********************************!*\
  !*** ./src/img/cyborg_jump.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c74ac377e64e98f7608a0b91be6ffc62.png");

/***/ }),

/***/ "./src/img/cyborg_jump_left.png":
/*!**************************************!*\
  !*** ./src/img/cyborg_jump_left.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "477cf18979e4895181fe1744fb802400.png");

/***/ }),

/***/ "./src/img/cyborg_run.png":
/*!********************************!*\
  !*** ./src/img/cyborg_run.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a9a123552abfda9a99198651181200fa.png");

/***/ }),

/***/ "./src/img/cyborg_run_left.png":
/*!*************************************!*\
  !*** ./src/img/cyborg_run_left.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b4abd9c083b54ac7668c526a6375f2e4.png");

/***/ }),

/***/ "./src/img/door.png":
/*!**************************!*\
  !*** ./src/img/door.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc27285ce9b0e4d11861aece9a5047c0.png");

/***/ }),

/***/ "./src/img/level-five.png":
/*!********************************!*\
  !*** ./src/img/level-five.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c93e011c9225da72bc2531e34c44fa95.png");

/***/ }),

/***/ "./src/img/level-four.png":
/*!********************************!*\
  !*** ./src/img/level-four.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b496351bd6cd201d785dd247963d919.png");

/***/ }),

/***/ "./src/img/level-six.png":
/*!*******************************!*\
  !*** ./src/img/level-six.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a3d27beeb00eddf369d26bc9d66a2a0e.png");

/***/ }),

/***/ "./src/img/level-three.png":
/*!*********************************!*\
  !*** ./src/img/level-three.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "84617ebd4cd691eb045c1a9abc5dc62e.png");

/***/ }),

/***/ "./src/img/level-two-left.png":
/*!************************************!*\
  !*** ./src/img/level-two-left.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "33689ab428f89a8da3b00a323904f9db.png");

/***/ }),

/***/ "./src/img/level-two-right-floor.png":
/*!*******************************************!*\
  !*** ./src/img/level-two-right-floor.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0027c9df93868aa49f751ea5eb3e2a3.png");

/***/ }),

/***/ "./src/img/score-board.png":
/*!*********************************!*\
  !*** ./src/img/score-board.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "847ca7bb64b1521f04cc5fbb4a0e7304.png");

/***/ }),

/***/ "./src/img/sky-1.png":
/*!***************************!*\
  !*** ./src/img/sky-1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc3ca2246490621c3c0b0111f414c46f.png");

/***/ }),

/***/ "./src/img/sky-2.png":
/*!***************************!*\
  !*** ./src/img/sky-2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "50731040a121d478ac4ff8a816bd778b.png");

/***/ }),

/***/ "./src/img/stairs.png":
/*!****************************!*\
  !*** ./src/img/stairs.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67ceb20de31d60fe6aae0657307d8194.png");

/***/ }),

/***/ "./src/img/top-level-floor.png":
/*!*************************************!*\
  !*** ./src/img/top-level-floor.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "892759079b1c71a00193cec5e6f6514c.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_bottom_level_left_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/bottom-level-left.png */ "./src/img/bottom-level-left.png");
/* harmony import */ var _img_bottom_level_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bottom-level-right.png */ "./src/img/bottom-level-right.png");
/* harmony import */ var _img_level_two_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/level-two-left.png */ "./src/img/level-two-left.png");
/* harmony import */ var _img_level_two_right_floor_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/level-two-right-floor.png */ "./src/img/level-two-right-floor.png");
/* harmony import */ var _img_level_three_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/level-three.png */ "./src/img/level-three.png");
/* harmony import */ var _img_level_four_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/level-four.png */ "./src/img/level-four.png");
/* harmony import */ var _img_level_five_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/level-five.png */ "./src/img/level-five.png");
/* harmony import */ var _img_level_six_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/level-six.png */ "./src/img/level-six.png");
/* harmony import */ var _img_top_level_floor_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/top-level-floor.png */ "./src/img/top-level-floor.png");
/* harmony import */ var _img_stairs_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/stairs.png */ "./src/img/stairs.png");
/* harmony import */ var _img_sky_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/sky-2.png */ "./src/img/sky-2.png");
/* harmony import */ var _img_sky_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/sky-1.png */ "./src/img/sky-1.png");
/* harmony import */ var _img_score_board_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/score-board.png */ "./src/img/score-board.png");
/* harmony import */ var _img_door_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/door.png */ "./src/img/door.png");
/* harmony import */ var _img_cyborg_idle_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/cyborg_idle.png */ "./src/img/cyborg_idle.png");
/* harmony import */ var _img_cyborg_idle_left_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/cyborg_idle_left.png */ "./src/img/cyborg_idle_left.png");
/* harmony import */ var _img_cyborg_run_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/cyborg_run.png */ "./src/img/cyborg_run.png");
/* harmony import */ var _img_cyborg_run_left_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/cyborg_run_left.png */ "./src/img/cyborg_run_left.png");
/* harmony import */ var _img_cyborg_climb_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/cyborg_climb.png */ "./src/img/cyborg_climb.png");
/* harmony import */ var _img_cyborg_jump_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/cyborg_jump.png */ "./src/img/cyborg_jump.png");
/* harmony import */ var _img_cyborg_jump_left_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/cyborg_jump_left.png */ "./src/img/cyborg_jump_left.png");
/* harmony import */ var _img_cyborg_death_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/cyborg_death.png */ "./src/img/cyborg_death.png");
/* harmony import */ var _img_cyborg_death_left_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/cyborg_death_left.png */ "./src/img/cyborg_death_left.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Hér setjum við inn alla fleka og stiga sem búa til leikborðið






















 // import enemyStandingOne from "../img/door.png"
// import enemyRunningOne from "../img/door.png"
// import enemyStandingTwo from "../img/door.png"
// import enemyRunningTwo from "../img/door.png"

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 700; // Hér ætlum við að láta þyngdaraflið líkja eftir eðleilegur hreifingum á karakterunum.

var gravity = 0.5; // Hér búum við til klasa sem býr til karakter í leiknum. 

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 5;
    this.position = {
      x: 10,
      y: 600
    }, this.velocity = {
      x: 0,
      y: 0
    }, this.width = 60;
    this.height = 60;
    this.Image = createImage(_img_cyborg_idle_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
    this.frames = 0;
    this.movement = {
      stand: {
        right: createImage(_img_cyborg_idle_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
        left: createImage(_img_cyborg_idle_left_png__WEBPACK_IMPORTED_MODULE_15__["default"])
      },
      run: {
        right: createImage(_img_cyborg_run_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        left: createImage(_img_cyborg_run_left_png__WEBPACK_IMPORTED_MODULE_17__["default"])
      },
      climb: {
        up: createImage(_img_cyborg_climb_png__WEBPACK_IMPORTED_MODULE_18__["default"])
      },
      jump: {
        right: createImage(_img_cyborg_jump_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
        left: createImage(_img_cyborg_jump_left_png__WEBPACK_IMPORTED_MODULE_20__["default"])
      },
      death: {
        right: createImage(_img_cyborg_death_png__WEBPACK_IMPORTED_MODULE_21__["default"]),
        left: createImage(_img_cyborg_death_left_png__WEBPACK_IMPORTED_MODULE_22__["default"])
      }
    };
    this.currentpos = this.movement.stand.right;
  } // Fall sem teiknar karakterinn


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.currentpos, 48 * this.frames, 0, 48, 48, this.position.x, this.position.y, this.width, this.height);
    } // Fall sem uppfærir karakterinn reglulega

  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 3 && (this.currentpos === this.movement.stand.right || this.currentpos === this.movement.stand.left)) this.frames = 0;
      if (this.frames > 3 && (this.currentpos === this.movement.run.right || this.currentpos === this.movement.run.left)) this.frames = 0;
      if (this.frames > 3 && (this.currentpos === this.movement.jump.right || this.currentpos === this.movement.jump.left)) this.frames = 0;
      if (this.frames > 5 && this.currentpos === this.movement.climb.up) this.frames = 0;
      if (this.frames > 5 && (this.currentpos === this.movement.death.right || this.currentpos === this.movement.death.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

console.log(Player); // class Enemies {
//     constructor( {x, y} ) {
//         this.position = {
//             x,
//             y
//         }
//         this.velocity = {
//             x: 0,
//             y: 0
//         }
//         this.width = 30
//         this.height = 40
//     } 
//     // Fall sem teiknar karakterinn
//     draw() {
//         ctx.fillStyle = 'red'
//         ctx.fillRect(this.position.x, this.position.y, 
//             this.width, this.height)
//     }
//     update() {
//         this.draw()
//         this.position.x += this.velocity.x
//         this.position.y += this.velocity.y
//         if (this.position.y + this.height +
//             this.velocity.y <= canvas.height)
//             this.velocity.y += gravity
//     }
// }

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

console.log(Platform);

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platforms = [new Platform({
  x: 0,
  y: 670,
  image: createImage(_img_bottom_level_left_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 394,
  y: 670,
  image: createImage(_img_bottom_level_right_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: 202,
  y: 542,
  image: createImage(_img_level_two_right_floor_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 0,
  y: 422,
  image: createImage(_img_level_three_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: 522,
  y: 358,
  image: createImage(_img_level_four_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new Platform({
  x: 0,
  y: 294,
  image: createImage(_img_level_five_png__WEBPACK_IMPORTED_MODULE_6__["default"])
}), new Platform({
  x: 332,
  y: 230,
  image: createImage(_img_level_six_png__WEBPACK_IMPORTED_MODULE_7__["default"])
}), new Platform({
  x: 0,
  y: 100,
  image: createImage(_img_top_level_floor_png__WEBPACK_IMPORTED_MODULE_8__["default"])
}), new Platform({
  x: 300,
  y: 340,
  image: createImage(_img_sky_2_png__WEBPACK_IMPORTED_MODULE_10__["default"])
}), new Platform({
  x: 100,
  y: 200,
  image: createImage(_img_sky_1_png__WEBPACK_IMPORTED_MODULE_11__["default"])
}), new Platform({
  x: 550,
  y: 20,
  image: createImage(_img_score_board_png__WEBPACK_IMPORTED_MODULE_12__["default"])
}), new Platform({
  x: 10,
  y: 50,
  image: createImage(_img_door_png__WEBPACK_IMPORTED_MODULE_13__["default"])
}), new Platform({
  x: 586,
  y: 542,
  image: createImage(_img_stairs_png__WEBPACK_IMPORTED_MODULE_9__["default"])
}), new Platform({
  x: 459,
  y: 102,
  image: createImage(_img_stairs_png__WEBPACK_IMPORTED_MODULE_9__["default"])
}), new Platform({
  x: 32,
  y: 422,
  image: createImage(_img_stairs_png__WEBPACK_IMPORTED_MODULE_9__["default"])
}), new Platform({
  x: 554,
  y: 230,
  image: createImage(_img_stairs_png__WEBPACK_IMPORTED_MODULE_9__["default"])
}), new Platform({
  x: 0,
  y: 542,
  image: createImage(_img_level_two_left_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var player = new Player();
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};

function Init() {
  player = new Player();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (imageSrc) {
    imageSrc.draw();
  });
  player.update(); // ef ýtt er á hægri takka og leikmaður á x ás er minni en 620px þá 
  // færist hann áfram um 5 oh hins vegar ef ýtt er á vinstri takka og leikmaður er 
  // staðsetttur á yfir 0px fer hann í hina áttina um sama bil. annars fer leikmaður
  // ekki lengra.

  if (keys.right.pressed && player.position.x < 620) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else player.velocity.x = 0; // fall sem lætur karakterinn okkar stoppa um leið og hann snertir flöt á platformi


  platforms.forEach(function (imageSrc) {
    if (player.position.y + player.height <= imageSrc.position.y && player.position.y + player.height + player.velocity.y >= imageSrc.position.y && player.position.x + player.width >= imageSrc.position.x && player.position.x <= imageSrc.position.x + imageSrc.width) {
      player.velocity.y = 0;
    }
  });
  platforms.forEach(function (stairs) {
    if (player.position.x + player.width <= stairs.position.x + stairs.width && player.position.x + player.width + player.velocity.x >= stairs.position.x && player.position.x + player.width >= stairs.position.x && player.position.x <= stairs.position.x + stairs.width) {
      player.velocity.x = 0;
    }
  }); // Hér látum við karakterinn okkar skipta eðlilega á milli svæða í myndaseriunni.  

  if (keys.right.pressed && lastKey === 'right' && player.currentpos !== player.movement.run.right) {
    player.frames = 1;
    player.currentpos = player.movement.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentpos !== player.movement.run.left) {
    player.currentpos = player.movement.run.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentpos !== player.movement.stand.right) {
    player.currentpos = player.movement.stand.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentpos !== player.movement.stand.left) {
    player.currentpos = player.movement.stand.left;
  } //   else if (keys.jump.pressed && lastKey === 'right' && player.currentpos !== player.movement.jump.right) {
  //     player.currentpos = player.movement.jump.right
  //     player.velocity.y -= 7.5
  //   }
  // else if (keys.jump.pressed && lastKey === 'left' && player.currentpos !== player.movement.jump.left) {
  //     player.currentpos = player.movement.jump.left 
  //   }
  // Hérna erum við að segja leiknum okkar að byrja upp á nýtt ef 
  // leikmaður nær ekki að stökkva yfir bil og deyr. Notum þá init. 


  if (player.position.y > canvas.height) {
    Init();
  }
}

Init();
animate(); // aðgerðir þegar við ýtum á valda takka á lyklaborðinu

addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 65:
    case 37:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
    case 40:
      console.log('down');
      keys.down.pressed = true;
      lastKey = 'down';
      break;

    case 68:
    case 39:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
    case 38:
      console.log('up');
      keys.down.pressed = true;
      lastKey = 'up';
      break;

    case 32:
      console.log('jump');
      keys.jump.pressed = true;
      player.velocity.y -= 7.5;
      lastKey = 'jump';
      break;
  }
}); // aðgerðir þegar við sleppum völdum tökkum á lyklaborðinu

addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
    case 37:
      console.log('left');
      keys.left.pressed = false;
      lastKey = 'left';
      break;

    case 83:
    case 40:
      console.log('down');
      keys.down.pressed = false;
      lastKey = 'down';
      break;

    case 68:
    case 39:
      console.log('right');
      keys.right.pressed = false;
      lastKey = 'right';
      break;

    case 87:
    case 38:
      console.log('up');
      keys.up.pressed = false;
      lastKey = 'up';
      break;

    case 32:
      console.log('jump');
      keys.jump.pressed = false;
      lastKey = 'jump';
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map