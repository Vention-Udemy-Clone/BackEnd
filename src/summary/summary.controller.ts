import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserGuard } from 'src/shared/guards/user.guard';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { SummaryService } from './summary.service';

@UseGuards(UserGuard)
@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Post()
  create(@Body() createNoteDto: CreateSummaryDto, @Req() req: any) {
    return this.summaryService.create(createNoteDto, req.user.id);
  }

  @Post('generate/:lessonId')
  generateQuizQuestions(@Param('lessonId') lessonId: string) {
    return this.summaryService.generateSummary(lessonId);
  }

  @Get(':id')
  findOne(@Param('id') lessonId: string, @Req() req: any) {
    return this.summaryService.findOne(req.user.id, lessonId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSummaryDto: UpdateSummaryDto,
    @Req() req: any,
  ) {
    return this.summaryService.update(id, updateSummaryDto, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.summaryService.remove(id);
  }
}
