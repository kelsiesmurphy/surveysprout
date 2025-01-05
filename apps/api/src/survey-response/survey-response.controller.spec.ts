import { Test, TestingModule } from '@nestjs/testing';
import { SurveyResponseController } from './survey-response.controller';
import { SurveyResponseService } from './survey-response.service';
import { CreateSurveyResponseDto } from './dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { SurveyResponse as SurveyResponseModel } from '@prisma/client';

describe('SurveyResponseController', () => {
  let surveyResponseController: SurveyResponseController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let surveyResponseService: SurveyResponseService;

  const mockSurveyResponseService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyResponseController],
      providers: [
        { provide: SurveyResponseService, useValue: mockSurveyResponseService },
      ],
    }).compile();

    surveyResponseController = module.get<SurveyResponseController>(
      SurveyResponseController,
    );
    surveyResponseService = module.get<SurveyResponseService>(
      SurveyResponseService,
    );
  });

  it('should be defined', () => {
    expect(surveyResponseController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new surveyResponse', async () => {
      const createDto: CreateSurveyResponseDto = {
        surveyId: 'abc',
      };
      mockSurveyResponseService.create.mockResolvedValue(createDto);

      const result = await surveyResponseController.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockSurveyResponseService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of surveyResponses', async () => {
      const surveyResponses: SurveyResponseModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          surveyId: 'abc',
        },
      ];
      mockSurveyResponseService.findAll.mockResolvedValue(surveyResponses);

      const result = await surveyResponseController.findAll();
      expect(result).toEqual(surveyResponses);
      expect(mockSurveyResponseService.findAll).toHaveBeenCalled();
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
      mockSurveyResponseService.findOne.mockResolvedValue(surveyResponse);

      const result = await surveyResponseController.findOne('1');
      expect(result).toEqual(surveyResponse);
      expect(mockSurveyResponseService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a surveyResponse and return it', async () => {
      const updateDto: UpdateSurveyResponseDto = {
        surveyId: 'def',
      };
      const updatedSurveyResponse = {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        ...updateDto,
        surveyId: 'abc',
      };
      mockSurveyResponseService.update.mockResolvedValue(updatedSurveyResponse);

      const result = await surveyResponseController.update('1', updateDto);
      expect(result).toEqual(updatedSurveyResponse);
      expect(mockSurveyResponseService.update).toHaveBeenCalledWith(
        1,
        updateDto,
      );
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
      mockSurveyResponseService.remove.mockResolvedValue(surveyResponse);

      const result = await surveyResponseController.remove('1');
      expect(result).toEqual(surveyResponse);
      expect(mockSurveyResponseService.remove).toHaveBeenCalledWith(1);
    });
  });
});
