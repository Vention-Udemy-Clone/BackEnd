import { Injectable, NotFoundException } from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    try {
      const userFromDb = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!userFromDb) {
        throw new NotFoundException('User not found');
      }

      return { success: true, data: userFromDb };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new GlobalException('Failed to get user', error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
