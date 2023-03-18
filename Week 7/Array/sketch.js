let numbers = [16, 65, 78, 125];

let words = ["I", "had", "a", "weird", "dream", "!"];

let num_words = [16, 65, 78, 125, "I", "had", "a", "weird", "dream", "!"];

let myArray = [];

function setup() {
  createCanvas(400, 400);
  print(numbers);
  print(words);
  print(num_words);
  print(myArray);
  
  myArray = [1, 0, 2, 4];
  print(myArray);
  
  // print(numbers[3]);
  // print(words[5]);
  // print(num_words[7]);
}

function draw() {
  background(220);
}