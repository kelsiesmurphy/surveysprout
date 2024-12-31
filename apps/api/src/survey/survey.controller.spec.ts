import { Test, TestingModule } from '@nestjs/testing';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey as SurveyModel } from '@prisma/client';

describe('SurveyController', () => {
  let surveyController: SurveyController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let surveyService: SurveyService;

  const mockSurveyService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController],
      providers: [{ provide: SurveyService, useValue: mockSurveyService }],
    }).compile();

    surveyController = module.get<SurveyController>(SurveyController);
    surveyService = module.get<SurveyService>(SurveyService);
  });

  it('should be defined', () => {
    expect(surveyController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new survey', async () => {
      const createDto: CreateSurveyDto = {
        title: 'Post-purchase Survey Template',
        metadata: {
          productName: 'T-Shirt',
          productSize: 'SMALL',
          productImage: 'https://fakeimg.pl/300/',
        },
        theme: {
          color: 'blue',
          radius: 0.5,
        },
        surveyType: 'POSTPURCHASE',
      };
      mockSurveyService.create.mockResolvedValue(createDto);

      const result = await surveyController.create(createDto);
      expect(result).toEqual(createDto);
      expect(mockSurveyService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of surveys', async () => {
      const surveys: SurveyModel[] = [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          title: 'Post-purchase Survey Template',
          surveyType: 'POSTPURCHASE',
          metadata: {},
          theme: {
            color: 'blue',
            radius: 0.5,
          },
        },
      ];
      mockSurveyService.findAll.mockResolvedValue(surveys);

      const result = await surveyController.findAll();
      expect(result).toEqual(surveys);
      expect(mockSurveyService.findAll).toHaveBeenCalled();
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
        theme: {
          color: 'blue',
          radius: 0.5,
        },
      };
      mockSurveyService.findOne.mockResolvedValue(survey);

      const result = await surveyController.findOne('1');
      expect(result).toEqual(survey);
      expect(mockSurveyService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a survey and return it', async () => {
      const updateDto: UpdateSurveyDto = { title: 'Updated Survey Title' };
      const updatedSurvey = {
        id: 1,
        ...updateDto,
        surveyType: 'POSTPURCHASE',
        metadata: {},
        theme: {
          color: 'blue',
          radius: 0.5,
        },
      };
      mockSurveyService.update.mockResolvedValue(updatedSurvey);

      const result = await surveyController.update('1', updateDto);
      expect(result).toEqual(updatedSurvey);
      expect(mockSurveyService.update).toHaveBeenCalledWith(1, updateDto);
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
        theme: {
          color: 'blue',
          radius: 0.5,
        },
      };
      mockSurveyService.remove.mockResolvedValue(survey);

      const result = await surveyController.remove('1');
      expect(result).toEqual(survey);
      expect(mockSurveyService.remove).toHaveBeenCalledWith(1);
    });
  });
});
