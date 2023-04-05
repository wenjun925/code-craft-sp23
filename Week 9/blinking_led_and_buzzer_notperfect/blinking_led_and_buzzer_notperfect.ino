const int buttonPin = 4;
const int ledPin = 8;
bool buttonState;
// declare a variable "buzzerPin"
// ...

void setup() {
  // put your setup code here, to run once:
 pinMode(buttonPin, INPUT);
 pinMode(ledPin, OUTPUT);
 // set buzzerPin's mode
 // ...
}

void loop() {
  // put your main code here, to run repeatedly:
  buttonState = digitalRead(buttonPin);
  if(buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(2000);
    digitalWrite(ledPin, LOW);
    delay(2000);
    // turn on the buzzer
    // ...
  } 
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
    // turn off the buzzer
    // ...
  }
}
