import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveyService {
  constructor(private prisma: PrismaService) {}

  create(createSurveyDto: CreateSurveyDto) {
    return this.prisma.survey.create({ data: createSurveyDto });
  }

  findAll() {
    return this.prisma.survey.findMany();
  }

  findOne(id: number) {
    return this.prisma.survey.findUnique({ where: { id } });
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return this.prisma.survey.update({
      where: { id },
      data: updateSurveyDto,
    });
  }

  remove(id: number) {
    return this.prisma.survey.delete({ where: { id } });
  }
}
