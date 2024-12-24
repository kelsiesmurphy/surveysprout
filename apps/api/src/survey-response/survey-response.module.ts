import { Module } from '@nestjs/common';
import { SurveyResponseService } from './survey-response.service';
import { SurveyResponseController } from './survey-response.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SurveyResponseController],
  providers: [SurveyResponseService],
  imports: [PrismaModule],
})
export class SurveyResponseModule {}
