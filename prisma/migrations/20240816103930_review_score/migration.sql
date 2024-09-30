/*
  Warnings:

  - Added the required column `googleMapScore` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tabelogScore` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "googleMapScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tabelogScore" DOUBLE PRECISION NOT NULL;
