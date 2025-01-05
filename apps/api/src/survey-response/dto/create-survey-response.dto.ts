import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyResponseDto {
  @ApiProperty()
  surveyId: string;
}
