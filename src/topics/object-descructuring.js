/**
 * Object destructuring is a new way to extract elements from an object or an array.
 * Destructuring allows us to unpack values from array or objects and bind them to variables.
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

//-----------------------------------------//
//ES6 Destructuring basic concept/structure => (const { identifier } = expression;)
//identifier: Is the name of the property that will be accessed and will contain a property value once the object has been destructured.
//expression: Should evaluate to an object.

//Example
const artistDestructured = {
  fullName: "Vincent van Gogh",
  homeCountry: "Netherlands",
  firstPainting: "Potato Eaters",
  address: {
    cityLivedIn: "Zundert",
  },
};

//With destructuring neither the property names nor the obejct variables are duplicated
//Properties that do no exist in the object can be assigned a default value (see birthday below)
//If you wish to use a different name for the property than is used in the original object you may use an alias
//You may even extract data from a nested object using
const {
  fullName,
  homeCountry,
  birthDay = "March, 20", //giving a property a default value
  firstPainting: firstPainingEver, //alias
  address: { cityLivedIn }, //nested destructuring to get access to the nested "cityLivedIn" property
} = artistDestructured;

console.log(fullName); //Vincent van Gogh
console.log(homeCountry); //Netherlands
console.log(birthDay); //March, 20
console.log(firstPainingEver); //Potato Eaters
console.log(cityLivedIn); //Zundert
