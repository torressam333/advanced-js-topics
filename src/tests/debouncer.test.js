const fetch = require("whatwg-fetch");
const debounceFile = require("../topics/debouncer");
const randomNum = debounceFile.generateRandomNum;
const swapiApi = require("../topics/helpers/swapiApiCall.js");

/**
 * @jest-environment jsdom
 */

test("It should generate a random number between 1 and 10", () => {
  const value = randomNum();

  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(10);
});

test("It should throw an error when not provided a number", async () => {
  //Workaround for tesint async calls in Jest
  await expect(swapiApi()).rejects.toThrow("Must provide a number value");
});

test("It should bring specific back star wars planet data", async () => {
  const planetData = await swapiApi(randomNum());

  expect(Object.keys(planetData).sort()).toEqual(
    [
      "climate",
      "created",
      "diameter",
      "edited",
      "films",
      "gravity",
      "name",
      "orbital_period",
      "population",
      "residents",
      "rotation_period",
      "surface_water",
      "terrain",
      "url",
    ].sort()
  );

  expect(Object.keys(planetData)).toHaveLength(14);
});
