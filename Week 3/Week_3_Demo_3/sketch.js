function setup() {
  // try to set the canvas to different sizes
  // reminder: createCanvas() can only be called once in setup()       
  createCanvas(400, 400);
  // createCanvas(600, 400);
  // createCanvas(400, 800);
  // createCanvas(700, 700);
}

function draw() {
  background(240);
  ellipse(width/2, height/2, width, height);
}