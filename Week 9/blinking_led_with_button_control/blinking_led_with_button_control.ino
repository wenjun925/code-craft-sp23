const int buttonPin = 4;
const int ledPin = 8;
bool buttonState;

void setup() {
  // put your setup code here, to run once:
 pinMode(buttonPin, INPUT);
 pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  buttonState = digitalRead(buttonPin);
  if(buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(2000);
    digitalWrite(ledPin, LOW);
    delay(2000);
  } 
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
  }
}
