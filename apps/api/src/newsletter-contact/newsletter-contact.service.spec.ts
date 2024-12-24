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
    newsletterContacts: {
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
      mockPrismaService.newsletterContacts.create.mockResolvedValue(createDto);

      const result = await newsletterContactService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.newsletterContacts.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all newsletterContacts', async () => {
      const newsletterContacts: NewsletterContactModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          email: 'johndoe@email.com',
        },
      ];
      mockPrismaService.newsletterContacts.findMany.mockResolvedValue(
        newsletterContacts,
      );

      const result = await newsletterContactService.findAll();
      expect(result).toEqual(newsletterContacts);
      expect(mockPrismaService.newsletterContacts.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single newsletterContacts by id', async () => {
      const newsletterContacts: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockPrismaService.newsletterContacts.findUnique.mockResolvedValue(
        newsletterContacts,
      );

      const result = await newsletterContactService.findOne(1);
      expect(result).toEqual(newsletterContacts);
      expect(
        mockPrismaService.newsletterContacts.findUnique,
      ).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a newsletterContacts and return it', async () => {
      const updateDto: UpdateNewsletterContactDto = {
        email: 'johndoe@email.com',
      };
      const updatedNewsletterContact: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
        ...updateDto,
      };
      mockPrismaService.newsletterContacts.update.mockResolvedValue(
        updatedNewsletterContact,
      );

      const result = await newsletterContactService.update(1, updateDto);
      expect(result).toEqual(updatedNewsletterContact);
      expect(mockPrismaService.newsletterContacts.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a newsletterContacts and return it', async () => {
      const newsletterContacts: NewsletterContactModel = {
        id: 1,
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockPrismaService.newsletterContacts.delete.mockResolvedValue(
        newsletterContacts,
      );

      const result = await newsletterContactService.remove(1);
      expect(result).toEqual(newsletterContacts);
      expect(mockPrismaService.newsletterContacts.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
