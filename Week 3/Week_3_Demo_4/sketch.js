function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  if(mouseX > 250) {
    fill(255, 0, 0);
    ellipse(width/4, height/2, 100, 100);
  } else {
    fill(0, 0, 255);
    ellipse(width* (3/4), height/2, 100, 100);
  }
}