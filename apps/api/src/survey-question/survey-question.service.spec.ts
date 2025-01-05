import { Test, TestingModule } from '@nestjs/testing';
import { SurveyQuestionService } from './survey-question.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { SurveyQuestion as SurveyQuestionModel } from '@prisma/client';

describe('SurveyQuestionService', () => {
  let surveyQuestionService: SurveyQuestionService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  const mockPrismaService = {
    surveyQuestion: {
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
        SurveyQuestionService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    surveyQuestionService = module.get<SurveyQuestionService>(
      SurveyQuestionService,
    );
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(surveyQuestionService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new surveyQuestion', async () => {
      const createDto: CreateSurveyQuestionDto = {
        surveyId: 'abc',
        fieldName: 'q1',
        title: 'How did you hear about us?',
        subtitle: 'Select one option',
        icon: 'Squirrel',
        questionType: 'Options',
        options: [
          {
            name: 'Instagram',
            image: '',
            order: 0,
          },
        ],
      };
      mockPrismaService.surveyQuestion.create.mockResolvedValue(createDto);

      const result = await surveyQuestionService.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockPrismaService.surveyQuestion.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all surveyQuestions', async () => {
      const surveyQuestions: SurveyQuestionModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          surveyId: 'abc',
          fieldName: 'q1',
          title: 'How did you hear about us?',
          subtitle: 'Select one option',
          icon: 'Squirrel',
          questionType: 'Options',
          options: [
            {
              name: 'Instagram',
              image: '',
              order: 0,
            },
          ],
        },
      ];
      mockPrismaService.surveyQuestion.findMany.mockResolvedValue(
        surveyQuestions,
      );

      const result = await surveyQuestionService.findAll();
      expect(result).toEqual(surveyQuestions);
      expect(mockPrismaService.surveyQuestion.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single surveyQuestion by id', async () => {
      const surveyQuestion: SurveyQuestionModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyId: 'abc',
        fieldName: 'q1',
        title: 'How did you hear about us?',
        subtitle: 'Select one option',
        icon: 'Squirrel',
        questionType: 'Options',
        options: [
          {
            name: 'Instagram',
            image: '',
            order: 0,
          },
        ],
      };
      mockPrismaService.surveyQuestion.findUnique.mockResolvedValue(
        surveyQuestion,
      );

      const result = await surveyQuestionService.findOne(1);
      expect(result).toEqual(surveyQuestion);
      expect(mockPrismaService.surveyQuestion.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a surveyQuestion and return it', async () => {
      const updateDto: UpdateSurveyQuestionDto = {
        icon: 'ChevronRight',
      };
      const updatedSurvey: SurveyQuestionModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        ...updateDto,
        surveyId: 'abc',
        fieldName: 'q1',
        title: 'How did you hear about us?',
        subtitle: 'Select one option',
        icon: 'Squirrel',
        questionType: 'Options',
        options: [
          {
            name: 'Instagram',
            image: '',
            order: 0,
          },
        ],
      };
      mockPrismaService.surveyQuestion.update.mockResolvedValue(updatedSurvey);

      const result = await surveyQuestionService.update(1, updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockPrismaService.surveyQuestion.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a surveyQuestion and return it', async () => {
      const surveyQuestion: SurveyQuestionModel = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        surveyId: 'abc',
        fieldName: 'q1',
        title: 'How did you hear about us?',
        subtitle: 'Select one option',
        icon: 'Squirrel',
        questionType: 'Options',
        options: [
          {
            name: 'Instagram',
            image: '',
            order: 0,
          },
        ],
      };
      mockPrismaService.surveyQuestion.delete.mockResolvedValue(surveyQuestion);

      const result = await surveyQuestionService.remove(1);
      expect(result).toEqual(surveyQuestion);
      expect(mockPrismaService.surveyQuestion.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
