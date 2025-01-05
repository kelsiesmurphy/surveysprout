import { Survey, SurveyType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyEntity implements Survey {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  deletedAt: Date;

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  metadata: object;

  @ApiProperty({ required: false, nullable: true })
  theme: object;

  @ApiProperty()
  surveyType: SurveyType;

  @ApiProperty()
  userId: string;
}
