import { Module } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CoursesSeed } from './courses.seed';

const generateModules = (courses: any[]) => {
  const modules: Module[] = [];
  for (const course of courses) {
    for (let i = 1; i <= 3; i++) {
      const module: Module = {
        id: uuidv4(),
        title: `Module ${i} - ${course.title}`,
        courseId: course.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      modules.push(module);
    }
  }
  return modules;
};

export const ModulesSeed = generateModules(CoursesSeed);
