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
  } else {
    digitalWrite(ledPin, LOW);
  }
}
