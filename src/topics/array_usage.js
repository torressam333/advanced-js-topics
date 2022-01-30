//Arrays can have mixed types and duplicates
const names = ["Sam", "John", "Jordan", 29, "John"];

//Get first index === 'john'
console.log(names[1]);

//Loop through arrays
for (const el of names) {
  //Logs all items in array
  console.log(el);
}

//Add new items to original array
names.push("Rick");
console.log(names);

//Concat a new name w/o changing original array
const newNamesArray = names.concat("Sue");

console.log(names); //Sue will not appear
console.log(newNamesArray); //Sue will appear

/*Deletion and Finding elements in Arrays*/
//Finding is performance intensive b/c ir has to search the entire array
const johnsIndex = names.findIndex((el) => el === "John");
//Returns 1 and not 1,4 as it stops execition on the first finding
console.log(johnsIndex);

//Deleting is also performance intensive

//When an item is removed the entire array has to shift indices
names.splice(3, 1); //Removes 29
console.log(names);
