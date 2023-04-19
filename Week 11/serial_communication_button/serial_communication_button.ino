const int buttonPin = 9;

void setup() {
  // establish serial communication
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    // send it to the serial port
    Serial.println("ON");
  }

  if (buttonState == LOW) {
    // send it to the serial port-
    Serial.println("OFF");
  }
  
  // short delay for the input voltage to stabilize
  delay(100); 
}
