function setup() {
  createCanvas(400, 400);
  background(240);
  
  noFill();
  stroke(237, 34, 93);
  strokeWeight(5);
  
  rectMode(CENTER);
  
  noLoop();
}

function draw() {
  for (let i = 0; i < 3; i++) {
    let xPos = 80 + i * 120;
    drawShape(xPos, height/2);
  }
}

function drawShape(x, y) {
  push();
  translate(x, y);
  rotate(TWO_PI * 1/8);
  rect(0, 0, 100, 50);
  rotate(TWO_PI * 2/8);
  rect(0, 0, 100, 50);
  ellipse(0, 0, 25, 25);
  pop();
}