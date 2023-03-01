function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
}

function draw() {
  // rect(150, 150, 100, 100);
  customRect();
}

function customRect() {
  line(150, 150, 250, 150);
  line(150, 150, 150, 250);
  line(250, 150, 250, 250);
  line(150, 250, 250, 250);
}
