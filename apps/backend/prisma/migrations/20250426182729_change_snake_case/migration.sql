/*
  Warnings:

  - You are about to drop the column `truckId` on the `gps_data` table. All the data in the column will be lost.
  - Added the required column `truck_id` to the `gps_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gps_data` DROP COLUMN `truckId`,
    ADD COLUMN `truck_id` VARCHAR(191) NOT NULL;
