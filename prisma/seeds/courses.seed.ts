import { Course, Level, Status } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export const CoursesSeed: Course[] = [
  {
    id: uuidv4(),
    bgImageUrl:
      'https://www.comp-web-pro.ru/wp-content/uploads/2022/04/scale_1200.webp',
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
    bgImageUrl:
      'https://cdn-edge.kwork.ru/pics/t0/09/24593006-63c14251aff38.jpg',
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
    bgImageUrl:
      'https://ewm.swiss/application/files/7616/0553/6736/PHP_8_EWM_SA_Digital_Agency_Geneva.jpg',
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
    bgImageUrl:
      'https://cdn0000.airklass.com/classes/9465/new_cover-w1920-h1080?v=2731797908',
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
    bgImageUrl:
      'https://raw.githubusercontent.com/orcuntuna/react-turkce-kaynak/master/images/giris.jpeg',
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
    bgImageUrl:
      'https://ciberninjas.com/wp-content/uploads/2022/11/lenguaje-python.webp',
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
    bgImageUrl: 'https://cdn.filestackcontent.com/lkYCN9UvRNFaLzywghPu',
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
    bgImageUrl: 'https://www.filepicker.io/api/file/UzmTrJzQ3CPz3XRmOxVU',
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
    bgImageUrl: 'https://matcha.fyi/content/images/2021/07/your-computer.jpg',
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
    bgImageUrl:
      'https://omeseo.co.uk/wp-content/uploads/2019/07/website_design.jpg',
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
    bgImageUrl: 'https://keysprog.ru/wp-content/uploads/2021/07/4-45.jpg',
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
    bgImageUrl: 'https://getsolutionz.com/wp-content/uploads/2022/09/vuejs.png',
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
    bgImageUrl:
      'https://1.bp.blogspot.com/-UwE6F5f2suQ/XzkXO2UrtNI/AAAAAAAADEw/8O3bGCALUHMS8zGdhCF8ItqUjLvJEUHsACPcBGAYYCw/s1920/f.png',
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
    bgImageUrl:
      'https://file-uploads.teachablecdn.com/4c16c4adca0d401bb4295cfbda05ecf1/e1c0e6c521414dbfae2fe1ca931c2f8f',
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
    bgImageUrl: 'https://www.filepicker.io/api/file/ErjKkAHSy809teaOcuXQ',
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
    bgImageUrl:
      'https://d3npc921eoaj06.cloudfront.net/wp-content/uploads/2023/03/03163347/shutterstock_2032771244-1-1.jpg',
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
    bgImageUrl:
      'https://ylianova.ru/800/600/https/apprendre-a-coder.com/wp/wp-content/uploads/2015/08/cours1.png',
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
    bgImageUrl:
      'https://www.azulschool.net/wp-content/uploads/2022/03/e-puede-usar-Python-para-desarrollo-web.png',
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
