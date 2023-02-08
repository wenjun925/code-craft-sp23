// create a sketch in which a triangle moves from the left side of the canvas to the right.

// declaire variables
let x1, y1, x2, y2, x3, y3;
let moveSpeed;

function setup() {
  // create a canvas
  createCanvas(400, 400);
  // initialize variables
  x1 = width/6;
  y1 = height/2;
  x2 = x1 - 30;
  y2 = y1 - 15;
  x3 = x1 - 30;
  y3 = y1 + 15;
  moveSpeed = 10;
}

function draw() {
  // clear canvas
  background(240);
  //styling
  fill(0, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(3);
  // draw the triangle
  triangle(x1, y1, x2, y2, x3, y3);
  //change the variables to make the triangle move
  x1 += moveSpeed;
  x2 += moveSpeed;
  x3 += moveSpeed;
}