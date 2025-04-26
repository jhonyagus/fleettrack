/*
  Warnings:

  - You are about to drop the `GpsData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Truck` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `GpsData`;

-- DropTable
DROP TABLE `Truck`;

-- CreateTable
CREATE TABLE `truck` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gps_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `truckId` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `speed` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
