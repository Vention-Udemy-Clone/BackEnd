import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModulesService } from './modules.service';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post(':courseId')
  async createModule(
    @Param('courseId') courseId: string,
    @Body() createModuleDto: CreateModuleDto,
  ) {
    const createdModule = await this.modulesService.createModule(
      courseId,
      createModuleDto,
    );
    return { success: true, data: createdModule };
  }

  @Get(':id')
  async getModuleById(@Param('id') id: string) {
    const gotModule = await this.modulesService.getModuleById(id);
    return { success: true, data: gotModule };
  }

  @Patch(':id')
  async updateModule(
    @Param('id') id: string,
    @Body() updateModuleDto: UpdateModuleDto,
  ) {
    const updatedModule = await this.modulesService.updateModule(
      id,
      updateModuleDto,
    );
    return { success: true, data: updatedModule };
  }

  @Delete(':id')
  async deleteModule(@Param('id') id: string) {
    const deletedModule = await this.modulesService.deleteModule(id);
    return { success: true, data: deletedModule };
  }
}
