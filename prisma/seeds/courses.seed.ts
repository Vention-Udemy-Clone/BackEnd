import { Course, Level, Status } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export const CoursesSeed: Course[] = [
  {
    id: uuidv4(),
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming and get started with coding.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Web Development Fundamentals',
    description:
      'Explore the essentials of web development and build interactive websites.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Database Management Systems',
    description:
      'Discover the principles of database management and learn SQL.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Object-Oriented Programming',
    description:
      'Master the concepts of object-oriented programming and design patterns.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Network Security',
    description:
      'Learn about network security protocols and techniques to protect data.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Data Structures and Algorithms',
    description:
      'Explore fundamental data structures and algorithms for efficient problem-solving.',
    authorId: '1',
    level: 'ADVANCED' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Mobile App Development',
    description:
      'Build mobile applications for iOS and Android using popular frameworks.',
    authorId: '1',
    level: 'INTERMEDIATE' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Cloud Computing Basics',
    description:
      'Get an introduction to cloud computing and learn about popular cloud platforms.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Artificial Intelligence Fundamentals',
    description:
      'Discover the basics of artificial intelligence and machine learning.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Cybersecurity Essentials',
    description: 'Learn essential cybersecurity concepts and best practices.',
    authorId: '1',
    level: 'BEGINNER' as Level,
    status: 'PUBLISHED' as Status,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
