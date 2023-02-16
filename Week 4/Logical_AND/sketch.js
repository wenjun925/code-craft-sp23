// create a variable for the changing x positon of a dividing line
let xPos = 0;

function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  // erase whatever on the left side of the line
  fill(240);
  rect(0, 0, xPos, height);
  
  // draw the dividing line
  stroke(0);
  line(xPos, 0, xPos, 400);
  
  // turn your mouse into a pen
  // draw something when your mouse is pressed
  noStroke();
  fill(237, 31, 97);
  if(mouseX > xPos && mouseIsPressed){
    ellipse(mouseX, mouseY, 20, 20);
  }

  // the line moves from the left to the right
  // and returns when it hits the right edge
  if(xPos > width) {
    xPos = 0;
  }  
  xPos += 0.8;
}