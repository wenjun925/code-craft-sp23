// This was modified from Daniel Shiffman's tutorial on Perlin Noise Flow Field
// Link: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

// variables
let inc = 0.1; // step for xoff's and yoff's movement

let scl = 10; // scale of each unit in the flow field grid
let cols, row; // numbers of column and row in the flow field grid

let zoff = 0; // optional: turn 2D perlin noise into 3D perlin noise

// create an array of particles that are customized javascript objects, see 'particle.js'
let particles = [];

// create an array of vectors whose angles are determined by the output of noise(xoff, yoff)
let flowfield;

function setup() {
  createCanvas(500, 500);
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  // initialize an one-dimensional array to store values from the flow field grid
  flowfield = new Array(cols * rows);
  
  // create particles with self defined class - Particle()
  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
  
  // background(240);
}


function draw() {
  background(240);
  
  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    let yoff = 200;
    for (let y= 0; y <rows; y++) {
      //......
      
      
      

      yoff += inc;
    }
    xoff += inc;   
  }  
  // zoff += 0.01;
    
  // draw particles
  //   for (let i = 0; i < particles.length; i++) {
  //     particles[i].follow(flowfield);
  //     particles[i].update();
  //     particles[i].show();
  //     particles[i].edges();
  // }
}
  