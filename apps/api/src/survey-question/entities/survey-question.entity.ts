import { QuestionType, SurveyQuestion } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyQuestionEntity implements SurveyQuestion {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  deletedAt: Date;

  @ApiProperty()
  surveyId: number;

  @ApiProperty()
  fieldName: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  questionType: QuestionType;

  @ApiProperty()
  options: object[];
}
