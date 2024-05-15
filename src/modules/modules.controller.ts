import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post(':courseId')
  async createModule(@Param('courseId') courseId: string, @Body() createModuleDto: CreateModuleDto) {
    try {
      return await this.modulesService.createModule(courseId, createModuleDto);
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'There was a problem creating the module',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getModuleById(@Param('id') id: string) {
    try {
      return this.modulesService.getModuleById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  async updateModule(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    try {
      return this.modulesService.updateModule(id, updateModuleDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async deleteModule(@Param('id') id: string) {
    try {
      return this.modulesService.deleteModule(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
