const int potPin = A0;

void setup() {
  // establish serial communication
  Serial.begin(9600);
  // this line is optional
  pinMode(potPin, INPUT);
}

void loop() {
  int potVal = analogRead(potPin);
  // map the value we read from potPin to (0, 255) in order to fit in 1 byte
  int mappedPotVal = map(potVal, 0 , 1023, 0, 255);
  // send it to the serial port
  Serial.write(mappedPotVal);
  // short delay for the input voltage to stabilize
  delay(100); 
}
