import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService],
    }).compile();
  });

  describe('getAllSurveyQuestions', () => {
    it('should return 6 questions"', () => {
      const appController = app.get(AppController);
      expect(appController.getAllSurveyQuestions()).toBe({});
    });
  });
});
