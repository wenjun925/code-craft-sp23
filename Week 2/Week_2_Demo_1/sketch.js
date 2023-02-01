// Define variables
let xPos, yPos;

function setup() {
  // Make a canvas
  createCanvas(800, 400);
  background(245);
  noStroke();
  xPos = width/4;
  yPos = height/2;
  // Draw a bule circle on the left side of the canvas
  fill(61, 133, 198);
  ellipse(xPos, yPos, 100, 100);
}

function draw() {
  // Move to the right a little bit
  xPos += 20;
  // Draw a green circle
  fill(106, 168, 79);
  ellipse(xPos, yPos, 100, 100);
}