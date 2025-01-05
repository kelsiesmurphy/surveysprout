import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.NEXT_PUBLIC_API_KEY;

    console.log('API Key from header:', apiKey);
    console.log('Expected API Key:', validApiKey);

    if (apiKey !== validApiKey) {
      throw new UnauthorizedException('Invalid API Key');
    }
    next();
  }
}
