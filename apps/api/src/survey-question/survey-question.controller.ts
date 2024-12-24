import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { SurveyQuestion as SurveyQuestionModel } from '@prisma/client';
import { SurveyQuestionEntity } from './entities/survey-question.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';

@ApiSecurity('x-api-key')
@Controller('survey-question')
@ApiTags('Survey Questions')
export class SurveyQuestionController {
  constructor(private readonly surveyQuestionService: SurveyQuestionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a survey question' })
  @ApiCreatedResponse({ type: SurveyQuestionEntity })
  async create(
    @Body() createSurveyQuestionDto: CreateSurveyQuestionDto,
  ): Promise<SurveyQuestionModel> {
    return this.surveyQuestionService.create(createSurveyQuestionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all survey questions' })
  @ApiOkResponse({ type: SurveyQuestionEntity, isArray: true })
  async findAll(): Promise<SurveyQuestionModel[]> {
    return this.surveyQuestionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a survey question' })
  @ApiOkResponse({ type: SurveyQuestionEntity })
  async findOne(@Param('id') id: string): Promise<SurveyQuestionModel> {
    return this.surveyQuestionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a survey question' })
  @ApiOkResponse({ type: SurveyQuestionEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyQuestionDto: UpdateSurveyQuestionDto,
  ): Promise<SurveyQuestionModel> {
    return this.surveyQuestionService.update(+id, updateSurveyQuestionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a survey question' })
  @ApiOkResponse({ type: SurveyQuestionEntity })
  async remove(@Param('id') id: string): Promise<SurveyQuestionModel> {
    return this.surveyQuestionService.remove(+id);
  }
}
