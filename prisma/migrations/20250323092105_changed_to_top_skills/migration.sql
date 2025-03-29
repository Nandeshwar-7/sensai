/*
  Warnings:

  - You are about to drop the column `topskills` on the `IndustryInsight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "topskills",
ADD COLUMN     "topSkills" TEXT[];
