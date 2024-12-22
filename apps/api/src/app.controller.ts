import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SurveyQuestion as SurveyQuestionModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('survey_questions')
  async getAllSurveyQuestions(): Promise<SurveyQuestionModel[]> {
    return this.appService.surveyQuestion.findMany();
  }
}
