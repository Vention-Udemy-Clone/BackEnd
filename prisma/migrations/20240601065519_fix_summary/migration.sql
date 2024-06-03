/*
  Warnings:

  - You are about to drop the column `summ` on the `LessonSummary` table. All the data in the column will be lost.
  - Added the required column `summary` to the `LessonSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonSummary" DROP COLUMN "summ",
ADD COLUMN     "summary" TEXT NOT NULL;
