/*
  Warnings:

  - The primary key for the `ExampleBusiness` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExampleBusinessProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `NewsletterContact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Survey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'USER');

-- DropForeignKey
ALTER TABLE "ExampleBusinessProduct" DROP CONSTRAINT "ExampleBusinessProduct_exampleBusinessId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "SurveyQuestion" DROP CONSTRAINT "SurveyQuestion_surveyId_fkey";

-- DropForeignKey
ALTER TABLE "SurveyResponse" DROP CONSTRAINT "SurveyResponse_surveyId_fkey";

-- AlterTable
ALTER TABLE "ExampleBusiness" DROP CONSTRAINT "ExampleBusiness_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExampleBusiness_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExampleBusiness_id_seq";

-- AlterTable
ALTER TABLE "ExampleBusinessProduct" DROP CONSTRAINT "ExampleBusinessProduct_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "exampleBusinessId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExampleBusinessProduct_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExampleBusinessProduct_id_seq";

-- AlterTable
ALTER TABLE "NewsletterContact" DROP CONSTRAINT "NewsletterContact_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "NewsletterContact_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "NewsletterContact_id_seq";

-- AlterTable
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_pkey",
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Survey_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Survey_id_seq";

-- AlterTable
ALTER TABLE "SurveyQuestion" ALTER COLUMN "surveyId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SurveyResponse" ALTER COLUMN "surveyId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hashedRefreshToken" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Session";

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyQuestion" ADD CONSTRAINT "SurveyQuestion_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExampleBusinessProduct" ADD CONSTRAINT "ExampleBusinessProduct_exampleBusinessId_fkey" FOREIGN KEY ("exampleBusinessId") REFERENCES "ExampleBusiness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
