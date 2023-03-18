let numbers = [16, 65, 78, 125];

let words = ["I", "had", "a", "weird", "dream", "!"];

let num_words = [16, 65, 78, 125, "I", "had", "a", "weird", "dream", "!"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  fill(50);
  textSize(20);
  textAlign(CENTER);
  
  for (let i = 0; i < numbers.length; i++) {
    text(numbers[i], 50 + i * 85, height/2);
  }
  
  // for (let i = 0; i < words.length; i++) {
  //   text(words[i], width/2, 100 + i * 50);
  // }
}