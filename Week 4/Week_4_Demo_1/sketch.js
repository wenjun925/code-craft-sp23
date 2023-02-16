function setup() {
  createCanvas(400, 400);
  noStroke();
  background(240);
}

function draw() {
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = 255;
  
  fill(r, g, b);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  fill(240, 40);
  rect(0, 0, width, height);
}