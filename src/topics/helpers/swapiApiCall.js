/**Make an api call to swapi and bring back planet information */
const swapiApiCall = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`);

  if (typeof id !== "number") {
    throw Error("Must provide a number value");
  }

  //I can do an inline return but want to give this
  //variable a cool name :)
  const starWarsPlanet = await response.json();

  return starWarsPlanet;
};

//Cant use import/export here so I have to use this
module.exports = swapiApiCall;
