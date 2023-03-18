function setup() {
  createCanvas(400, 400);
  // background(240);
  fill(50);
  noStroke();
  // noLoop();
}
let zoff = 0;

function draw() {
  background(240);
  let xoff = 0;
  for (let x = 15; x < width-15; x += 15) {
    let yoff = 0;
    for (let y = 15; y < height -15; y += 15) {
      let n = noise(xoff, yoff, zoff) * 15;
      rect(x, y, n, n);
      yoff += 0.1;
    }
    xoff += 0.1;
  }  
  zoff += 0.01;
}


