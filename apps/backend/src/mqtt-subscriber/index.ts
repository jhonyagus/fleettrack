import dotenv from 'dotenv';
import { subscribeToMqttTopic } from './services/mqtt-client.service';
import { handleGpsData } from './services/gps-data.service';

dotenv.config();
subscribeToMqttTopic(process.env.MQTT_TOPIC!, handleGpsData);
