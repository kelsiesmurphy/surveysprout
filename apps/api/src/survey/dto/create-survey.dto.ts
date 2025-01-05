import { ApiProperty } from '@nestjs/swagger';
import { SurveyType } from '@prisma/client';

export class CreateSurveyDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  metadata?: object;

  @ApiProperty({ required: false })
  theme?: object;

  @ApiProperty()
  surveyType: SurveyType;

  @ApiProperty()
  userId: string;
}
