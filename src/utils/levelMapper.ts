import { Level, Prisma } from '@prisma/client';

export const levelMapper: Record<Level, Prisma.CourseWhereInput[]> = {
  [Level.BEGINNER]: [
    {
      level: 'BEGINNER',
    },
    {
      level: 'INTERMEDIATE',
    },
    {
      level: 'ADVANCED',
    },
  ],
  [Level.INTERMEDIATE]: [
    {
      level: 'INTERMEDIATE',
    },
    {
      level: 'ADVANCED',
    },
  ],
  [Level.ADVANCED]: [
    {
      level: 'ADVANCED',
    },
  ],
};
