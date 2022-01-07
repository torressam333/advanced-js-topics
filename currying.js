/* 
1. What is Currying in Javascript
The process where a function takes multiple arguments one at a time.

2. But why does it matter and why would we use it?
Mutability caused by side effects is reduced to zero.
When you have more than one argument, you’re setting yourself up for potential side effects. 
However, when you curry your code, your first argument returns an expected outcome that proceeds to process your next argument, and so on and so forth.
* 
*/

//Example 1:
function samsCurryAddition(a, b) {
  return a + b;
}

//Takes a function as an argument
function curryingHere(func) {
  return (a) => {
    return (b) => {
      return func(a, b);
    };
  };
}

const addingCurry = curryingHere(samsCurryAddition);

console.log(samsCurryAddition(4, 5)); //9
console.log(addingCurry(10)(4)); //14

//Example 2
function checkStock(stockID) {
  //some check code
  if (!stockID) {
    throw new Error("Missing stock ID");
  }

  return (warehouseID) => {
    //some check code
    if (!warehouseID) {
      throw new Error("Missing warehouse id");
    }
    return (stockDeduct) => {
      //some check code
      if (!stockDeduct) {
        throw new Error("Missing stock deduction");
      }
      return (
        "Stock ID: " +
        stockID +
        " from the " +
        warehouseID +
        " warehouse has reduced inventory by " +
        stockDeduct +
        " units."
      );
    };
  };
}

let orderItem298 = checkStock("FN9382")("SOUTH")(3);
console.log(orderItem298);
