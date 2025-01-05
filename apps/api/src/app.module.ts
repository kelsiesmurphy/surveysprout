import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ApiKeyMiddleware } from './middleware/api-key/api-key.middleware';
import { SurveyModule } from './survey/survey.module';
import { AppService } from './app.service';
import { SurveyQuestionModule } from './survey-question/survey-question.module';
import { SurveyResponseModule } from './survey-response/survey-response.module';
import { SurveyAnswerModule } from './survey-answer/survey-answer.module';
import { NewsletterContactModule } from './newsletter-contact/newsletter-contact.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SurveyModule,
    SurveyQuestionModule,
    SurveyResponseModule,
    SurveyAnswerModule,
    NewsletterContactModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .exclude('auth/*', 'user/*')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
