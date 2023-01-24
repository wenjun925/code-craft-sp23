// Set up canvas size, background color, "pen" color, "pen" thickness, how many times it's going to run...
function setup() {
  createCanvas(1000, 500);
  background(250, 250, 250, 50);
  fill(50, 60);
  stroke(50, 40);
  strokeWeight(1);
  noLoop();
}

// Draw lines
function draw() {
  // Number of points
  let num_points = 50;
  
  // Place the points at random
  let points = [];
  for (let i = 0; i < num_points; i++) {
    points[i] = [2];
    points[i][0] = random(width);
    points[i][1] = random(height);
    ellipse(points[i][0], points[i][1], 2, 2);
  }
  
  // Connect all the points with straight lines
  for (let i = 0; i < num_points; i++) {
    for (let j = 1; j < num_points; j++) {
      line(
        points[i][0], points[i][1],
        points[(i + j) % num_points][0],
        points[(i + j) % num_points][1]
      );

    }
  }
}