import { Survey, SurveyType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyEntity implements Survey {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  metadata: object;

  @ApiProperty()
  surveyType: SurveyType;
}
