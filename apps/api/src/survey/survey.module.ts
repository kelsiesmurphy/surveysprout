import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService],
  imports: [PrismaModule],
})
export class SurveyModule {}
