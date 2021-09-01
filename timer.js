class Timer {
  // recieve argument in our constructor
  constructor(durationInput, startButton, pauseButton, callbacks) {
    // store a reference to them
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // reference and wiring up callbacks to onStart,onTick,onComplete functions, this tells the outside world something has occured
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // bind event listeners
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // call a method that is inside our class
  // added arrow function to make sure we invoke "this" class varibles, not random variables that do not have methods that can be used
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  // method on how to get value
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // method on how to set new value for time
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
