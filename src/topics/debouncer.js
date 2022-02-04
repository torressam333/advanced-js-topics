/**Debouncer is useful for limiting expensive network/server requests
 *
 * Example: We have an input field that does a location search
 * in the background. We don't want a GET request to be fired on every
 * key stroke.
 *
 * We can limit how often the request fires by implementing a debouncer
 */

// const debouncer =
//   (() => {
//     let counter = 0;
//     const hoverDiv = document.querySelector(".debounce-container");

//     hoverDiv.addEventListener("mouseenter", () => {
//       return counter++;
//     });
//   },
//   3000);

const swapiApiCall = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`);

  //I can do an inline return but want to give this
  //variable a cool name :)
  const starWarsPlanet = await response.json();

  return starWarsPlanet;
};

//Return random number between 1 - 10 for plant id call
const generateRandomNum = () => {
  //ceil ensures we don't get zero
  return Math.ceil(Math.random() * 10);
};

const debouncer = () => {
  const hoverDiv = document.querySelector(".debounce-container");

  //As the user mouses over fire an event
  hoverDiv.addEventListener("mouseover", () => {
    //Make api call when mouseover happens (this will end badly without debounce)
    swapiApiCall(1).then((response) => console.log(response));
  });
};

console.log(debouncer());
