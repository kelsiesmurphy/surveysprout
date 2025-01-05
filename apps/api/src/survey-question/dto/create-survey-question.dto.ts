import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';

export class CreateSurveyQuestionDto {
  @ApiProperty()
  surveyId: string;

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
