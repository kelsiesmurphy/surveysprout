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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SurveyEntity } from './entities/survey.entity';

@Controller('survey')
@ApiTags('Surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  @ApiCreatedResponse({ type: SurveyEntity })
  async create(@Body() createSurveyDto: CreateSurveyDto): Promise<SurveyModel> {
    return this.surveyService.create(createSurveyDto);
  }

  @Get()
  @ApiOkResponse({ type: SurveyEntity, isArray: true })
  async findAll(): Promise<SurveyModel[]> {
    return this.surveyService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SurveyEntity })
  async findOne(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SurveyEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyDto: UpdateSurveyDto,
  ): Promise<SurveyModel> {
    return this.surveyService.update(+id, updateSurveyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SurveyEntity })
  async remove(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.remove(+id);
  }
}
