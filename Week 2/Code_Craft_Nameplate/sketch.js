function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textSize(48);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(112, 69, 204);
  noStroke();
  rect(width/2, height/2, 300, 300);
  fill(255, 255, 255);
  text("Code Craft", width/2, height/2);
}