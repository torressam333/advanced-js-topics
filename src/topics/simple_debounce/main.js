class SimpleDebounce {
  constructor(timer) {
    this.timer = timer;
    this.input = document.querySelector("#debounce-input");
    this.userInput = document.querySelector("#user-input");
  }

  displayUserInput() {
    this.userInput.innerHTML = this.input.value;
  }

  debouncer(callback, delay) {
    //Clear existing timeout
    //Ensures callback isn't called until delay time has ended
    //Resets each time event listener is called
    window.clearTimeout(this.timer);
    //Set time to new value
    //Call callback after set delay time
    this.timer = window.setTimeout(callback, delay);
  }

  debounceInputField() {
    let context = this;
    this.input.addEventListener("input", () => {
      this.debouncer(() => {
        this.displayUserInput();
      }, 1000);
    });
  }
}

new SimpleDebounce().debounceInputField();
