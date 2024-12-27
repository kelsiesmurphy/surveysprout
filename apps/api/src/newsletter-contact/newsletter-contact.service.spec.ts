import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterContactService } from './newsletter-contact.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsletterContactDto } from './dto/create-newsletter-contact.dto';
import { UpdateNewsletterContactDto } from './dto/update-newsletter-contact.dto';
import { NewsletterContact as NewsletterContactModel } from '@prisma/client';

describe('NewsletterContactService', () => {
  let newsletterContactService: NewsletterContactService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  const mockPrismaService = {
    newsletterContact: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsletterContactService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    newsletterContactService = module.get<NewsletterContactService>(
      NewsletterContactService,
    );
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(newsletterContactService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new newsletterContact', async () => {
      const createDto: CreateNewsletterContactDto = {
        email: 'johndoe@email.com',
      };
      mockPrismaService.newsletterContact.create.mockResolvedValue(createDto);

      const result = await newsletterContactService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.newsletterContact.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all newsletterContact', async () => {
      const newsletterContact: NewsletterContactModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          email: 'johndoe@email.com',
        },
      ];
      mockPrismaService.newsletterContact.findMany.mockResolvedValue(
        newsletterContact,
      );

      const result = await newsletterContactService.findAll();
      expect(result).toEqual(newsletterContact);
      expect(mockPrismaService.newsletterContact.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single newsletterContact by id', async () => {
      const newsletterContact: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockPrismaService.newsletterContact.findUnique.mockResolvedValue(
        newsletterContact,
      );

      const result = await newsletterContactService.findOne(1);
      expect(result).toEqual(newsletterContact);
      expect(
        mockPrismaService.newsletterContact.findUnique,
      ).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a newsletterContact and return it', async () => {
      const updateDto: UpdateNewsletterContactDto = {
        email: 'johndoe@email.com',
      };
      const updatedNewsletterContact: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
        ...updateDto,
      };
      mockPrismaService.newsletterContact.update.mockResolvedValue(
        updatedNewsletterContact,
      );

      const result = await newsletterContactService.update(1, updateDto);
      expect(result).toEqual(updatedNewsletterContact);
      expect(mockPrismaService.newsletterContact.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a newsletterContact and return it', async () => {
      const newsletterContact: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockPrismaService.newsletterContact.delete.mockResolvedValue(
        newsletterContact,
      );

      const result = await newsletterContactService.remove(1);
      expect(result).toEqual(newsletterContact);
      expect(mockPrismaService.newsletterContact.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
