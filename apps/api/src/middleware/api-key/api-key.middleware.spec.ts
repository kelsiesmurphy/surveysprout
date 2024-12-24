import { ApiKeyMiddleware } from './api-key.middleware';
import { UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

const mockNext = jest.fn();
const mockRequest = (apiKey: string | undefined) =>
  ({
    headers: { 'x-api-key': apiKey },
  }) as unknown as Request;

const mockResponse = {} as Response;

describe('ApiKeyMiddleware', () => {
  let middleware: ApiKeyMiddleware;

  beforeEach(() => {
    middleware = new ApiKeyMiddleware();
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should call next() when the API key is valid', () => {
    const validApiKey = 'valid-api-key';
    process.env.API_KEY = validApiKey;

    const req = mockRequest(validApiKey);
    const res = mockResponse;
    middleware.use(req, res, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should throw UnauthorizedException when the API key is invalid', () => {
    const validApiKey = 'valid-api-key';
    process.env.API_KEY = validApiKey;

    const req = mockRequest('invalid-api-key');
    const res = mockResponse;

    expect(() => middleware.use(req, res, mockNext)).toThrowError(
      new UnauthorizedException('Invalid API Key'),
    );
  });

  it('should throw UnauthorizedException when no API key is provided', () => {
    const validApiKey = 'valid-api-key';
    process.env.API_KEY = validApiKey;

    const req = mockRequest(undefined);
    const res = mockResponse;

    expect(() => middleware.use(req, res, mockNext)).toThrowError(
      new UnauthorizedException('Invalid API Key'),
    );
  });
});
