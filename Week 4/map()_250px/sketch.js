function setup() {
  // set canvas's width to 255 exactly
  createCanvas(255, 255);
}

function draw() {
  // set the background grayscale value
  // to the x position of the mouse
  background(mouseX);
}