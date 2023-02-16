function setup() {
  createCanvas(400, 400);
  background(240);
  noStroke();
}

function draw() {
  // top left
  if ( mouseX < width/2 && mouseY < height/2 ) {
    fill(255, 0, 0);
  }
  // bottom left
  if ( mouseX < width/2 && mouseY > height/2 ) {
    fill(0, 255, 0);
  }
  // top right
  if ( mouseX > width/2 && mouseY < height/2 ) {
    fill(0, 0, 255);
  }
  // bottom right
  if ( mouseX > width/2 && mouseY > height/2 ) {
    fill(180);
  }
  
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  fill(240, 15);
  rect(0, 0, width, height);
}