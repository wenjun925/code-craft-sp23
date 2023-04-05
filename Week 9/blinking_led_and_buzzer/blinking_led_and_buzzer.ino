const int buttonPin = 4;
const int ledPin = 8;
const int buzzerPin = 7;
bool buttonState;
bool ledState = LOW;

unsigned long previousMillis = 0;
unsigned long interval = 2000;

void setup() {
 pinMode(buttonPin, INPUT);
 pinMode(ledPin, OUTPUT);
 pinMode(buzzerPin, OUTPUT);

//  Serial.begin(9600);
}

void loop() {
  unsigned long currentMillis = millis();

  buttonState = digitalRead(buttonPin);
  
  if (buttonState == HIGH) {
    if (ledState == LOW) {
        if (currentMillis - previousMillis > interval) {
          ledState = HIGH;
          previousMillis = currentMillis;
        } else {
          ledState = LOW;
        }      
    } 
    if (ledState == HIGH) {
        if (currentMillis - previousMillis > interval) {
          ledState = LOW;
          previousMillis = currentMillis;
        } else {
          ledState = HIGH;
        } 
    }
    digitalWrite(ledPin, ledState);  
    digitalWrite(buzzerPin, HIGH);
  }

  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
    digitalWrite(buzzerPin, LOW);
  }

  // Serial.println(currentMillis);
  // Serial.println(previousMillis);
}
