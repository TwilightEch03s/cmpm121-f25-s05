// CMPM 121 Refactored Counter App

let counter = 0;

// Create the HTML structure for the UI
function createUI(): void {
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Increase</button>
    <button id="decrement">Decrease</button>
    <button id="reset">Reset</button>
  `;
}

// Update the UI display and page state
function updateUI(counterDisplay: HTMLElement): void {
  counterDisplay.textContent = counter.toString();
  document.title = `Clicked ${counter}`;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

// Handle all button click actions in one place
function handleClick(action: string, counterDisplay: HTMLElement): void {
  if (action === "increment") {
    counter++;
  } else if (action === "decrement") {
    counter--;
  } else if (action === "reset") {
    counter = 0;
  }
  updateUI(counterDisplay);
}

/// Bind each button to its corresponding click action
function bindEvents(): void {
  const counterDisplay = document.getElementById("counter");
  if (!counterDisplay) {
    return;
  }
  const buttons = ["increment", "decrement", "reset"] as const;
  buttons.forEach((id) => {
    const button = document.getElementById(id);
    if (!button) {
      return;
    }
    button.addEventListener("click", () => handleClick(id, counterDisplay));
  });
}

// Initialize the app by creating the UI and binding events
function initializeCounterApp(): void {
  createUI();
  bindEvents();
}

// Start the counter application
initializeCounterApp();
