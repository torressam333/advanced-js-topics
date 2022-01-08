/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _topics_memoization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics/memoization.js */ \"./src/topics/memoization.js\");\n/* harmony import */ var _topics_currying_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics/currying.js */ \"./src/topics/currying.js\");\n/* harmony import */ var _topics_async_await_with_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topics/async-await-with-fetch */ \"./src/topics/async-await-with-fetch.js\");\n//This file is used for mutli file script execution\n\n\n\n\n\n//# sourceURL=webpack://advanced-js-topics/./src/index.js?");

/***/ }),

/***/ "./src/topics/async-await-with-fetch.js":
/*!**********************************************!*\
  !*** ./src/topics/async-await-with-fetch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users)\n/* harmony export */ });\n/** *\n * This is an example of how to make api calls using async-await\n * along with the fetch api in Vanilla Javascript :)\n */\n\nclass Users {\n  async getUsersAsJson() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n\n    //Error handling for non 2xx responses\n    if (!response.ok) {\n      throw new Error(`Something went wrong: ${response.status}`);\n    }\n\n    return await response.json();\n  }\n\n  //Regular es6 method\n  extractUserData(users) {\n    let userPromise = this.getUsersAsJson();\n\n    userPromise.then((users) => {\n      users.map((user) => {\n        console.log(user); //Returns individual user objects\n        console.log(user.name); // pull properties off of the user object\n      });\n    });\n  }\n}\n\nlet usersClass = new Users(); //Users instance declaration\nconst usersData = usersClass.getUsersAsJson();\nusersClass.extractUserData(usersData);\n\n\n//# sourceURL=webpack://advanced-js-topics/./src/topics/async-await-with-fetch.js?");

/***/ }),

/***/ "./src/topics/currying.js":
/*!********************************!*\
  !*** ./src/topics/currying.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkStock)\n/* harmony export */ });\n/* \n1. What is Currying in Javascript\nThe process where a function takes multiple arguments one at a time.\n\n2. But why does it matter and why would we use it?\nMutability caused by side effects is reduced to zero.\nWhen you have more than one argument, you’re setting yourself up for potential side effects. \nHowever, when you curry your code, your first argument returns an expected outcome that proceeds to process your next argument, and so on and so forth.\n* \n*/\n\n//Example 1:\nfunction samsCurryAddition(a, b) {\n  return a + b;\n}\n\n//Takes a function as an argument\nfunction curryingHere(func) {\n  return (a) => {\n    return (b) => {\n      return func(a, b);\n    };\n  };\n}\n\nconst addingCurry = curryingHere(samsCurryAddition);\n\nconsole.log(samsCurryAddition(4, 5)); //9\nconsole.log(addingCurry(10)(4)); //14\n\n//Example 2\nfunction checkStock(stockID) {\n  //some check code\n  if (!stockID) {\n    throw new Error(\"Missing stock ID\");\n  }\n\n  return (warehouseID) => {\n    //some check code\n    if (!warehouseID) {\n      throw new Error(\"Missing warehouse id\");\n    }\n    return (stockDeduct) => {\n      //some check code\n      if (!stockDeduct) {\n        throw new Error(\"Missing stock deduction\");\n      }\n      return (\n        \"Stock ID: \" +\n        stockID +\n        \" from the \" +\n        warehouseID +\n        \" warehouse has reduced inventory by \" +\n        stockDeduct +\n        \" units.\"\n      );\n    };\n  };\n}\n\nlet orderItem298 = checkStock(\"FN9382\")(\"SOUTH\")(3);\nconsole.log(orderItem298);\n\n\n//# sourceURL=webpack://advanced-js-topics/./src/topics/currying.js?");

/***/ }),

/***/ "./src/topics/memoization.js":
/*!***********************************!*\
  !*** ./src/topics/memoization.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ memoizedAddTo256)\n/* harmony export */ });\n/** \n - Memoization is a form of caching where the return value of a function is cached based on its parameters. \n - If the parameter of that function is not changed, the cached version of the function is returned. \n**/\nfunction memoizedAddTo256() {\n  var cache = {};\n\n  return function (num) {\n    if (num in cache) {\n      console.log(\"Cached value: \", cache[num]);\n      return cache[num];\n    } else {\n      cache[num] = num + 256;\n      console.log(\"NON-cached value: \", cache[num]);\n      return cache[num];\n    }\n  };\n}\n\nvar memoizedFunc = memoizedAddTo256();\n\nmemoizedFunc(20); // Non caced return\nmemoizedFunc(5); //Non cached return\nmemoizedFunc(20); // Cached return\n\n\n//# sourceURL=webpack://advanced-js-topics/./src/topics/memoization.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;