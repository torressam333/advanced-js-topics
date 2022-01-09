/**
 * Object destructuring is a way to extract elements from an object or an array.
 * Destructuring allows us to unpack values from array or objects and bind them to variables without the need
 * for redundant declaration.
 * **/

//ES2015 example
const artist = {
  fullName: "Vincent van Gogh",
  homeCountry: "Netherlands",
};

//This is superfluous with destructuring
const artistName = artist.fullName;
const country = artist.homeCountry;

artistName; //Vincent van Gogh

//---------------------------------------------------------------------------------------------------------------//
//ES6 Destructuring basic concept/structure => (const { identifier } = expression;)
//identifier: Is the name of the property that will be accessed and will contain a property value once the object has been destructured.
//expression: Should evaluate to an object.

const artistDestructured = {
  fullName: "Vincent van Gogh",
  homeCountry: "Netherlands",
  firstPainting: "Potato Eaters",
  address: {
    cityLivedIn: "Zundert",
  },
};

//With destructuring neither the property names nor the obejct variables are duplicated
//Properties that do not exist in the initial object can be assigned a default value (see birthday below)
//If you wish to use a different name for the property than is used in the original object you may use an alias
//You may even extract data from a nested object using nested destructuring (fancy way of saying: using an object within an object :D)
const {
  fullName,
  homeCountry,
  birthDay = "March, 20", //giving a property a default value
  firstPainting: firstPainingEver, //alias mentioned above
  address: { cityLivedIn }, //nested destructuring to get access to the nested "cityLivedIn" property
} = artistDestructured;

console.log(fullName); //Vincent van Gogh
console.log(homeCountry); //Netherlands
console.log(birthDay); //March, 20
console.log(firstPainingEver); //Potato Eaters
console.log(cityLivedIn); //Zundert

/*Summation: Object destructuring is a concise way to break apart an object while removing the need to
 * define individual properties on their own lines.
 */
