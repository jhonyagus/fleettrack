import prisma from "../../libs/prisma";
export const insertGpsData = async (gpsDataFromMqtt) => {
    try {
        const { truckId, latitude, longitude, speed, timestamp } = gpsDataFromMqtt;
        await prisma.gpsData.create({
            data: {
                truckId,
                latitude,
                longitude,
                speed,
                timestamp: new Date(timestamp),
            },
        });
        console.log(`Inserted GPS data for truck ${truckId}`);
    }
    catch (err) {
        console.error("Error inserting data:", err);
    }
};
