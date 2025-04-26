import { connect } from "mqtt";
import { faker } from "@faker-js/faker";

// MQTT broker configuration
const MQTT_BROKER_URL = "mqtt://localhost:1883";
const MQTT_TOPIC = "fleettrack/gps";

// Connect to MQTT broker
const client = connect(MQTT_BROKER_URL);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  // Start sending messages every 10 seconds
  setInterval(sendRandomGPSData, 10000);
});

// Function to generate and send random GPS data
function sendRandomGPSData() {
  const [latitude, longitude] = faker.location.nearbyGPSCoordinate();
  const gpsData = {
    truckId: faker.string.uuid(),
    latitude,
    longitude,
    speed: faker.number.int({ min: 0, max: 120 }), // Speed in km/h
    timestamp: new Date().toISOString(),
  };

  const message = JSON.stringify(gpsData);
  client.publish(MQTT_TOPIC, message);
  console.log("Published GPS Data:", message);
}

client.on("error", (err) => {
  console.error("MQTT connection error:", err);
});
