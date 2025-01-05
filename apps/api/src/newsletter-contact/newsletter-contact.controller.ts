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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { NewsletterContactEntity } from './entities/newsletter-contact.entity';

@ApiSecurity('x-api-key')
@Controller('newsletter-contact')
@ApiTags('Newsletter Contacts')
export class NewsletterContactController {
  constructor(
    private readonly newsletterContactService: NewsletterContactService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a newsletter contact' })
  @ApiCreatedResponse({ type: NewsletterContactEntity })
  async create(
    @Body() createNewsletterContactDto: CreateNewsletterContactDto,
  ): Promise<NewsletterContactModel> {
    return this.newsletterContactService.create(createNewsletterContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all newsletter contacts' })
  @ApiOkResponse({ type: NewsletterContactEntity, isArray: true })
  async findAll(): Promise<NewsletterContactModel[]> {
    return this.newsletterContactService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a newsletter contact' })
  @ApiOkResponse({ type: NewsletterContactEntity })
  async findOne(@Param('id') id: string): Promise<NewsletterContactModel> {
    return this.newsletterContactService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a newsletter contact' })
  @ApiOkResponse({ type: NewsletterContactEntity })
  async update(
    @Param('id') id: string,
    @Body() updateNewsletterContactDto: UpdateNewsletterContactDto,
  ): Promise<NewsletterContactModel> {
    return this.newsletterContactService.update(id, updateNewsletterContactDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a newsletter contact' })
  @ApiOkResponse({ type: NewsletterContactEntity })
  async remove(@Param('id') id: string): Promise<NewsletterContactModel> {
    return this.newsletterContactService.remove(id);
  }
}
