import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { colorLog } from 'src/utils';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: Error | any, host: ArgumentsHost) {
    const statusCode =
      exception.response?.statusCode || exception.status || 500;

    colorLog(`\nError : \n${'_'.repeat(10)}`, 'red');
    console.log(exception);
    colorLog('StatusCode : ' + statusCode, 'blue');
    colorLog('Message : ' + exception.message, 'blue');
    colorLog(`${'_'.repeat(10)}`, 'red');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(statusCode).json({
      success: false,
      error: {
        statusCode: statusCode,
        message: exception?.response?.message || exception.message,
      },
    });
  }
}
