import { NewsletterContact } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class NewsletterContactEntity implements NewsletterContact {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
