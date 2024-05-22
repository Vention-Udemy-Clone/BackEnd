import { v4 as uuidv4 } from 'uuid';
import { CoursesSeed } from './courses.seed';

// Mock data for modules
export const ModulesSeed = [
  // Modules for "JavaScript Essentials"
  {
    id: uuidv4(),
    title: 'Introduction to JavaScript',
    courseId: CoursesSeed[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Basics',
    courseId: CoursesSeed[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Modules for "Advanced JavaScript Techniques"
  {
    id: uuidv4(),
    title: 'Asynchronous JavaScript',
    courseId: CoursesSeed[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Design Patterns',
    courseId: CoursesSeed[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Modules for "Full-Stack Web Development"
  {
    id: uuidv4(),
    title: 'Front-End Development',
    courseId: CoursesSeed[2].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Back-End Development',
    courseId: CoursesSeed[2].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Modules for "Node.js and Express.js"
  {
    id: uuidv4(),
    title: 'Introduction to Node.js',
    courseId: CoursesSeed[3].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Building REST APIs with Express.js',
    courseId: CoursesSeed[3].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Modules for "React for Beginners"
  {
    id: uuidv4(),
    title: 'Getting Started with React',
    courseId: CoursesSeed[4].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'React Components and State',
    courseId: CoursesSeed[4].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
