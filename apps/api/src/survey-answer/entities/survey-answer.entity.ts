import { SurveyAnswer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyAnswerEntity implements SurveyAnswer {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  @ApiProperty()
  surveyResponseId: number;

  @ApiProperty()
  surveyQuestionId: number;

  @ApiProperty({ required: false, nullable: true })
  textAnswer: string;

  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true })
  sliderValue: number;
}
