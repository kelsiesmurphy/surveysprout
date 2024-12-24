import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionController } from './survey-question.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SurveyQuestionController],
  providers: [SurveyQuestionService],
  imports: [PrismaModule],
})
export class SurveyQuestionModule {}
