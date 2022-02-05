const debounceFile = require("../topics/debouncer");
const randomNum = debounceFile.generateRandomNum;

/**
 * @jest-environment jsdom
 */

test("It should generate a random number between 1 and 10", () => {
  const result = randomNum();

  console.log(result);
});
