// use a boolean variable to store an object's state
// here has the ellipse ever reached the bottom?  yes: flag = true / no: flag = false

let flag = false;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  
  fill(255, 100, 100);
  ellipse(mouseX, mouseY, 50, 50);
   
  if (mouseY > height) {
    flag = true;
  }
  
  if (flag) {
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(0);
    text('YOU WIN', width/2, height/2);
  } 
}