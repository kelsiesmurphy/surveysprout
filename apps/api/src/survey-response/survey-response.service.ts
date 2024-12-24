import { Injectable } from '@nestjs/common';
import { CreateSurveyResponseDto } from './dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SurveyResponseService {
  constructor(private prisma: PrismaService) {}

  create(createSurveyResponseDto: CreateSurveyResponseDto) {
    return this.prisma.surveyResponse.create({ data: createSurveyResponseDto });
  }

  findAll() {
    return this.prisma.surveyResponse.findMany();
  }

  findOne(id: number) {
    return this.prisma.surveyResponse.findUnique({ where: { id } });
  }

  update(id: number, updateSurveyResponseDto: UpdateSurveyResponseDto) {
    return this.prisma.surveyResponse.update({
      where: { id },
      data: updateSurveyResponseDto,
    });
  }

  remove(id: number) {
    return this.prisma.surveyResponse.delete({ where: { id } });
  }
}
