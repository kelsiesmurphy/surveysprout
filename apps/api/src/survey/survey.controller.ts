import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey as SurveyModel } from '@prisma/client';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { SurveyEntity } from './entities/survey.entity';

@ApiSecurity('x-api-key')
@Controller('survey')
@ApiTags('Surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a survey' })
  @ApiCreatedResponse({ type: SurveyEntity })
  async create(@Body() createSurveyDto: CreateSurveyDto): Promise<SurveyModel> {
    return this.surveyService.create(createSurveyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all surveys' })
  @ApiOkResponse({ type: SurveyEntity, isArray: true })
  async findAll(): Promise<SurveyModel[]> {
    return this.surveyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a survey' })
  @ApiOkResponse({ type: SurveyEntity })
  async findOne(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a survey' })
  @ApiOkResponse({ type: SurveyEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyDto: UpdateSurveyDto,
  ): Promise<SurveyModel> {
    return this.surveyService.update(+id, updateSurveyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a survey' })
  @ApiOkResponse({ type: SurveyEntity })
  async remove(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.remove(+id);
  }
}
