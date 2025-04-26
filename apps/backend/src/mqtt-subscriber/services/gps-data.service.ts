import { IGpsData } from "../models/gps-data.interface";
import { insertGpsData } from "../repository/gps-data.repository";

export const handleGpsData = (data: string) => {
  try {
    const gpsData: IGpsData = JSON.parse(data);
    insertGpsData(gpsData);
  } catch (err) {
    console.error("Error processing message:", err);
  }
};
