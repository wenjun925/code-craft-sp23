function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(240);
  
  for (let i = 0; i < width; i++) {
    let lineHeight = height - map(random(), 0, 1, 0, height);
    line(i, lineHeight, i, height);
    
    print(lineHeight);
  } 
}