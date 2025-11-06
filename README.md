# Code Smell Analysis

## Duplicated Code

In each event listener the same lines are repeated:

ctr.innerHTML = '${c}';
document.title = "Clicked " + c;
document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";

Made a seperate function that updates the UI and added in ana

## Long Method

The function setup() contains too much ifnormation where you create the UI and implementation of the logic all in the same function. I split the functions into specific tasks like creating UI and updating UI.

## Comments

Code contains too many comments that describe what each line does rather than explaining why it's done.

// Get the increment button element from the document
const bI = document.getElementById(a);
// Get the decrement button element from the document
const bD = document.getElementById("dec");
// Get the reset button element from the document
const bR = document.getElementById("reset");
// Get the counter span element from the document
const ctr = document.getElementById(b);

We only need one comment for this, having too many comments can making the code fell overwhelming to read.

## Unclear variable name

let c = 0
const a = "increment", b = "counter", h = "CMPM 121 Project";

What is this code? I didn't know what it was until I read the comments.

I changed this to let counter = 0; and I added in a button id to each button so the program knows what button the id is assigned to.
