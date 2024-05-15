import { Lesson } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ModulesSeed } from './modules.seed';

const generateLessons = (modules: any[]) => {
  const lessons: Lesson[] = [];
  for (const module of modules) {
    for (let i = 1; i <= 3; i++) {
      const lesson: Lesson = {
        id: uuidv4(),
        overview: `This is lesson ${i} of module ${module.title}`,
        content: `This is the content of lesson ${i} of module ${module.title}`,
        title: `Lesson ${i} - ${module.title}`,
        moduleId: module.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      lessons.push(lesson);
    }
  }
  return lessons;
};

export const LessonsSeed = generateLessons(ModulesSeed);
