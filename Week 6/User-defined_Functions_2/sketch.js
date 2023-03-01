function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
}

function draw() {
  // rect(150, 150, 100, 100);
  // customRect();
  customRect(150, 150, 100, 100);
}

function customRect(xPos, yPos, rectWidth, rectHeight) {
  line(xPos, yPos, xPos+rectWidth, yPos);
  line(xPos, yPos, xPos, yPos+rectHeight);
  line(xPos+rectWidth, yPos, xPos+rectWidth, yPos+rectHeight);
  line(xPos, yPos+rectHeight, xPos+rectWidth, yPos+rectHeight);
}

// function customRect() {
//   line(150, 150, 250, 150);
//   line(150, 150, 150, 250);
//   line(250, 150, 250, 250);
//   line(150, 250, 250, 250);
// }