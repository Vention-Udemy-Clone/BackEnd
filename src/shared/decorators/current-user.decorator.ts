import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { AuthUser } from '../types/auth-user.types';

export const CurrentUser = createParamDecorator(
  (key: keyof AuthUser, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const user: AuthUser = request.user;

    if (user) {
      return key ? user[key] : user;
    }

    return null;
  },
);
