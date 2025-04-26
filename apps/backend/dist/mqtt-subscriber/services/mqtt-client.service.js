import mqtt from "mqtt";
// Connect to the MQTT broker
export const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL);
// Function to subscribe to a topic
export const subscribeToMqttTopic = (topic, onMessageCallback) => {
    mqttClient.on("connect", () => {
        console.log("Connected to MQTT broker");
        mqttClient.subscribe(topic, (err) => {
            if (err) {
                console.error("Failed to subscribe:", err);
            }
            else {
                console.log(`Subscribed to topic ${topic}`);
            }
        });
    });
    mqttClient.on("message", (topic, message) => {
        console.log(`Received message on topic ${topic}: ${message.toString()}`);
        if (topic === process.env.MQTT_TOPIC) {
            onMessageCallback(message.toString());
        }
    });
};
