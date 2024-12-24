import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsletterContactDto } from './dto/create-newsletter-contact.dto';
import { UpdateNewsletterContactDto } from './dto/update-newsletter-contact.dto';

@Injectable()
export class NewsletterContactService {
  constructor(private prisma: PrismaService) {}

  create(createNewsletterContactDto: CreateNewsletterContactDto) {
    return this.prisma.newsletterContact.create({
      data: createNewsletterContactDto,
    });
  }

  findAll() {
    return this.prisma.newsletterContact.findMany();
  }

  findOne(id: number) {
    return this.prisma.newsletterContact.findUnique({ where: { id } });
  }

  update(id: number, updateNewsletterContactDto: UpdateNewsletterContactDto) {
    return this.prisma.newsletterContact.update({
      where: { id },
      data: updateNewsletterContactDto,
    });
  }

  remove(id: number) {
    return this.prisma.newsletterContact.delete({ where: { id } });
  }
}
