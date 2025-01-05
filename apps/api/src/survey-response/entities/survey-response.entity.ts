import { SurveyResponse } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyResponseEntity implements SurveyResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  deletedAt: Date;

  @ApiProperty()
  surveyId: string;
}
