const int buzzerPin = 9;

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) { // if there's serial data available
    int inData = Serial.read();   // read it
    if(inData == 'C') {
      tone(buzzerPin, 261.63, 1000);
    }
    if(inData == 'D') {
      tone(buzzerPin, 293.66, 1000);
    }
    if(inData == 'E') {
      tone(buzzerPin, 329.63, 1000);
    }
    if(inData == 'F') {
      tone(buzzerPin, 349.23, 1000);
    }
    if(inData == 'G') {
      tone(buzzerPin, 392, 1000);
    }
    if(inData == 'A') {
      tone(buzzerPin, 440, 1000);
    }
    if(inData == 'B') {
      tone(buzzerPin, 493.88, 1000);
    }
    if(inData == 'c') {
      tone(buzzerPin, 523.25, 1000);
    }
  }
}
