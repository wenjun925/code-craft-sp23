function setup() {
  createCanvas(400, 400);
  background(240);
  noStroke();
}

function draw() {
  if ( mouseX < width/2) {
    if (mouseY < height/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY < height/2) {
      fill(0, 0, 255);
    } else {
      fill(180);
    }
  }
  
  if(mouseIsPressed === true){
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  fill(240, 15);
  rect(0, 0, width, height);
}