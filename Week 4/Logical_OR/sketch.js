let xPos_1 = 0;
let xPos_2 = 400;

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(240);

  // draw two lines
  stroke(255, 0, 0);
  line(xPos_1, 0, xPos_1, 400);
  line(xPos_2, 0, xPos_2, 400);
  
  fill(0);
  rect(0, 0, xPos_1, height);
  rect(xPos_2, 0, width-xPos_2, height);
  
  // a circle is following the mouse
  // when the mouse is on the left side of line 1
  // OR on the right side of line 2
  noStroke();
  fill(237, 31, 97);
  if(mouseX < xPos_1 || mouseX > xPos_2){
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  if(xPos_1 > width) {
    xPos_1 = 0;
  }  
  if(xPos_2 < 0) {
    xPos_2 = width;
  }
  
  xPos_1 += 0.8;
  xPos_2 -= 0.8; 
}