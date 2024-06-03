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
  {
    id: uuidv4(),
    title: 'Python for Beginners',
    description:
      'Learn the fundamentals of Python programming language and how to write clean, efficient code.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Fundamentals',
    description:
      'Learn the fundamentals of C++ programming language and how to write efficient and optimized code.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'NestJS Fundamentals',
    description:
      'Learn the fundamentals of NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Docker Advanced',
    description:
      'Learn advanced concepts and techniques for using Docker containers effectively.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Web Designing for Intermediate Level',
    description:
      'Advance your web design skills with intermediate-level concepts and techniques.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: '.NET Essentials',
    description:
      'Learn the essentials of .NET development for building robust and scalable applications.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Vue.js Essentials',
    description:
      'Learn the essentials of Vue.js for building interactive and reactive web applications.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Flutter Development',
    description:
      'Master Flutter framework for building cross-platform mobile applications with ease.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'TypeScript Fundamentals',
    description:
      'Master TypeScript, a superset of JavaScript, for building scalable and maintainable web applications.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C# Programming Mastery',
    description:
      'Master the C# programming language for building powerful and scalable applications.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Essentials',
    description:
      'Learn the fundamentals of Kubernetes for deploying, managing, and scaling containerized applications.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'HTML/CSS Fundamentals',
    description:
      'Learn the basics of HTML and CSS for building and styling web pages.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Python Django Framework Mastery',
    description:
      'Master the Django web framework for building powerful and scalable web applications with Python.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'DRAFT' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
