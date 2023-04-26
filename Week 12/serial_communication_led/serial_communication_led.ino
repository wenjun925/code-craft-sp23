const int ledPin = 11; // choose any PWM compatible pin

void setup() {
  Serial.begin(9600);     // initialize serial communications
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  if (Serial.available() > 0) { // if there's serial data available
    int inData = Serial.read();   // read it
    analogWrite(ledPin, inData);
  }
}
