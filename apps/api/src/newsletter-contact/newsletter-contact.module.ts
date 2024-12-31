import { Module } from '@nestjs/common';
import { NewsletterContactService } from './newsletter-contact.service';
import { NewsletterContactController } from './newsletter-contact.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [NewsletterContactController],
  providers: [NewsletterContactService],
  imports: [PrismaModule],
})
export class NewsletterContactModule {}
