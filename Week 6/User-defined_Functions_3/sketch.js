function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
}

function draw() {
  customRect(150, 150, 100, 100);
  customRect(100, 120, 60, 200);
  customRect(130, 250, 250, 100);
  customRect(300, 200, 50, 100);
  customRect(250, 100, 100, 280);
}

function customRect(xPos, yPos, rectWidth, rectHeight) {
  line(xPos, yPos, xPos+rectWidth, yPos);
  line(xPos, yPos, xPos, yPos+rectHeight);
  line(xPos+rectWidth, yPos, xPos+rectWidth, yPos+rectHeight);
  line(xPos, yPos+rectHeight, xPos+rectWidth, yPos+rectHeight);
}