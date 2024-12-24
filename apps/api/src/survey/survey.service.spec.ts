import { Test, TestingModule } from '@nestjs/testing';
import { SurveyService } from './survey.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey as SurveyModel } from '@prisma/client';

describe('SurveyService', () => {
  let surveyService: SurveyService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  const mockPrismaService = {
    survey: {
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
        SurveyService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    surveyService = module.get<SurveyService>(SurveyService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(surveyService).toBeDefined();
  });

  describe('create', () => {
    it('should call PrismaService.survey.create with correct params', async () => {
      const createDto: CreateSurveyDto = {
        title: 'Post-purchase Survey Template',
        metadata: {
          productName: 'T-Shirt',
          productSize: 'SMALL',
          productImage: 'https://fakeimg.pl/300/',
        },
        surveyType: 'POSTPURCHASE',
      };
      mockPrismaService.survey.create.mockResolvedValue(createDto);

      const result = await surveyService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.survey.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all surveys', async () => {
      const surveys: SurveyModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          title: 'Post-purchase Survey Template',
          surveyType: 'POSTPURCHASE',
          metadata: {},
        },
      ];
      mockPrismaService.survey.findMany.mockResolvedValue(surveys);

      const result = await surveyService.findAll();
      expect(result).toEqual(surveys);
      expect(mockPrismaService.survey.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single survey by id', async () => {
      const survey: SurveyModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        title: 'Post-purchase Survey Template',
        surveyType: 'POSTPURCHASE',
        metadata: {},
      };
      mockPrismaService.survey.findUnique.mockResolvedValue(survey);

      const result = await surveyService.findOne(1);
      expect(result).toEqual(survey);
      expect(mockPrismaService.survey.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a survey and return it', async () => {
      const updateDto: UpdateSurveyDto = { title: 'Updated Survey Title' };
      const updatedSurvey: SurveyModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        title: 'Post-purchase Survey Template',
        ...updateDto,
        surveyType: 'POSTPURCHASE',
        metadata: {},
      };
      mockPrismaService.survey.update.mockResolvedValue(updatedSurvey);

      const result = await surveyService.update(1, updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockPrismaService.survey.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a survey and return it', async () => {
      const survey: SurveyModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        title: 'Post-purchase Survey Template',
        surveyType: 'POSTPURCHASE',
        metadata: {},
      };
      mockPrismaService.survey.delete.mockResolvedValue(survey);

      const result = await surveyService.remove(1);
      expect(result).toEqual(survey);
      expect(mockPrismaService.survey.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
