-- AlterTable
ALTER TABLE "Survey" ALTER COLUMN "deletedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SurveyResponse" ALTER COLUMN "deletedAt" DROP NOT NULL;
