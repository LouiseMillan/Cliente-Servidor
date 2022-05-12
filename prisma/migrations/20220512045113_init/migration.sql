/*
  Warnings:

  - Added the required column `lastUpdated` to the `MissionCommander` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MissionCommander" ADD COLUMN     "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL;
