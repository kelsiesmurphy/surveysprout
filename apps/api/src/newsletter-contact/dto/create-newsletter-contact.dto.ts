import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsletterContactDto {
  @ApiProperty()
  email: string;
}
