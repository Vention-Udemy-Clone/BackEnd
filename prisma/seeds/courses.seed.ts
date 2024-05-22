import { Course, Level, Status } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export const CoursesSeed: Course[] = [
  {
    id: uuidv4(),
    title: 'JavaScript Essentials',
    description:
      'Master the fundamentals of JavaScript and start building interactive web applications.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced JavaScript Techniques',
    description:
      'Dive deep into advanced concepts of JavaScript to enhance your development skills.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Full-Stack Web Development',
    description:
      'Become a proficient full-stack developer by learning both front-end and back-end technologies.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Node.js and Express.js',
    description:
      'Learn how to build robust and scalable server-side applications using Node.js and Express.js.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'React for Beginners',
    description:
      'Get started with React and learn how to build dynamic user interfaces for web applications.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
