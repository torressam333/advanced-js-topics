/**
 * Computes character frequency from text file and prints out
 * a histrogram.
 *
 * This can be invoked with node v12+
 *
 * Wikipedia definition of a histogram ;D :
 * "A histogram is an approximate representation
 * of the distribution of numerical data"
 * 
 * Sample output:
 * 
  T: ########### 11.22%
  E: ########## 10.15%
  R: ####### 6.68%
  S: ###### 6.44%
  A: ###### 6.16%
  N: ###### 5.81%
  O: ##### 5.45%
  I: ##### 4.54%
  H: #### 4.07%
  C: ### 3.36%
  L: ### 3.20%
  U: ### 3.08%
  /: ### 2.88%
 */
class DefaultMap extends Map {
  constructor(defaultValue) {
    //Invoke super class constructor
    super();

    this.defaultValue = defaultValue;
  }

  get(key) {
    //If key is already in the map return it otherwise return DV
    return this.has(key) ? super.get(key) : this.defaultValue;
  }
}

class Histogram {
  constructor() {
    //Map from letters to coutns
    this.letterCounts = new DefaultMap(0);

    //How many total letters
    this.totalLetters = 0;
  }

  //Update histogram with letters of text
  add(text) {
    //Sanitize string and make all lower case for consistency
    text = text.replace(/\s/g, "").toLowerCase();

    //Loop over chars in text
    for (let character of text) {
      //Old count
      let count = this.letterCounts.get(character);
      //Increment old count
      this.letterCounts.set(character, count + 1);
      //Increase total
      this.totalLetters++;
    }
  }

  stringifyThis() {
    //convert map to associate array
    let entries = [...this.letterCounts];

    entries.sort((a, b) => {
      //Nested ternary
      return a[1] === b[1] ? (a[0] < b[0] ? -1 : 1) : b[1] - a[1];
    });

    //convert counts to percentages
    for (let entry of entries) {
      entry[1] === (entry[1] / this.totalLetters) * 100;
    }

    //drop entries < 1%
    entries = entries.filter((entry) => entry[1] >= 1);

    //Convert entry into text
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    //return template literal on new lines
    return lines.join("\n");
  }
}

//create histogram object
async function histogramFromInput() {
  //Unicode only no bytes
  process.stdin.setEncoding("utf-8");

  let histogram = new Histogram();

  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }

  return histogram;
}

histogramFromInput().then((histogram) =>
  console.log(histogram.stringifyThis())
);
