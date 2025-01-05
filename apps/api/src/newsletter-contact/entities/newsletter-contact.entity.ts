import { NewsletterContact } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class NewsletterContactEntity implements NewsletterContact {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;
}
