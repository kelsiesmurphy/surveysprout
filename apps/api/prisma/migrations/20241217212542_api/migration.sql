-- CreateEnum
CREATE TYPE "ExampleBusinessProductSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('Options', 'Text', 'Slider');

-- CreateEnum
CREATE TYPE "SurveyType" AS ENUM ('POSTPURCHASE');

-- CreateTable
CREATE TABLE "Survey" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "title" VARCHAR(255) NOT NULL,
    "metadata" JSONB NOT NULL,
    "surveyType" "SurveyType" NOT NULL DEFAULT 'POSTPURCHASE',

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SurveyQuestion" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "surveyId" INTEGER NOT NULL,
    "fieldName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL,
    "options" JSONB[],

    CONSTRAINT "SurveyQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SurveyResponse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "surveyId" INTEGER NOT NULL,

    CONSTRAINT "SurveyResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SurveyAnswer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "surveyResponseId" INTEGER NOT NULL,
    "surveyQuestionId" INTEGER NOT NULL,
    "textAnswer" TEXT,
    "sliderValue" INTEGER,

    CONSTRAINT "SurveyAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExampleBusiness" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "theme" JSONB NOT NULL,
    "logoUrl" TEXT NOT NULL,

    CONSTRAINT "ExampleBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExampleBusinessProduct" (
    "id" SERIAL NOT NULL,
    "exampleBusinessId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "size" "ExampleBusinessProductSize",
    "image" TEXT,

    CONSTRAINT "ExampleBusinessProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterContact" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsletterContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterContact_email_key" ON "NewsletterContact"("email");

-- AddForeignKey
ALTER TABLE "SurveyQuestion" ADD CONSTRAINT "SurveyQuestion_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyAnswer" ADD CONSTRAINT "SurveyAnswer_surveyQuestionId_fkey" FOREIGN KEY ("surveyQuestionId") REFERENCES "SurveyQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyAnswer" ADD CONSTRAINT "SurveyAnswer_surveyResponseId_fkey" FOREIGN KEY ("surveyResponseId") REFERENCES "SurveyResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExampleBusinessProduct" ADD CONSTRAINT "ExampleBusinessProduct_exampleBusinessId_fkey" FOREIGN KEY ("exampleBusinessId") REFERENCES "ExampleBusiness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
