import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { NewsletterContactModule } from './newsletter-contact/newsletter-contact.module';
import { SurveyAnswerModule } from './survey-answer/survey-answer.module';
import { SurveyQuestionModule } from './survey-question/survey-question.module';
import { SurveyResponseModule } from './survey-response/survey-response.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SurveyModule,
    SurveyQuestionModule,
    SurveyResponseModule,
    SurveyAnswerModule,
    NewsletterContactModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
