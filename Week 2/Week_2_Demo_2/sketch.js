// Declare variables
let xPos, yPos;

function setup() {
  // Make a canvas
  createCanvas(800, 400);
  noStroke();
  xPos = width/2;
  yPos = 50;
  // Draw a small circle at the top of the canvas
  fill(61, 133, 198);
  ellipse(xPos, yPos, 100, 100);
  
  frameRate(5);
}

function draw() {
  // Erase canvas
  background(245);
  // draw a new circle slightly below the previous one
  yPos += 20;
  fill(106, 168, 79);
  ellipse(xPos, yPos, 100, 100);
}