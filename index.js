class Timer {
  // recieve argument in our constructor
  constructor(durationInput, startButton, pauseButton) {
    // store a reference to them
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // bind event listeners
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // call a method that is inside our class
  // added arrow function to make sure we invoke "this" class varibles, not random variables that do not have methods that can be used
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    console.log("tick");
  };
}

// select the three html elements by using query selectors
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);

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
