// This was modified from Daniel Shiffman's tutorial on 2D Noise in The Coding Train
// Link: https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=5&ab_channel=TheCodingTrain

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(240);
  loadPixels();
  
  let xoff = 0;
  for (let x = 0; x < width; x++) {
    let yoff = 0;
    for (let y= 0; y <height; y++) {
      let index = (x + y*width) * 4; 
      let r = noise(xoff, yoff) * 255;
      // uncomment the line below to see the difference between random() and noise()
      // let r = random(0, 255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      yoff += 0.01;
    }
    xoff += 0.01;
  }
  
  updatePixels();
}