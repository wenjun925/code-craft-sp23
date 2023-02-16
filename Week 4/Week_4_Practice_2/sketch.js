let x = 250;
let y = 250;
let px = 250;
let py = 250;

function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = 255;
  
  stroke(r, g, b);
  strokeWeight(1);
  line(px, py, x, y);
  
  px = x;
  py = y;
  
  x = constrain(x + random(-10, 10), 0 ,width);
  y = constrain(y + random(-10, 10), 0, height);  
}