import { PartialType } from '@nestjs/swagger';
import { CreateNewsletterContactDto } from './create-newsletter-contact.dto';

export class UpdateNewsletterContactDto extends PartialType(
  CreateNewsletterContactDto,
) {}
