const int trigPin = 9;
const int echoPin = 10;
float duration = 0;
float distance = 0;

const int led_1 = 3;
const int led_2 = 4;
const int led_3 = 5;
const int led_4 = 6;
const int led_5 = 7;

const int buzzerPin = 8;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(led_1, OUTPUT);
  pinMode(led_2, OUTPUT);
  pinMode(led_3, OUTPUT);
  pinMode(led_4, OUTPUT);
  pinMode(led_5, OUTPUT);

  pinMode(buzzerPin, OUTPUT);

  Serial.begin(9600);
}

void loop() {
 // Measure Distance
 // clear the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // generate a pulse to trigPin
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // read the echoPin to measure the time between the emission and reception 
  duration = pulseIn(echoPin, HIGH);
  
  // calculate the distance
  distance = duration * 0.034 / 2;
  
  // print values in serial monitor
  Serial.print("Distance: ");
  Serial.println(distance);

  // Turn on the LEDs and activate the buzzer
  if (distance >=50 && distance < 60) {
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, LOW);
    digitalWrite(led_3, LOW);
    digitalWrite(led_4, LOW);
    digitalWrite(led_5, LOW);
    digitalWrite(buzzerPin, LOW);
  } else if (distance >= 40 && distance < 50) {
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, HIGH);
    digitalWrite(led_3, LOW);
    digitalWrite(led_4, LOW);
    digitalWrite(led_5, LOW);
    digitalWrite(buzzerPin, LOW);
  } else if (distance >= 30 && distance < 40) {
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, HIGH);
    digitalWrite(led_3, HIGH);
    digitalWrite(led_4, LOW);
    digitalWrite(led_5, LOW);
    digitalWrite(buzzerPin, LOW);
  } else if (distance >=20 && distance < 30) {
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, HIGH);
    digitalWrite(led_3, HIGH);
    digitalWrite(led_4, HIGH);
    digitalWrite(led_5, LOW);
    digitalWrite(buzzerPin, LOW);
  } else if (distance < 20) {
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, HIGH);
    digitalWrite(led_3, HIGH);
    digitalWrite(led_4, HIGH);
    digitalWrite(led_5, HIGH);
    digitalWrite(buzzerPin, HIGH);
  } else {
    digitalWrite(led_1, LOW);
    digitalWrite(led_2, LOW);
    digitalWrite(led_3, LOW);
    digitalWrite(led_4, LOW);
    digitalWrite(led_5, LOW);
    digitalWrite(buzzerPin, LOW);
  }

  delay(200);
}
