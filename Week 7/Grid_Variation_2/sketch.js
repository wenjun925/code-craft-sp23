function setup() {
  createCanvas(400, 400);
  background(240);
  fill(50);
  noStroke();
  noLoop();
}

function draw() {
  for (let x = 15; x < width-15; x += 15) {
    for (let y = 15; y < height -15; y += 15) {
      let xOffset = map (y, 15, height-15, -15, 15);
      rect(x+xOffset, y, 10, 10);
    }
  }
}


