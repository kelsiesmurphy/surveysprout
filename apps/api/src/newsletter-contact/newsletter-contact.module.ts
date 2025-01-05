import { Module } from '@nestjs/common';
import { NewsletterContactService } from './newsletter-contact.service';
import { NewsletterContactController } from './newsletter-contact.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NewsletterContactController],
  providers: [NewsletterContactService, PrismaService],
  imports: [],
})
export class NewsletterContactModule {}
