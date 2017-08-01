/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	// es5中函数this指向是调用函数的对象
	// es6中箭头函数this指向是函数定义时的指向

	{
	    var test = function test(x) {
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

	        console.log('默认值', x, y);
	    };

	    test('hello'); // 默认值 hello world
	    test('hello', 'kill'); // 默认值 hello kill
	}

	{
	    var test2 = function test2(x) {
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	        console.log('作用域', x, y);
	    };

	    var x = 'test';

	    test2('kill');
	}

	// {
	//   function test3(...arg){
	//     for(let v of arg){
	//       console.log('rest',v);
	//     }
	//   }
	//   test3(1,2,3,4,'a');
	// }

	// {
	//   console.log(...[1,2,4]);
	//   console.log('a',...[1,2,4]);
	// }

	// {
	//   let arrow = v => v*2;
	//   let arrow2 = () => 5;
	//   console.log('arrow',arrow(3));
	//   console.log(arrow2());

	// }

	// {
	//   function tail(x){
	//     console.log('tail',x);
	//   }
	//   function fx(x){
	//     return tail(x)
	//   }
	//   fx(123)
	// }

/***/ })
/******/ ]);