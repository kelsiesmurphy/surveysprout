import { Injectable } from '@nestjs/common';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SurveyAnswerService {
  constructor(private prisma: PrismaService) {}

  create(createSurveyAnswerDto: CreateSurveyAnswerDto) {
    return this.prisma.surveyAnswer.create({ data: createSurveyAnswerDto });
  }

  findAll() {
    return this.prisma.surveyAnswer.findMany();
  }

  findOne(id: number) {
    return this.prisma.surveyAnswer.findUnique({ where: { id } });
  }

  update(id: number, updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    return this.prisma.surveyAnswer.update({
      where: { id },
      data: updateSurveyAnswerDto,
    });
  }

  remove(id: number) {
    return this.prisma.surveyAnswer.delete({ where: { id } });
  }
}
