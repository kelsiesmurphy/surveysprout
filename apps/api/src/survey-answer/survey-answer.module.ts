import { Module } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { SurveyAnswerController } from './survey-answer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SurveyAnswerController],
  providers: [SurveyAnswerService],
  imports: [PrismaModule],
})
export class SurveyAnswerModule {}
