//  choose two different shapes and create a sketch where these two shapes are moving in different ways.
// declare variables
let ellipse_x, ellipse_y, rect_x, rect_y;

function setup() {
  // create a canvas
  createCanvas(400, 400);
  // initialize variables
  ellipse_x = 100;
  ellipse_y = 100;
  rect_x = 300;
  rect_y = 300;
}

function draw() {
  // erase the canvas
  background(240);
  // draw two different shapes: an ellipse and a rectangle
  ellipse(ellipse_x, ellipse_y, 50, 50);
  rect(rect_x, rect_y, 50, 50);
  //change the variables
  ellipse_x++;
  ellipse_y += 2;
  rect_x--;
  rect_y -= 2;
}