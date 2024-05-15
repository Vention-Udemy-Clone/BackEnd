import { HttpException, HttpStatus } from '@nestjs/common';

export class GlobalException extends HttpException {
  constructor(message: string, error: any, statusCode?: number) {
    super(
      { message, statusCode: statusCode || HttpStatus.INTERNAL_SERVER_ERROR },
      error,
    );
  }
}
