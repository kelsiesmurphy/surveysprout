import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsletterContactService } from './newsletter-contact.service';
import { CreateNewsletterContactDto } from './dto/create-newsletter-contact.dto';
import { UpdateNewsletterContactDto } from './dto/update-newsletter-contact.dto';
import { NewsletterContact as NewsletterContactModel } from '@prisma/client';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NewsletterContactEntity } from './entities/newsletter-contact.entity';

@Controller('newsletter-contact')
@ApiTags('Newsletter Contacts')
export class NewsletterContactController {
  constructor(
    private readonly newsletterContactService: NewsletterContactService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: NewsletterContactEntity })
  async create(
    @Body() createNewsletterContactDto: CreateNewsletterContactDto,
  ): Promise<NewsletterContactModel> {
    return this.newsletterContactService.create(createNewsletterContactDto);
  }

  @Get()
  @ApiOkResponse({ type: NewsletterContactEntity, isArray: true })
  async findAll(): Promise<NewsletterContactModel[]> {
    return this.newsletterContactService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: NewsletterContactEntity })
  async findOne(@Param('id') id: string): Promise<NewsletterContactModel> {
    return this.newsletterContactService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: NewsletterContactEntity })
  async update(
    @Param('id') id: string,
    @Body() updateNewsletterContactDto: UpdateNewsletterContactDto,
  ): Promise<NewsletterContactModel> {
    return this.newsletterContactService.update(
      +id,
      updateNewsletterContactDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: NewsletterContactEntity })
  async remove(@Param('id') id: string): Promise<NewsletterContactModel> {
    return this.newsletterContactService.remove(+id);
  }
}
