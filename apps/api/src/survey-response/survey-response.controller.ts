import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyResponseService } from './survey-response.service';
import { CreateSurveyResponseDto } from './dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { SurveyResponse as SurveyResponseModel } from '@prisma/client';
import { SurveyResponseEntity } from './entities/survey-response.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';

@ApiSecurity('x-api-key')
@Controller('survey-response')
@ApiTags('Survey Responses')
export class SurveyResponseController {
  constructor(private readonly surveyResponseService: SurveyResponseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a survey response' })
  @ApiCreatedResponse({ type: SurveyResponseEntity })
  async create(
    @Body() createSurveyResponseDto: CreateSurveyResponseDto,
  ): Promise<SurveyResponseModel> {
    return this.surveyResponseService.create(createSurveyResponseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all survey responses' })
  @ApiOkResponse({ type: SurveyResponseEntity, isArray: true })
  async findAll(): Promise<SurveyResponseModel[]> {
    return this.surveyResponseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a survey response' })
  @ApiOkResponse({ type: SurveyResponseEntity })
  async findOne(@Param('id') id: string): Promise<SurveyResponseModel> {
    return this.surveyResponseService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a survey response' })
  @ApiOkResponse({ type: SurveyResponseEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSurveyResponseDto: UpdateSurveyResponseDto,
  ): Promise<SurveyResponseModel> {
    return this.surveyResponseService.update(+id, updateSurveyResponseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a survey response' })
  @ApiOkResponse({ type: SurveyResponseEntity })
  async remove(@Param('id') id: string): Promise<SurveyResponseModel> {
    return this.surveyResponseService.remove(+id);
  }
}
