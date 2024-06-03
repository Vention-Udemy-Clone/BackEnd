import { Injectable, NotFoundException } from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(createNoteDto: CreateNoteDto, userId: string) {
    try {
      const createdNote = await this.prisma.note.create({
        data: {
          ...createNoteDto,
          userId,
        },
      });
      return { success: true, data: createdNote };
    } catch (e) {
      throw new GlobalException('Error creating note', e);
    }
  }

  async findAll(userId: string, lessonId: string) {
    try {
      const notes = await this.prisma.note.findMany({
        where: {
          userId,
          lessonId,
        },
      });
      return { success: true, data: notes };
    } catch (e) {
      throw new GlobalException('Error fetching notes', e);
    }
  }

  async update(id: string, updateNoteDto: UpdateNoteDto, userId: string) {
    try {
      const noteForUpdate = await this.prisma.note.findUnique({
        where: { id, userId },
      });

      if (!noteForUpdate) {
        throw new NotFoundException('Note not found');
      }

      const updatedNote = await this.prisma.note.update({
        where: { id, userId },
        data: updateNoteDto,
      });

      return { success: true, data: updatedNote };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new GlobalException('Error updating note', e);
    }
  }

  async remove(id: string, userId: string) {
    try {
      const noteForDelete = await this.prisma.note.findUnique({
        where: { id, userId },
      });

      if (!noteForDelete) {
        throw new NotFoundException('Note not found');
      }

      const updatedNote = await this.prisma.note.delete({
        where: { id, userId },
      });

      return { success: true, data: updatedNote };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;

      throw new GlobalException('Error deleting note', e);
    }
  }
}
