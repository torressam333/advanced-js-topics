/**Debouncer is useful for limiting expensive network/server requests
 *
 * Example: We have an input field that does a location search
 * in the background. We don't want a GET request to be fired on every
 * key stroke.
 *
 * We can limit how often the request fires by implementing a debouncer
 */
const swapiApiCall = require("./helpers/swapiApiCall");

//Return random number between 1 - 10 for plant id call
const generateRandomNum = () => {
  //ceil ensures we don't get zero
  return Math.ceil(Math.random() * 10);
};

const getStarWarsPlanetInfo = () => {
  const hoverDiv = document.querySelector(".debounce-container");
  let swapiResultsSpace = document.querySelector("#swapi-results-list");

  //As the user mouses over fire an event but use debounceFunciton as the callback
  //Instead of an arrow function
  hoverDiv.addEventListener(
    "mouseover",
    debounceFunction(() => {
      //Declare once event handler fires
      const randomNumber = generateRandomNum();

      //Empty the element so we don't append to infinity :D
      if (swapiResultsSpace.innerHTML !== "") {
        swapiResultsSpace.innerHTML = "";
      }

      //Otherwise make the api call when mouseover happens (this will be expesnive without debounce)
      swapiApiCall(randomNumber)
        .then((response) => {
          const keys = Object.keys(response);

          keys.map((key) => {
            swapiResultsSpace.innerHTML += `<li class='swapi-item'>
          <span class="key">${key}:</span> ${response[key]}</li>`;
          });
        })
        .catch((error) => {
          throw Error(`Something went wrong: ${error}`);
        });
    }, 2000) //Delay the api call to happen every (x) seconds
  );
};

const debounceFunction = (callback, delay) => {
  let timeout;

  //ES6, arrow functions use lexical scoping
  return (...args) => {
    const executionContext = this;

    //clear previous timeout
    clearTimeout(timeout);

    //Set new timeout => implicit return
    timeout = setTimeout(() => callback.apply(executionContext, args), delay);
  };
};

//Needed for testing DOM manipulation -
//Otherwise element queries execute before the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  //Execute our function
  getStarWarsPlanetInfo();
});

module.exports = { generateRandomNum, getStarWarsPlanetInfo, swapiApiCall };
