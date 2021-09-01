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

// select the three html elements by using query selectors
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("timer started");
  },
  onTick() {
    console.log("timer just ticked down");
  },
  onComplete() {
    console.log("timer completed");
  },
});

// Things the program does
// Display a timer
//  Shows an animated border around the timer

// Make a clear path on what you want to do, making cleaner code

// Event listener to watch for click on "start" button
// Emit an event stating that the timer has started ----- Watch for this event. When it occurs, draw the border around
// Start counting down the timer
// Emit an event that the timer has 'ticked' ----- Watch for this event. When it occurs, update the border
// Each time the timer counts down, update the text
// If we counted down and timer reaches 0
// Emit an event that the timer is done ----- Watch for this event. When it occurs, reset the border
// Reset internal timer to get ready for another run
// ------------------------------------------------------------------
// THE VALUE OF "THIS"

// Did you define the function with an arrow function?
// Write "console.log(this)" on the first valid line above the arrow function. Value of "this" in the arrow function will be equal to that console log.

// Did you call "bind", "call" or "apply" on the function when you invoked it?
// "This" is equal to the first argument of "bind", "call", or "apply"

// All other cases
// "This" is equal to whatever is to the left of the "." in the method call
