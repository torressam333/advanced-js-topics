/** *
 * This is an example of how to make api calls using async-await
 * along with the fetch api in Vanilla Javascript :)
 * 
 * How it works:
 * When you await a promise, the function is paused in a non-blocking way until the promise settles. 
 * If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown
 */

export default class Users {
  async getUsersAsJson() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //Error handling for non 2xx responses
    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`);
    }

    return await response.json();
  }

  //Regular es6 method
  extractUserData(users) {
    let userPromise = this.getUsersAsJson();

    userPromise.then((users) => {
      users.map((user) => {
        console.log(user); //Returns individual user objects
        console.log(user.name); // pull properties off of the user object
      });
    });
  }
}

let usersClass = new Users(); //Users instance declaration
const usersData = usersClass.getUsersAsJson();
usersClass.extractUserData(usersData);
