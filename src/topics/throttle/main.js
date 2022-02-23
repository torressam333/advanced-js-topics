/**Throttling in JavaScript is used when we want to limit
 * an action being performed based on a set interval of time.
 *
 * In the simple example provided, I am throttling or "limiting"
 * the frequency in which a user may click a button or how often
 * a button click function gets called.
 *
 * If I pass a delay time for a button click (3 seconds in my example)
 * this means that no matter how many times a user clicks the button,
 * a click (which console logs a message and event id) will only happen
 * once every 3 seconds, regardless if the user spams the button.
 *
 * Throttling can help improve application performance, and prevent
 * performing resource intensive tasks successionally.
 */
const initApp = () => {
  const throttleBtn = document.querySelector(".throttle");

  //Only allow click every 3 seconds
  throttleBtn.addEventListener("click", throttle(clickLog, 3000));

  window.addEventListener("scroll", throttle(scrollingLogger, 3000));
};

const clickLog = () => console.log("clicked");
const scrollingLogger = () => console.log("scrolllinggg");

//App is initialized when dom is loaded
document.addEventListener("DOMContentLoaded", initApp);

//Can only call functions at a certain intervals
const throttle = (fn, delay) => {
  let lastTime = 0;
  let eventID = 0;

  return (...args) => {
    const now = new Date().getTime();

    eventID++;
    //Ignore request for func passed to throttle
    //If the click happened before the delay time occurs
    //Your click will be ignored
    if (now - lastTime < delay) return;

    //Works as our check of when the last time the event occured
    lastTime = now;

    console.log(`eventID: ${eventID}`);

    fn(...args);
  };
};
