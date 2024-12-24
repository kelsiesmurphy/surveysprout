import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ApiKeyMiddleware } from './middleware/api-key/api-key.middleware';
import { SurveyModule } from './survey/survey.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { SurveyQuestionModule } from './survey-question/survey-question.module';
import { SurveyResponseModule } from './survey-response/survey-response.module';
import { SurveyAnswerModule } from './survey-answer/survey-answer.module';
import { NewsletterContactModule } from './newsletter-contact/newsletter-contact.module';

@Module({
  imports: [ConfigModule.forRoot(), SurveyModule, PrismaModule, SurveyQuestionModule, SurveyResponseModule, SurveyAnswerModule, NewsletterContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
