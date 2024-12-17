import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SurveyQuestion as SurveyQuestionModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('survey_questions')
  async getAllSurveyQuestions(): Promise<SurveyQuestionModel[]> {
    return this.prismaService.surveyQuestion.findMany();
  }
}
