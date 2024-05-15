import { HttpException, HttpStatus } from '@nestjs/common';

export class GlobalException extends HttpException {
  constructor(message: string, error?: string) {
    super({
      message,
      error,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}