import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterContactController } from './newsletter-contact.controller';
import { NewsletterContactService } from './newsletter-contact.service';
import { CreateNewsletterContactDto } from './dto/create-newsletter-contact.dto';
import { UpdateNewsletterContactDto } from './dto/update-newsletter-contact.dto';
import { NewsletterContact as NewsletterContactModel } from '@prisma/client';

describe('NewsletterContactController', () => {
  let newsletterContactController: NewsletterContactController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let newsletterContactService: NewsletterContactService;

  const mockNewsletterContactService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsletterContactController],
      providers: [
        {
          provide: NewsletterContactService,
          useValue: mockNewsletterContactService,
        },
      ],
    }).compile();

    newsletterContactController = module.get<NewsletterContactController>(
      NewsletterContactController,
    );
    newsletterContactService = module.get<NewsletterContactService>(
      NewsletterContactService,
    );
  });

  it('should be defined', () => {
    expect(newsletterContactController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new newsletterContact', async () => {
      const createDto: CreateNewsletterContactDto = {
        email: 'johndoe@email.com',
      };
      mockNewsletterContactService.create.mockResolvedValue(createDto);

      const result = await newsletterContactController.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockNewsletterContactService.create).toHaveBeenCalledWith(
        createDto,
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of newsletterContacts', async () => {
      const newsletterContacts: NewsletterContactModel[] = [
        {
          id: 'abc',
          createdAt: new Date(),
          email: 'johndoe@email.com',
        },
      ];
      mockNewsletterContactService.findAll.mockResolvedValue(
        newsletterContacts,
      );

      const result = await newsletterContactController.findAll();
      expect(result).toEqual(newsletterContacts);
      expect(mockNewsletterContactService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single newsletterContact by id', async () => {
      const newsletterContact: NewsletterContactModel = {
        id: 'abc',
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockNewsletterContactService.findOne.mockResolvedValue(newsletterContact);

      const result = await newsletterContactController.findOne('abc');
      expect(result).toEqual(newsletterContact);
      expect(mockNewsletterContactService.findOne).toHaveBeenCalledWith('abc');
    });
  });

  describe('update', () => {
    it('should update a newsletterContact and return it', async () => {
      const updateDto: UpdateNewsletterContactDto = {
        email: 'johndoe@email.com',
      };
      const updatedSurvey = {
        id: 'abc',
        ...updateDto,
        email: 'johndoe@email.com',
      };
      mockNewsletterContactService.update.mockResolvedValue(updatedSurvey);

      const result = await newsletterContactController.update('abc', updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockNewsletterContactService.update).toHaveBeenCalledWith(
        'abc',
        updateDto,
      );
    });
  });

  describe('remove', () => {
    it('should remove a newsletterContact and return it', async () => {
      const newsletterContact: NewsletterContactModel = {
        id: 'abc',
        createdAt: new Date(),
        email: 'johndoe@email.com',
      };
      mockNewsletterContactService.remove.mockResolvedValue(newsletterContact);

      const result = await newsletterContactController.remove('abc');
      expect(result).toEqual(newsletterContact);
      expect(mockNewsletterContactService.remove).toHaveBeenCalledWith('abc');
    });
  });
});
