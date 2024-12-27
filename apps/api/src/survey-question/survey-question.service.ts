import { Injectable } from '@nestjs/common';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SurveyQuestionService {
  constructor(private prisma: PrismaService) {}

  create(createSurveyQuestionDto: CreateSurveyQuestionDto) {
    return this.prisma.surveyQuestion.create({ data: createSurveyQuestionDto });
  }

  findAll() {
    return this.prisma.surveyQuestion.findMany();
  }

  findOne(id: number) {
    return this.prisma.surveyQuestion.findUnique({ where: { id } });
  }

  update(id: number, updateSurveyQuestionDto: UpdateSurveyQuestionDto) {
    return this.prisma.surveyQuestion.update({
      where: { id },
      data: updateSurveyQuestionDto,
    });
  }

  remove(id: number) {
    return this.prisma.surveyQuestion.delete({ where: { id } });
  }
}
