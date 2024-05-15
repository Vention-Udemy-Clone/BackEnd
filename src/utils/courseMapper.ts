import { Course } from 'src/courses/entities/course.entity';

export const courseMapper = (course: Course) => {
  return {
    id: course.id,
    title: course.title,
    description: course.description,
    status: course.status,
    level: course.level,
    author: {
      id: course.author.id,
      fullName: course.author.fullName,
      email: course.author.email,
    },
    createdAt: course.createdAt,
    updatedAt: course.updatedAt,
  };
};
