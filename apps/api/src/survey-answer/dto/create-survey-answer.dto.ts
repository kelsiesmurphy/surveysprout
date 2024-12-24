import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyAnswerDto {
  @ApiProperty()
  surveyResponseId: number;

  @ApiProperty()
  surveyQuestionId: number;

  @ApiProperty({ required: false, nullable: true })
  textAnswer?: string;

  @ApiProperty({ required: false, nullable: true })
  sliderValue?: number;
}
