import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from "@nestjs/common";
import { GlobalException } from "src/exceptions/global-exception";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor() { }
  
  catch(exception: GlobalException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const message = exception.getResponse();
    const defaultStatusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const defaultErrorMessage = 'Internal server error';
    const defaultResponse = {
      success: false,
      error: { statusCode: defaultStatusCode, message: defaultErrorMessage },
    };

    try {
      response.status(status).json({
        success: false,
        error: {
          message: message || defaultErrorMessage,
          timestamp: new Date().toISOString(),
          path: request.url,
        },
      });
    } catch (error) {
      response.status(defaultStatusCode).json(defaultResponse);
    }
  }
}