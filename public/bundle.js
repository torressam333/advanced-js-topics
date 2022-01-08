/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _topics_memoization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics/memoization.js */ \"./src/topics/memoization.js\");\n/* harmony import */ var _topics_currying_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics/currying.js */ \"./src/topics/currying.js\");\n/* harmony import */ var _topics_async_await_with_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topics/async-await-with-fetch */ \"./src/topics/async-await-with-fetch.js\");\n//This file is used for mutli file script execution\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2YW5jZWQtanMtdG9waWNzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIGZpbGUgaXMgdXNlZCBmb3IgbXV0bGkgZmlsZSBzY3JpcHQgZXhlY3V0aW9uXG5pbXBvcnQgTWVtb2l6YXRpb24gZnJvbSBcIi4vdG9waWNzL21lbW9pemF0aW9uLmpzXCI7XG5pbXBvcnQgQ3VycnlpbmdKUyBmcm9tIFwiLi90b3BpY3MvY3VycnlpbmcuanNcIjtcbmltcG9ydCBHZXRVc2VycyBmcm9tIFwiLi90b3BpY3MvYXN5bmMtYXdhaXQtd2l0aC1mZXRjaFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/topics/async-await-with-fetch.js":
/*!**********************************************!*\
  !*** ./src/topics/async-await-with-fetch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users)\n/* harmony export */ });\n/** *\n * This is an example of how to make api calls using async-await\n * along with the fetch api in Vanilla Javascript :)\n */\n\nclass Users {\n  async getUsersAsJson() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n\n    //Error handling for non 2xx responses\n    if (!response.ok) {\n      throw new Error(`Something went wrong: ${response.status}`);\n    }\n\n    return await response.json();\n  }\n\n  //Regular es6 method\n  extractUserData(users) {\n    let userPromise = this.getUsersAsJson();\n\n    userPromise.then((users) => {\n      users.map((user) => {\n        console.log(user); //Returns individual user objects\n        console.log(user.name); // pull properties off of the user object\n      });\n    });\n  }\n}\n\nlet usersClass = new Users(); //Users instance declaration\nconst usersData = usersClass.getUsersAsJson();\nusersClass.extractUserData(usersData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9waWNzL2FzeW5jLWF3YWl0LXdpdGgtZmV0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmFuY2VkLWpzLXRvcGljcy8uL3NyYy90b3BpY3MvYXN5bmMtYXdhaXQtd2l0aC1mZXRjaC5qcz8yMDE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiAqXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgaG93IHRvIG1ha2UgYXBpIGNhbGxzIHVzaW5nIGFzeW5jLWF3YWl0XG4gKiBhbG9uZyB3aXRoIHRoZSBmZXRjaCBhcGkgaW4gVmFuaWxsYSBKYXZhc2NyaXB0IDopXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMge1xuICBhc3luYyBnZXRVc2Vyc0FzSnNvbigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xuXG4gICAgLy9FcnJvciBoYW5kbGluZyBmb3Igbm9uIDJ4eCByZXNwb25zZXNcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLy9SZWd1bGFyIGVzNiBtZXRob2RcbiAgZXh0cmFjdFVzZXJEYXRhKHVzZXJzKSB7XG4gICAgbGV0IHVzZXJQcm9taXNlID0gdGhpcy5nZXRVc2Vyc0FzSnNvbigpO1xuXG4gICAgdXNlclByb21pc2UudGhlbigodXNlcnMpID0+IHtcbiAgICAgIHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTsgLy9SZXR1cm5zIGluZGl2aWR1YWwgdXNlciBvYmplY3RzXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIubmFtZSk7IC8vIHB1bGwgcHJvcGVydGllcyBvZmYgb2YgdGhlIHVzZXIgb2JqZWN0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgdXNlcnNDbGFzcyA9IG5ldyBVc2VycygpOyAvL1VzZXJzIGluc3RhbmNlIGRlY2xhcmF0aW9uXG5jb25zdCB1c2Vyc0RhdGEgPSB1c2Vyc0NsYXNzLmdldFVzZXJzQXNKc29uKCk7XG51c2Vyc0NsYXNzLmV4dHJhY3RVc2VyRGF0YSh1c2Vyc0RhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/topics/async-await-with-fetch.js\n");

/***/ }),

/***/ "./src/topics/currying.js":
/*!********************************!*\
  !*** ./src/topics/currying.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkStock)\n/* harmony export */ });\n/* \n1. What is Currying in Javascript\nThe process where a function takes multiple arguments one at a time.\n\n2. But why does it matter and why would we use it?\nMutability caused by side effects is reduced to zero.\nWhen you have more than one argument, you’re setting yourself up for potential side effects. \nHowever, when you curry your code, your first argument returns an expected outcome that proceeds to process your next argument, and so on and so forth.\n* \n*/\n\n//Example 1:\nfunction samsCurryAddition(a, b) {\n  return a + b;\n}\n\n//Takes a function as an argument\nfunction curryingHere(func) {\n  return (a) => {\n    return (b) => {\n      return func(a, b);\n    };\n  };\n}\n\nconst addingCurry = curryingHere(samsCurryAddition);\n\nconsole.log(samsCurryAddition(4, 5)); //9\nconsole.log(addingCurry(10)(4)); //14\n\n//Example 2\nfunction checkStock(stockID) {\n  //some check code\n  if (!stockID) {\n    throw new Error(\"Missing stock ID\");\n  }\n\n  return (warehouseID) => {\n    //some check code\n    if (!warehouseID) {\n      throw new Error(\"Missing warehouse id\");\n    }\n    return (stockDeduct) => {\n      //some check code\n      if (!stockDeduct) {\n        throw new Error(\"Missing stock deduction\");\n      }\n      return (\n        \"Stock ID: \" +\n        stockID +\n        \" from the \" +\n        warehouseID +\n        \" warehouse has reduced inventory by \" +\n        stockDeduct +\n        \" units.\"\n      );\n    };\n  };\n}\n\nlet orderItem298 = checkStock(\"FN9382\")(\"SOUTH\")(3);\nconsole.log(orderItem298);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9waWNzL2N1cnJ5aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2YW5jZWQtanMtdG9waWNzLy4vc3JjL3RvcGljcy9jdXJyeWluZy5qcz80OGE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIFxuMS4gV2hhdCBpcyBDdXJyeWluZyBpbiBKYXZhc2NyaXB0XG5UaGUgcHJvY2VzcyB3aGVyZSBhIGZ1bmN0aW9uIHRha2VzIG11bHRpcGxlIGFyZ3VtZW50cyBvbmUgYXQgYSB0aW1lLlxuXG4yLiBCdXQgd2h5IGRvZXMgaXQgbWF0dGVyIGFuZCB3aHkgd291bGQgd2UgdXNlIGl0P1xuTXV0YWJpbGl0eSBjYXVzZWQgYnkgc2lkZSBlZmZlY3RzIGlzIHJlZHVjZWQgdG8gemVyby5cbldoZW4geW91IGhhdmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgeW914oCZcmUgc2V0dGluZyB5b3Vyc2VsZiB1cCBmb3IgcG90ZW50aWFsIHNpZGUgZWZmZWN0cy4gXG5Ib3dldmVyLCB3aGVuIHlvdSBjdXJyeSB5b3VyIGNvZGUsIHlvdXIgZmlyc3QgYXJndW1lbnQgcmV0dXJucyBhbiBleHBlY3RlZCBvdXRjb21lIHRoYXQgcHJvY2VlZHMgdG8gcHJvY2VzcyB5b3VyIG5leHQgYXJndW1lbnQsIGFuZCBzbyBvbiBhbmQgc28gZm9ydGguXG4qIFxuKi9cblxuLy9FeGFtcGxlIDE6XG5mdW5jdGlvbiBzYW1zQ3VycnlBZGRpdGlvbihhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuLy9UYWtlcyBhIGZ1bmN0aW9uIGFzIGFuIGFyZ3VtZW50XG5mdW5jdGlvbiBjdXJyeWluZ0hlcmUoZnVuYykge1xuICByZXR1cm4gKGEpID0+IHtcbiAgICByZXR1cm4gKGIpID0+IHtcbiAgICAgIHJldHVybiBmdW5jKGEsIGIpO1xuICAgIH07XG4gIH07XG59XG5cbmNvbnN0IGFkZGluZ0N1cnJ5ID0gY3VycnlpbmdIZXJlKHNhbXNDdXJyeUFkZGl0aW9uKTtcblxuY29uc29sZS5sb2coc2Ftc0N1cnJ5QWRkaXRpb24oNCwgNSkpOyAvLzlcbmNvbnNvbGUubG9nKGFkZGluZ0N1cnJ5KDEwKSg0KSk7IC8vMTRcblxuLy9FeGFtcGxlIDJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrU3RvY2soc3RvY2tJRCkge1xuICAvL3NvbWUgY2hlY2sgY29kZVxuICBpZiAoIXN0b2NrSUQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHN0b2NrIElEXCIpO1xuICB9XG5cbiAgcmV0dXJuICh3YXJlaG91c2VJRCkgPT4ge1xuICAgIC8vc29tZSBjaGVjayBjb2RlXG4gICAgaWYgKCF3YXJlaG91c2VJRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyB3YXJlaG91c2UgaWRcIik7XG4gICAgfVxuICAgIHJldHVybiAoc3RvY2tEZWR1Y3QpID0+IHtcbiAgICAgIC8vc29tZSBjaGVjayBjb2RlXG4gICAgICBpZiAoIXN0b2NrRGVkdWN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcgc3RvY2sgZGVkdWN0aW9uXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCJTdG9jayBJRDogXCIgK1xuICAgICAgICBzdG9ja0lEICtcbiAgICAgICAgXCIgZnJvbSB0aGUgXCIgK1xuICAgICAgICB3YXJlaG91c2VJRCArXG4gICAgICAgIFwiIHdhcmVob3VzZSBoYXMgcmVkdWNlZCBpbnZlbnRvcnkgYnkgXCIgK1xuICAgICAgICBzdG9ja0RlZHVjdCArXG4gICAgICAgIFwiIHVuaXRzLlwiXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmxldCBvcmRlckl0ZW0yOTggPSBjaGVja1N0b2NrKFwiRk45MzgyXCIpKFwiU09VVEhcIikoMyk7XG5jb25zb2xlLmxvZyhvcmRlckl0ZW0yOTgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/topics/currying.js\n");

/***/ }),

/***/ "./src/topics/memoization.js":
/*!***********************************!*\
  !*** ./src/topics/memoization.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ memoizedAddTo256)\n/* harmony export */ });\n/** \n - Memoization is a form of caching where the return value of a function is cached based on its parameters. \n - If the parameter of that function is not changed, the cached version of the function is returned. \n**/\nfunction memoizedAddTo256() {\n  var cache = {};\n\n  return function (num) {\n    if (num in cache) {\n      console.log(\"Cached value: \", cache[num]);\n      return cache[num];\n    } else {\n      cache[num] = num + 256;\n      console.log(\"NON-cached value: \", cache[num]);\n      return cache[num];\n    }\n  };\n}\n\nvar memoizedFunc = memoizedAddTo256();\n\nmemoizedFunc(20); // Non caced return\nmemoizedFunc(5); //Non cached return\nmemoizedFunc(20); // Cached return\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9waWNzL21lbW9pemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZhbmNlZC1qcy10b3BpY3MvLi9zcmMvdG9waWNzL21lbW9pemF0aW9uLmpzP2E4ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFxuIC0gTWVtb2l6YXRpb24gaXMgYSBmb3JtIG9mIGNhY2hpbmcgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBvZiBhIGZ1bmN0aW9uIGlzIGNhY2hlZCBiYXNlZCBvbiBpdHMgcGFyYW1ldGVycy4gXG4gLSBJZiB0aGUgcGFyYW1ldGVyIG9mIHRoYXQgZnVuY3Rpb24gaXMgbm90IGNoYW5nZWQsIHRoZSBjYWNoZWQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gaXMgcmV0dXJuZWQuIFxuKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW1vaXplZEFkZFRvMjU2KCkge1xuICB2YXIgY2FjaGUgPSB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuICAgIGlmIChudW0gaW4gY2FjaGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGVkIHZhbHVlOiBcIiwgY2FjaGVbbnVtXSk7XG4gICAgICByZXR1cm4gY2FjaGVbbnVtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVbbnVtXSA9IG51bSArIDI1NjtcbiAgICAgIGNvbnNvbGUubG9nKFwiTk9OLWNhY2hlZCB2YWx1ZTogXCIsIGNhY2hlW251bV0pO1xuICAgICAgcmV0dXJuIGNhY2hlW251bV07XG4gICAgfVxuICB9O1xufVxuXG52YXIgbWVtb2l6ZWRGdW5jID0gbWVtb2l6ZWRBZGRUbzI1NigpO1xuXG5tZW1vaXplZEZ1bmMoMjApOyAvLyBOb24gY2FjZWQgcmV0dXJuXG5tZW1vaXplZEZ1bmMoNSk7IC8vTm9uIGNhY2hlZCByZXR1cm5cbm1lbW9pemVkRnVuYygyMCk7IC8vIENhY2hlZCByZXR1cm5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/topics/memoization.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;