/*Functions that operate on other functions, either by taking them as arguments or by returning them,
  are called higher-order functions.
*/

//Javascript has some built in HOF's. Array.prototyoe.filter() is an example.
//.filter() qualifies as a HOF since it accepts a function as a parameter

export default class HigherOrder {
    builtInHof () {
        //Example: Return all words in a list that contain a specific string
        const listOfWords = ['Crown', 'Cheeseburger', 'Mountain', 'Gown', 'Brown', 'Today'];

        //Filter for 'own' and .filter() is a HOF since it accepts a function as a parameter
        listOfWords.filter ((word) => {
            (word.includes('own')) && console.log(word); //logs: Crown, Gown, Brown
        });
    }

    //But when would this be useful for custom use cases?
    //Without HOF's we have a large amount of code pollution/smell
    //Say we have a method that increments a number by n
    incrementArray(arrOfNums, n) {
        let results = [];

        arrOfNums.forEach ((num) => console.log (results.push (num + n)));
    }

    //But what if we also wanted a decrementing array?
    //Okay sure let's create that
    decrementArray(arrOfNums, n) {
        let results = [];

        arrOfNums.forEach ((num) => console.log (results.push (num - n)));
    }

    /*What's wrong with this picture? Hmm a lot of code duplication don't you think?
    * What if we wanted to divide or multiple? Do we just copy and paste? NO.
    * But what are we to do? Higher Order Functions to the rescue!
    * */
    //Step 1: Create pure functions for each operation
    incrementPure = (num, n) => num + n;
    decrementPure = (num, n) => num - n;
    multiplyPure = (num, n) => num * n;

    //Step2: Write the HOF that accepts a function as an argument (AKA our pure functions from above)
    cleanHof(arrOfNums, pureFunc, n) {
        //Ensure n is a number
        n = isNaN(n) ? 0 : n; //Default to zero if n is NaN

        let results = [];

        arrOfNums.forEach((num) => {
            //Execute our pure function passing the current num being iterated and the n(number to be operated by)
            //append the return value of the pure function to the results array
            results.push(pureFunc(num, n));
        })

        return results;
    }
}

const HofClass1 = new HigherOrder();
HofClass1.builtInHof();

//Our data to be used in examples below
const nums = [3, 5, 7];

//Code smell increment/decrement
HofClass1.incrementArray(nums, 5); //8,10,12
HofClass1.decrementArray(nums, 5) //-2, 0, 2

//Ahh better way of re-using the same looping functionality regardless of the type of operation being performed
const incPure = HofClass1.cleanHof(nums, HofClass1.incrementPure, 10); //[13, 15, 17]
const decPure = HofClass1.cleanHof(nums, HofClass1.decrementPure, 10); // [-7, -5, -3]
const mulPure = HofClass1.cleanHof(nums, HofClass1.multiplyPure, 10); // [30, 50, 70]

console.log(incPure, decPure, mulPure);