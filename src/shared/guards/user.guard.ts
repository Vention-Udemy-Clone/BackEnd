import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JsonWebTokenError, JwtService, TokenExpiredError } from '@nestjs/jwt';
import { GlobalException } from 'src/exceptions/global.exception';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthUser } from '../types/auth-user.types';
import { Auth } from 'src/auth/entities/auth.entity';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new UnauthorizedException('UNAUTHORIZED');

    const [bearer, token] = authHeader.split(' ');

    if (bearer != 'Bearer' || !token)
      throw new UnauthorizedException('UNAUTHORIZED');

    try {
      const user: Auth = await this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });

      const findUser = await this.prismaService.user.findUnique({
        where: { email: user.email },
      });

      if (!findUser) throw new UnauthorizedException('NOT_FOUND_AUTH_USER');

      req.user = {
        id: findUser.id,
        email: findUser.email,
      } as AuthUser;

      return true;
    } catch (error) {
      if (error instanceof TokenExpiredError)
        throw new UnauthorizedException(
          'UNAUTHORIZED_AUTH_EXPIRED_ACCESS_TOKEN',
        );

      if (error instanceof JsonWebTokenError)
        throw new UnauthorizedException('AUTH_FAILED_TOKEN_VERIFY');

      if (error instanceof UnauthorizedException) throw error;

      throw new GlobalException('AUTH_FAILED_TOKEN_VERIFY', error.message);
    }
  }
}
