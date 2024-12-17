/*
  Warnings:

  - You are about to drop the column `questionOptionId` on the `SurveyAnswer` table. All the data in the column will be lost.
  - You are about to drop the `QuestionOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuestionOption" DROP CONSTRAINT "QuestionOption_surveyQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "SurveyAnswer" DROP CONSTRAINT "SurveyAnswer_questionOptionId_fkey";

-- AlterTable
ALTER TABLE "SurveyAnswer" DROP COLUMN "questionOptionId";

-- AlterTable
ALTER TABLE "SurveyQuestion" ADD COLUMN     "options" JSONB[];

-- DropTable
DROP TABLE "QuestionOption";
