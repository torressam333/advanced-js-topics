/**An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 * Although block scoped variables in recent versions of JS there are few uses for IIFE's I believe it is important
 * to understand some of the underlying concepts for overall JS knowledge as you still may see them in the wild.
 *
 * But what does this mean and why are IIFE's useful?
 * - IIFE's help to avoid polluting the global namespace. One use case is if you have some initiation code
 * that only needs to run once in an application, you can use and IIFE so that the funciton is Immediately Invoked
 * and only ran once.
 * - IIFE's work to secure some bit of information from the outside world. What happens in an IIFE stays in an IIFE...
 *   unless you use a closure to expose it.
 */

//Example syntax
(function () {
  //Some initiation code
  let myName = "Samuel Torres";
})(); //Ahhh look at the invocation here :)

//console.log(myName); //ReferenceError: myName is not defined

//You can also use arrow functions
(() => {
  let state = "Connecticut";
})();
console.log(state); //ReferenceError: state is not defined
