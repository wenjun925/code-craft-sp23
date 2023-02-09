function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  noFill();
  ellipse(mouseX, mouseY, 50, 50);
  
  print(mouseX, mouseY);
}