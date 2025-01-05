import { Test, TestingModule } from '@nestjs/testing';
import { SurveyQuestionController } from './survey-question.controller';
import { SurveyQuestionService } from './survey-question.service';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { SurveyQuestion as SurveyQuestionModel } from '@prisma/client';

describe('SurveyQuestionController', () => {
  let surveyQuestionController: SurveyQuestionController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let surveyQuestionService: SurveyQuestionService;

  const mockSurveyQuestionService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyQuestionController],
      providers: [
        { provide: SurveyQuestionService, useValue: mockSurveyQuestionService },
      ],
    }).compile();

    surveyQuestionController = module.get<SurveyQuestionController>(
      SurveyQuestionController,
    );
    surveyQuestionService = module.get<SurveyQuestionService>(
      SurveyQuestionService,
    );
  });

  it('should be defined', () => {
    expect(surveyQuestionController).toBeDefined();
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
      mockSurveyQuestionService.create.mockResolvedValue(createDto);

      const result = await surveyQuestionController.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockSurveyQuestionService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of surveyQuestions', async () => {
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
      mockSurveyQuestionService.findAll.mockResolvedValue(surveyQuestions);

      const result = await surveyQuestionController.findAll();
      expect(result).toEqual(surveyQuestions);
      expect(mockSurveyQuestionService.findAll).toHaveBeenCalled();
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
      mockSurveyQuestionService.findOne.mockResolvedValue(surveyQuestion);

      const result = await surveyQuestionController.findOne('1');
      expect(result).toEqual(surveyQuestion);
      expect(mockSurveyQuestionService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a surveyQuestion and return it', async () => {
      const updateDto: UpdateSurveyQuestionDto = {
        icon: 'ChevronRight',
      };
      const updatedSurveyQuestion = {
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
      mockSurveyQuestionService.update.mockResolvedValue(updatedSurveyQuestion);

      const result = await surveyQuestionController.update('1', updateDto);
      expect(result).toEqual(updatedSurveyQuestion);
      expect(mockSurveyQuestionService.update).toHaveBeenCalledWith(
        1,
        updateDto,
      );
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
      mockSurveyQuestionService.remove.mockResolvedValue(surveyQuestion);

      const result = await surveyQuestionController.remove('1');
      expect(result).toEqual(surveyQuestion);
      expect(mockSurveyQuestionService.remove).toHaveBeenCalledWith(1);
    });
  });
});
