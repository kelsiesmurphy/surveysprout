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
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';

@ApiSecurity('x-api-key')
@Controller('survey-answer')
@ApiTags('Survey Answers')
export class SurveyAnswerController {
  constructor(private readonly surveyAnswerService: SurveyAnswerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a survey answer' })
  @ApiCreatedResponse({ type: SurveyAnswerEntity })
  async create(
    @Body() createSurveyAnswerDto: CreateSurveyAnswerDto,
  ): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.create(createSurveyAnswerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all survey answers' })
  @ApiOkResponse({ type: SurveyAnswerEntity, isArray: true })
  async findAll(): Promise<SurveyAnswerModel[]> {
    return this.surveyAnswerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a survey answer' })
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async findOne(@Param('id') id: string): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a survey answer' })
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyAnswerDto: UpdateSurveyAnswerDto,
  ): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.update(+id, updateSurveyAnswerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a survey answer' })
  @ApiOkResponse({ type: SurveyAnswerEntity })
  async remove(@Param('id') id: string): Promise<SurveyAnswerModel> {
    return this.surveyAnswerService.remove(+id);
  }
}
