import { Test, TestingModule } from '@nestjs/testing';
import { SurveyResponseService } from './survey-response.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurveyResponseDto } from './dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { SurveyResponse as SurveyResponseModel } from '@prisma/client';

describe('SurveyResponseService', () => {
  let surveyResponseService: SurveyResponseService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  const mockPrismaService = {
    surveyResponse: {
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
        SurveyResponseService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    surveyResponseService = module.get<SurveyResponseService>(
      SurveyResponseService,
    );
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(surveyResponseService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new surveyResponse', async () => {
      const createDto: CreateSurveyResponseDto = {
        surveyId: 'abc',
      };
      mockPrismaService.surveyResponse.create.mockResolvedValue(createDto);

      const result = await surveyResponseService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.surveyResponse.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all surveyResponses', async () => {
      const surveyResponses: SurveyResponseModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          surveyId: 'abc',
        },
      ];
      mockPrismaService.surveyResponse.findMany.mockResolvedValue(
        surveyResponses,
      );

      const result = await surveyResponseService.findAll();
      expect(result).toEqual(surveyResponses);
      expect(mockPrismaService.surveyResponse.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single surveyResponse by id', async () => {
      const surveyResponse: SurveyResponseModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyId: 'abc',
      };
      mockPrismaService.surveyResponse.findUnique.mockResolvedValue(
        surveyResponse,
      );

      const result = await surveyResponseService.findOne(1);
      expect(result).toEqual(surveyResponse);
      expect(mockPrismaService.surveyResponse.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a surveyResponse and return it', async () => {
      const updateDto: UpdateSurveyResponseDto = {
        surveyId: 'def',
      };
      const updatedSurvey: SurveyResponseModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        ...updateDto,
        surveyId: 'abc',
      };
      mockPrismaService.surveyResponse.update.mockResolvedValue(updatedSurvey);

      const result = await surveyResponseService.update(1, updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockPrismaService.surveyResponse.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a surveyResponse and return it', async () => {
      const surveyResponse: SurveyResponseModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyId: 'abc',
      };
      mockPrismaService.surveyResponse.delete.mockResolvedValue(surveyResponse);

      const result = await surveyResponseService.remove(1);
      expect(result).toEqual(surveyResponse);
      expect(mockPrismaService.surveyResponse.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
