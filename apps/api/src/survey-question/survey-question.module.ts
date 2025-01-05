import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionController } from './survey-question.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SurveyQuestionController],
  providers: [SurveyQuestionService, PrismaService],
  imports: [],
})
export class SurveyQuestionModule {}
