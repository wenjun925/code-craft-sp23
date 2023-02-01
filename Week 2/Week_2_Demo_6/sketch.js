let rectWidth = 30;
let rectHeight = 30;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  rect(100, 100, rectWidth, rectHeight);
  
  if (rectWidth < 200) {
    rectWidth += 1;
  }
 
  rectHeight += 1;
}