// create a sketch in which a circle moves around the canvas, but every time it reaches an edge of the canvas, it reverses directions - like a bouncing ball

// declare and initialize variables
let diameter = 50; // diameter of the ball
let xPos = 200; // x position of the starting point
let yPos = 200; // y position of the starting point
let xSpeed = 3; // ball moving speed in the x direction
let ySpeed = 5; // ball moving speed in the y diretion

function preload() {
  img = loadImage('assets/frame.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  // add an image to the canvas
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
  
  // styling
  fill(237, 31, 94);
  stroke(200);
  strokeWeight(5);
  
  // draw the ball
  ellipse(xPos, yPos, diameter, diameter);
  
  // move the ball at certain speed
  xPos = xPos + xSpeed; // new x position  = old x positon + speed (in x direction)
  yPos = yPos + ySpeed; // new y position  = old y positon + speed (in y direction)
  
  // if the ball hit the edges, reverse the direction
  // with the frame
  if (xPos > (width - (diameter/2 + 40)) || xPos < (diameter/2 + 40)) {
    xSpeed *= -1;
  }
  if (yPos > (height - (diameter/2 + 40)) || yPos < (diameter/2 + 40)) {
    ySpeed *= -1;
  } 
}