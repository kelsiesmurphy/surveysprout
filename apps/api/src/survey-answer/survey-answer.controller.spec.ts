import { Test, TestingModule } from '@nestjs/testing';
import { SurveyAnswerController } from './survey-answer.controller';
import { SurveyAnswerService } from './survey-answer.service';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { SurveyAnswer as SurveyAnswerModel } from '@prisma/client';

describe('SurveyAnswerController', () => {
  let surveyAnswerController: SurveyAnswerController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let surveyAnswerService: SurveyAnswerService;

  const mockSurveyAnswerService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyAnswerController],
      providers: [
        { provide: SurveyAnswerService, useValue: mockSurveyAnswerService },
      ],
    }).compile();

    surveyAnswerController = module.get<SurveyAnswerController>(
      SurveyAnswerController,
    );
    surveyAnswerService = module.get<SurveyAnswerService>(SurveyAnswerService);
  });

  it('should be defined', () => {
    expect(surveyAnswerController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new surveyAnswer', async () => {
      const createDto: CreateSurveyAnswerDto = {
        surveyResponseId: 1,
        surveyQuestionId: 2,
        textAnswer: 'Text answer response',
      };
      mockSurveyAnswerService.create.mockResolvedValue(createDto);

      const result = await surveyAnswerController.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockSurveyAnswerService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of surveyAnswers', async () => {
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
      mockSurveyAnswerService.findAll.mockResolvedValue(surveyAnswers);

      const result = await surveyAnswerController.findAll();
      expect(result).toEqual(surveyAnswers);
      expect(mockSurveyAnswerService.findAll).toHaveBeenCalled();
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
      mockSurveyAnswerService.findOne.mockResolvedValue(surveyAnswer);

      const result = await surveyAnswerController.findOne('1');
      expect(result).toEqual(surveyAnswer);
      expect(mockSurveyAnswerService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a surveyAnswer and return it', async () => {
      const updateDto: UpdateSurveyAnswerDto = {
        textAnswer: 'New text answer',
      };
      const updatedSurveyAnswer = {
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
      mockSurveyAnswerService.update.mockResolvedValue(updatedSurveyAnswer);

      const result = await surveyAnswerController.update('1', updateDto);
      expect(result).toEqual(updatedSurveyAnswer);
      expect(mockSurveyAnswerService.update).toHaveBeenCalledWith(1, updateDto);
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
      mockSurveyAnswerService.remove.mockResolvedValue(surveyAnswer);

      const result = await surveyAnswerController.remove('1');
      expect(result).toEqual(surveyAnswer);
      expect(mockSurveyAnswerService.remove).toHaveBeenCalledWith(1);
    });
  });
});
