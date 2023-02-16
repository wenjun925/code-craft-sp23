let mouseX_mapped;

function setup() {
  // set canvas's width to 800
  createCanvas(800, 800);
}

function draw() {
  // set the background grayscale value
  // to a mapped value of mouseX
  mouseX_mapped = map(mouseX, 0, width, 0, 255);
  background(mouseX_mapped);
}