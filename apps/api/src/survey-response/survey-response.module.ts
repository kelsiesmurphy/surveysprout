import { Module } from '@nestjs/common';
import { SurveyResponseService } from './survey-response.service';
import { SurveyResponseController } from './survey-response.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SurveyResponseController],
  providers: [SurveyResponseService, PrismaService],
  imports: [],
})
export class SurveyResponseModule {}
