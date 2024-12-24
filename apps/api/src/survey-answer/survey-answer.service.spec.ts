import { Test, TestingModule } from '@nestjs/testing';
import { SurveyAnswerService } from './survey-answer.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { SurveyAnswer as SurveyAnswerModel } from '@prisma/client';

describe('SurveyAnswerService', () => {
  let surveyAnswerService: SurveyAnswerService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  const mockPrismaService = {
    surveyAnswer: {
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
        SurveyAnswerService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    surveyAnswerService = module.get<SurveyAnswerService>(SurveyAnswerService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(surveyAnswerService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new surveyAnswer', async () => {
      const createDto: CreateSurveyAnswerDto = {
        surveyResponseId: 1,
        surveyQuestionId: 2,
        textAnswer: 'Text answer response',
      };
      mockPrismaService.surveyAnswer.create.mockResolvedValue(createDto);

      const result = await surveyAnswerService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.surveyAnswer.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all surveyAnswers', async () => {
      const surveyAnswers: SurveyAnswerModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          surveyResponseId: 1,
          surveyQuestionId: 2,
          textAnswer: 'Text answer response',
          sliderValue: 5,
        },
      ];
      mockPrismaService.surveyAnswer.findMany.mockResolvedValue(surveyAnswers);

      const result = await surveyAnswerService.findAll();
      expect(result).toEqual(surveyAnswers);
      expect(mockPrismaService.surveyAnswer.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single surveyAnswer by id', async () => {
      const surveyAnswer: SurveyAnswerModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyResponseId: 1,
        surveyQuestionId: 2,
        textAnswer: 'Text answer response',
        sliderValue: 5,
      };
      mockPrismaService.surveyAnswer.findUnique.mockResolvedValue(surveyAnswer);

      const result = await surveyAnswerService.findOne(1);
      expect(result).toEqual(surveyAnswer);
      expect(mockPrismaService.surveyAnswer.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a surveyAnswer and return it', async () => {
      const updateDto: UpdateSurveyAnswerDto = {
        textAnswer: 'New text answer',
      };
      const updatedSurvey: SurveyAnswerModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        ...updateDto,
        surveyResponseId: 1,
        surveyQuestionId: 2,
        textAnswer: 'Text answer response',
        sliderValue: 5,
      };
      mockPrismaService.surveyAnswer.update.mockResolvedValue(updatedSurvey);

      const result = await surveyAnswerService.update(1, updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockPrismaService.surveyAnswer.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a surveyAnswer and return it', async () => {
      const surveyAnswer: SurveyAnswerModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyResponseId: 1,
        surveyQuestionId: 2,
        textAnswer: 'Text answer response',
        sliderValue: 5,
      };
      mockPrismaService.surveyAnswer.delete.mockResolvedValue(surveyAnswer);

      const result = await surveyAnswerService.remove(1);
      expect(result).toEqual(surveyAnswer);
      expect(mockPrismaService.surveyAnswer.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
