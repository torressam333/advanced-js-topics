const debounceFile = require("../topics/debouncer");
const randomNum = debounceFile.generateRandomNum;
const swapiApi = debounceFile.swapiApiCall;
/**
 * @jest-environment jsdom
 */

test("It should generate a random number between 1 and 10", () => {
  const value = randomNum();

  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThan(10);
});

test("It should bring back star wars planet data", () => {
  //const planetData = swapiApi();
});
