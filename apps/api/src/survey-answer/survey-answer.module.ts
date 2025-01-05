import { Module } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { SurveyAnswerController } from './survey-answer.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SurveyAnswerController],
  providers: [SurveyAnswerService, PrismaService],
  imports: [],
})
export class SurveyAnswerModule {}
