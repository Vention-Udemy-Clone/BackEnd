import { v4 as uuidv4 } from 'uuid';
import { ModulesSeed } from './modules.seed';

// Mock data for lessons
export const LessonsSeed = [
  // Lessons for "Introduction to JavaScript"
  {
    id: uuidv4(),
    title: 'What is JavaScript?',
    overview: 'An introduction to the history and purpose of JavaScript.',
    content:
      'JavaScript is a versatile programming language primarily used for creating interactive content on websites. It was developed by Netscape in 1995 and has since become one of the core technologies of the web, alongside HTML and CSS. JavaScript enables developers to add dynamic behavior, control multimedia, animate images, and pretty much everything else. Understanding JavaScript is essential for web development, as it is the language that makes web pages interactive.',
    moduleId: ModulesSeed[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Syntax and Basics',
    overview: 'Learn the basic syntax and fundamental concepts of JavaScript.',
    content:
      'In this lesson, we will cover variables, data types, and basic operators in JavaScript. Variables are used to store data values, and you can create a variable using the var, let, or const keywords. JavaScript supports several data types, including numbers, strings, arrays, and objects. Operators are used to perform operations on variables and values; for example, the + operator adds two numbers together. Understanding these basics is crucial for writing your first JavaScript programs.',
    moduleId: ModulesSeed[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "JavaScript Basics"
  {
    id: uuidv4(),
    title: 'Control Structures in JavaScript',
    overview: 'Understanding conditionals and loops in JavaScript.',
    content:
      'Control structures like if-else statements and loops allow you to control the flow of your program. If-else statements execute a block of code if a specified condition is true; otherwise, they execute another block of code. Loops, such as for and while, repeat a block of code as long as a specified condition is true. These control structures are fundamental for making decisions and repeating actions in your code, which are common tasks in programming.',
    moduleId: ModulesSeed[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Functions and Scope',
    overview:
      'Learn how to define and use functions, and understand scope in JavaScript.',
    content:
      'Functions are reusable blocks of code that perform a specific task. You can define a function using the function keyword, followed by a name, parentheses, and a block of code. Functions can take parameters and return values. Scope determines the visibility of variables; variables defined within a function are local to that function, while variables defined outside any function are global. Understanding functions and scope is essential for writing modular and maintainable code.',
    moduleId: ModulesSeed[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Asynchronous JavaScript"
  {
    id: uuidv4(),
    title: 'Understanding Callbacks',
    overview: 'Learn what callbacks are and how to use them in JavaScript.',
    content:
      'Callbacks are functions passed as arguments to other functions. They are essential for asynchronous programming in JavaScript, which allows your program to do more than one thing at a time. For example, you can use a callback to handle the result of an API call. Callbacks are a common way to manage asynchronous operations, but they can lead to callback hell if not managed properly. In this lesson, we will explore how to use callbacks effectively and avoid common pitfalls.',
    moduleId: ModulesSeed[2].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Promises and Async/Await',
    overview: 'Master asynchronous programming with Promises and async/await.',
    content:
      'Promises represent a value that may be available now, or in the future, or never. They provide a way to handle asynchronous operations in a more readable way than callbacks. A promise has three states: pending, fulfilled, and rejected. The async/await syntax is a modern way to handle Promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain. Understanding Promises and async/await is crucial for modern JavaScript development.',
    moduleId: ModulesSeed[2].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "JavaScript Design Patterns"
  {
    id: uuidv4(),
    title: 'Introduction to Design Patterns',
    overview: 'An overview of common design patterns in JavaScript.',
    content:
      'Design patterns are reusable solutions to common problems in software design. They can speed up the development process by providing tested, proven development paradigms. In JavaScript, some common design patterns include the Singleton, Observer, and Module patterns. The Singleton pattern ensures a class has only one instance, the Observer pattern allows objects to be notified of changes in other objects, and the Module pattern helps keep units of code separate and organized. Understanding these patterns is essential for writing efficient and maintainable code.',
    moduleId: ModulesSeed[3].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Implementing MVC in JavaScript',
    overview:
      'Learn how to implement the Model-View-Controller (MVC) pattern in JavaScript applications.',
    content:
      'MVC is a design pattern that separates an application into three interconnected components: Model, View, and Controller. The Model represents the data and business logic, the View displays the data, and the Controller handles the input and updates the Model. This separation helps in managing complex applications by keeping the concerns separate. In this lesson, we will create a simple MVC app to demonstrate how this pattern can be implemented in JavaScript, which will help you structure your applications better.',
    moduleId: ModulesSeed[3].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Front-End Development"
  {
    id: uuidv4(),
    title: 'HTML and CSS Basics',
    overview: 'Introduction to HTML and CSS for creating web pages.',
    content:
      'HTML is the standard markup language for creating web pages, while CSS is used to style them. HTML provides the structure of the page, and CSS handles the design and layout. In this lesson, we will cover basic HTML elements such as headings, paragraphs, and links, as well as CSS properties like color, font, and layout. Understanding HTML and CSS is essential for front-end development, as they form the backbone of web design.',
    moduleId: ModulesSeed[4].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Responsive Web Design',
    overview:
      'Learn how to create responsive websites that work on all devices.',
    content:
      'Responsive design ensures that web pages look good on all devices, from desktops to tablets to phones. This is achieved through the use of flexible grids, responsive images, and media queries. Media queries are a CSS feature that allows you to apply styles based on the characteristics of the device, such as its width. In this lesson, we will cover how to create a responsive layout that adjusts to different screen sizes, ensuring a good user experience across all devices.',
    moduleId: ModulesSeed[4].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Back-End Development"
  {
    id: uuidv4(),
    title: 'Introduction to Databases',
    overview: 'Learn the basics of databases and SQL.',
    content:
      'Databases are used to store and manage data. SQL (Structured Query Language) is the standard language for interacting with relational databases. In this lesson, we will cover basic SQL operations such as SELECT, INSERT, UPDATE, and DELETE, as well as concepts like tables, rows, and columns. Understanding databases and SQL is crucial for back-end development, as they are used to store and retrieve data for web applications.',
    moduleId: ModulesSeed[5].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Building RESTful APIs',
    overview: 'Learn how to build RESTful APIs with Node.js.',
    content:
      'RESTful APIs allow different systems to communicate over HTTP. They follow a set of conventions for creating and consuming APIs, including using standard HTTP methods like GET, POST, PUT, and DELETE. In this lesson, we will build a simple API using Node.js and Express, covering how to define routes, handle requests, and respond with JSON data. Understanding RESTful APIs is essential for back-end development, as they are a common way to build web services.',
    moduleId: ModulesSeed[5].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Introduction to Node.js"
  {
    id: uuidv4(),
    title: 'Getting Started with Node.js',
    overview: 'Introduction to Node.js and setting up your environment.',
    content:
      'Node.js is a runtime environment that allows you to run JavaScript on the server. It is built on Chrome\'s V8 JavaScript engine and provides a non-blocking, event-driven architecture. This lesson covers how to install Node.js, set up your development environment, and write your first "Hello, World!" application. Understanding Node.js is crucial for server-side JavaScript development, as it allows you to build scalable and efficient web applications.',
    moduleId: ModulesSeed[6].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Node.js Modules',
    overview: 'Learn about built-in and custom modules in Node.js.',
    content:
      'Modules are reusable pieces of code in Node.js. Built-in modules, such as fs and path, provide core functionality for interacting with the file system and handling file paths. You can also create your own custom modules to organize your code better. In this lesson, we will cover how to use built-in modules, as well as how to create, export, and import custom modules. Understanding modules is essential for writing modular and maintainable Node.js applications.',
    moduleId: ModulesSeed[6].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Building REST APIs with Express.js"
  {
    id: uuidv4(),
    title: 'Setting up Express.js',
    overview: 'Introduction to Express.js and setting up a basic server.',
    content:
      'Express.js is a web framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and more. This lesson covers how to install Express, set up a basic server, and handle different types of HTTP requests. Understanding Express.js is crucial for building server-side applications with Node.js, as it allows you to handle requests and responses more efficiently.',
    moduleId: ModulesSeed[7].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Routing in Express.js',
    overview:
      'Learn how to handle different routes and HTTP methods in Express.js.',
    content:
      'Routing in Express.js allows you to define how your application responds to different HTTP requests. You can define routes to handle GET, POST, PUT, and DELETE requests, and use middleware to process requests before they reach the route handler. In this lesson, we will cover basic routing, route parameters, and middleware functions. Understanding routing is essential for building RESTful APIs and web applications with Express.js, as it allows you to control the flow of requests in your application.',
    moduleId: ModulesSeed[7].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "Getting Started with React"
  {
    id: uuidv4(),
    title: 'Introduction to React',
    overview: 'Overview of React and setting up your first React application.',
    content:
      'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components, manage state, and handle user interactions efficiently. This lesson covers the basics of React, including how to set up a development environment, create a new React application using Create React App, and write your first component. Understanding React is essential for modern front-end development, as it provides a powerful and flexible way to build interactive user interfaces.',
    moduleId: ModulesSeed[8].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JSX and Rendering Elements',
    overview: 'Learn about JSX and how to render elements in React.',
    content:
      'JSX is a syntax extension for JavaScript that looks similar to XML. It allows you to write HTML-like code within your JavaScript files, which React then transforms into DOM elements. This lesson covers how to use JSX to create elements, embed expressions, and handle attributes. We will also explore how React updates the DOM efficiently using a virtual DOM. Understanding JSX and rendering elements is fundamental to building React applications, as it allows you to create and manage UI components effectively.',
    moduleId: ModulesSeed[8].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for "React Components and State"
  {
    id: uuidv4(),
    title: 'Creating and Using Components',
    overview: 'Learn how to create and use React components.',
    content:
      'Components are the building blocks of React applications. They can be functional or class-based, and they encapsulate their own logic and UI. This lesson covers how to create both types of components, pass props to them, and manage their state. We will also discuss the component lifecycle and how to use lifecycle methods. Understanding components is crucial for building scalable and maintainable React applications, as they allow you to break down your UI into reusable pieces.',
    moduleId: ModulesSeed[9].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'State and Props in React',
    overview: 'Understand state and props, and how they are used in React.',
    content:
      'State and props are core concepts in React. State is used to manage dynamic data within a component, while props are used to pass data from parent to child components. This lesson covers how to define and update state using the useState hook, pass props to child components, and handle events to update state. We will also discuss how state and props are used to create interactive and data-driven UIs. Understanding state and props is essential for building dynamic and responsive React applications.',
    moduleId: ModulesSeed[9].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
