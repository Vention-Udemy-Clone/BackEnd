import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { registerDto } from './dto/create-auth.dto';

const { ACCESS_TOKEN_KEY, ACCESS_TOKEN_TIME } = process.env;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: registerDto) {
    try {
      let userFromDb = await this.prisma.user.findUnique({
        where: { email: registerDto.email },
      });

      console.log(
        'file: auth.service.ts:21 ~ AuthService ~ register ~ userFromDb:',
        userFromDb,
      );
      if (!userFromDb) {
        console.log('IF');
        userFromDb = await this.prisma.user.create({
          data: registerDto,
        });
      }

      const accessToken = await this.getTokens(userFromDb.id, userFromDb.email);

      console.log(
        'file: auth.service.ts:25 ~ AuthService ~ register ~ accessToken:',
        accessToken,
      );

      return {
        success: true,
        data: {
          accessToken,
          id: userFromDb.id,
        },
      };
    } catch (error) {
      console.log(
        'file: auth.service.ts:35 ~ AuthService ~ register ~ error:',
        error,
      );

      throw new Error('Register failed');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: any) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async getTokens(id: string, email: string) {
    const jwtPayload: { id: string; email: string } = {
      id,
      email,
    };

    try {
      const accessToken = await this.jwtService.signAsync(jwtPayload, {
        secret: ACCESS_TOKEN_KEY,
        expiresIn: ACCESS_TOKEN_TIME,
      });

      return accessToken;
    } catch (error) {
      throw new Error('Failed to generate token');
    }
  }
}
