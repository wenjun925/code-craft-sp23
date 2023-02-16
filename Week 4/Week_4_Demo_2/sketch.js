let x = 250;
let y = 250;

function setup() {
  createCanvas(400, 400);
  noStroke();
  background(240);
}

function draw() {
  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = 255;
  
  fill(r, g, b, 50);
  ellipse(x, y, 10, 10);
  
  x = constrain(x + random(-15, 15), 0 ,width);
  y = constrain(y + random(-15, 15), 0, height);
  
}