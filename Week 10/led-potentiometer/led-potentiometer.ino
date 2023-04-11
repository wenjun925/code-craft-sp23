const int ledPin = 9;
const int potPin = A0;

void setup() {
  pinMode(potPin, INPUT);
  pinMode(ledPin, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(potPin);
  int brightness = map(potValue, 0, 1023, 0, 255);
  analogWrite(ledPin, brightness);

  Serial.println(brightness);
}
