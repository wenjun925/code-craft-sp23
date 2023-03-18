function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
  noLoop();
}

function draw() {
  for (let i = 0; i < 50; i++) {
    customRect(random(0, width), random(0, height), random(0, 300), random(0, 300));
  }
}

function customRect(xPos, yPos, rectWidth, rectHeight) {
  line(xPos, yPos, xPos+rectWidth, yPos);
  line(xPos, yPos, xPos, yPos+rectHeight);
  line(xPos+rectWidth, yPos, xPos+rectWidth, yPos+rectHeight);
  line(xPos, yPos+rectHeight, xPos+rectWidth, yPos+rectHeight);
}