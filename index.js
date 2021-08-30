class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
  }
  start() {
    console.log("Time to start the timer!");
  }
}

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
