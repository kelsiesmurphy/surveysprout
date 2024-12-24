import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiSecurity('x-api-key')
@Controller()
@ApiTags('Default')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World' })
  getHello(): string {
    return this.appService.getHello();
  }
}
