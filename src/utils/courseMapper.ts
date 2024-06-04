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
      email: course.author.email,
      fullName: course.author.fullName,
      avatarUrl: course.author.avatarUrl,
    },
    createdAt: course.createdAt,
    updatedAt: course.updatedAt,
    bgImageUrl: course.bgImageUrl,
  };
};
