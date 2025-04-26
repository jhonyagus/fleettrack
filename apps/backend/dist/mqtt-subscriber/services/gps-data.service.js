import { insertGpsData } from "../repository/gps-data.repository";
export const handleGpsData = (data) => {
    try {
        const gpsData = JSON.parse(data);
        insertGpsData(gpsData);
    }
    catch (err) {
        console.error("Error processing message:", err);
    }
};
