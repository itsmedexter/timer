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
