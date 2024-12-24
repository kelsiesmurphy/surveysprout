import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { SurveyAnswer as SurveyAnswerModel } from '@prisma/client';
import { SurveyAnswerEntity } from './entities/survey-answer.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('survey-answer')
@ApiTags('Survey Answers')
export class SurveyAnswerController {
  constructor(private readonly surveyAnswerService: SurveyAnswerService) {}

  @Post()
  @ApiCreatedResponse({ type: SurveyAnswerEntity })
  async create(
    @Body() createSurveyAnswerDto: CreateSurveyAnswerDto,
  ): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.create(createSurveyAnswerDto);
  }

  @Get()
  @ApiOkResponse({ type: SurveyAnswerEntity, isArray: true })
  async findAll(): Promise<SurveyAnswerModel[]> {
    return this.surveyAnswerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async findOne(@Param('id') id: string): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyAnswerDto: UpdateSurveyAnswerDto,
  ): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.update(+id, updateSurveyAnswerDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async remove(@Param('id') id: string): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.remove(+id);
  }
}
