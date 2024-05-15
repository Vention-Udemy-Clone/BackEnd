import { PrismaClient, Role } from '@prisma/client';
import { CoursesSeed } from './seeds/courses.seed';
import { LessonsSeed } from './seeds/lessons.seed';
import { ModulesSeed } from './seeds/modules.seed';

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      id: '1',
      email: 'admin@gmail.com',
      fullName: 'Admin',
      role: 'ADMIN' as Role,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  for (const course of CoursesSeed) {
    await prisma.course.create({
      data: course,
    });
  }

  for (const module of ModulesSeed) {
    await prisma.module.create({
      data: module,
    });
  }

  for (const lesson of LessonsSeed) {
    await prisma.lesson.create({
      data: lesson,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
