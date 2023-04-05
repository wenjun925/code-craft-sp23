const int ldrPin = A0;
const int ledPin = 8;
int ldrVal;

void setup() {
 pinMode(ldrPin, INPUT);
 pinMode(ledPin, OUTPUT);

 Serial.begin(9600);
}

void loop() {
  ldrVal = analogRead(ldrPin);
  if(ldrVal <= 700) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }

  Serial.println(ldrVal);
}
