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

  {
    id: uuidv4(),
    title: 'Introduction to Python',
    overview: 'Get started with Python programming language.',
    content:
      'Python is a high-level, interpreted programming language that is easy to learn and use. This lesson covers the basics of Python, including data types, variables, and basic syntax. We will also discuss how to write and run Python code, and how to use the Python interpreter.',
    moduleId: ModulesSeed[10].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Python Data Types',
    overview: 'Learn about the different data types in Python.',
    content:
      'Python has several built-in data types, including numbers, strings, lists, and dictionaries. This lesson covers the basics of each data type, including how to create and manipulate them. We will also discuss how to use data types to store and retrieve data in Python.',
    moduleId: ModulesSeed[10].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Python Control Structures',
    overview: 'Learn how to control the flow of your Python code.',
    content:
      'Control structures are used to control the flow of your Python code. This lesson covers the basics of if-else statements, for loops, and while loops. We will also discuss how to use control structures to make your code more efficient and easier to read.',
    moduleId: ModulesSeed[10].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Lists in Python',
    overview: 'Learn about lists in Python.',
    content:
      'Lists are a fundamental data structure in Python. This lesson covers how to create and manipulate lists, including how to add, remove, and modify elements. We will also discuss how to use lists to store and retrieve data in Python.',
    moduleId: ModulesSeed[11].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Tuples in Python',
    overview: 'Learn about tuples in Python.',
    content:
      'Tuples are similar to lists, but they are immutable. This lesson covers how to create and manipulate tuples, including how to add, remove, and modify elements. We will also discuss how to use tuples to store and retrieve data in Python.',
    moduleId: ModulesSeed[11].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Dictionaries in Python',
    overview: 'Learn about dictionaries in Python.',
    content:
      'Dictionaries are a fundamental data structure in Python. This lesson covers how to create and manipulate dictionaries, including how to add, remove, and modify key-value pairs. We will also discuss how to use dictionaries to store and retrieve data in Python.',
    moduleId: ModulesSeed[11].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'Reading and Writing Files in Python',
    overview: 'Learn how to read and write files in Python.',
    content:
      'Reading and writing files is a fundamental task in Python. This lesson covers how to read and write text files, including how to open and close files, and how to read and write data. We will also discuss how to use the open function to read and write files.',
    moduleId: ModulesSeed[12].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Working with CSV Files in Python',
    overview: 'Learn how to work with CSV files in Python.',
    content:
      'CSV files are a common format for storing and exchanging data. This lesson covers how to read and write CSV files in Python, including how to use the csv module to read and write data. We will also discuss how to use the pandas library to work with CSV files.',
    moduleId: ModulesSeed[12].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Working with JSON Files in Python',
    overview: 'Learn how to work with JSON files in Python.',
    content:
      'JSON files are a common format for storing and exchanging data. This lesson covers how to read and write JSON files in Python, including how to use the json module to read and write data. We will also discuss how to use the pandas library to work with JSON files.',
    moduleId: ModulesSeed[12].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'Introduction to C++',
    overview: 'Get started with C++ programming language.',
    content:
      'C++ is a powerful, general-purpose programming language that is widely used for developing a variety of applications. This lesson covers the basics of C++, including its history, features, and applications. We will also discuss how to set up your development environment and write your first C++ program.',
    moduleId: ModulesSeed[13].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Syntax and Structure',
    overview: 'Learn about the syntax and structure of C++ code.',
    content:
      'C++ has a specific syntax and structure that must be followed to write valid and executable code. This lesson covers the basic syntax of C++, including keywords, identifiers, and operators. We will also discuss how to structure a C++ program and how to use comments to document your code.',
    moduleId: ModulesSeed[13].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Data Types',
    overview: 'Learn about the different data types in C++.',
    content:
      'C++ has several built-in data types, including integers, floating-point numbers, characters, and booleans. This lesson covers the basics of each data type, including their size, range, and how to declare and use them. We will also discuss how to use data types to store and manipulate data in C++ programs.',
    moduleId: ModulesSeed[14].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Variables',
    overview: 'Learn how to declare and use variables in C++.',
    content:
      'Variables are used to store data in C++ programs. This lesson covers how to declare and initialize variables, including how to use different types of variables and how to assign values to them. We will also discuss how to use variables to perform calculations and how to use the const keyword to declare constants.',
    moduleId: ModulesSeed[14].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ If-Else Statements',
    overview: 'Learn how to use if-else statements in C++.',
    content:
      'If-else statements are used to control the flow of execution in C++ programs. This lesson covers how to use if-else statements to make decisions based on conditions. We will also discuss how to use relational and logical operators in if-else statements and how to nest if-else statements.',
    moduleId: ModulesSeed[15].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Loops',
    overview: 'Learn how to use loops in C++.',
    content:
      'Loops are used to execute a block of code repeatedly in C++ programs. This lesson covers the different types of loops in C++, including for, while, and do-while loops. We will also discuss how to use loops to iterate over arrays and how to use the break and continue statements to control loop execution.',
    moduleId: ModulesSeed[15].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Defining and Calling Functions',
    overview: 'Learn how to define and call functions in C++.',
    content:
      'Functions are used to encapsulate a block of code that performs a specific task in C++ programs. This lesson covers how to define and call functions, including how to pass arguments to functions and how to return values from functions. We will also discuss how to use function prototypes and how to overload functions.',
    moduleId: ModulesSeed[16].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Function Scope and Storage Classes',
    overview: 'Learn about function scope and storage classes in C++.',
    content:
      'Function scope and storage classes determine the visibility and lifetime of variables in C++ programs. This lesson covers the different types of function scope, including local, global, and static scope. We will also discuss the different storage classes in C++, including auto, register, static, and extern, and how to use them to control variable visibility and lifetime.',
    moduleId: ModulesSeed[16].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Arrays',
    overview: 'Learn how to use arrays in C++.',
    content:
      'Arrays are used to store collections of data of the same type in C++ programs. This lesson covers how to declare and initialize arrays, including how to access array elements and how to use array subscripts. We will also discuss how to pass arrays to functions and how to use array pointers.',
    moduleId: ModulesSeed[17].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'C++ Pointers',
    overview: 'Learn how to use pointers in C++.',
    content:
      'Pointers are used to store memory addresses in C++ programs. This lesson covers how to declare and use pointers, including how to access the value stored at a memory address and how to perform pointer arithmetic. We will also discuss how to use pointers to pass arguments to functions and how to use pointers to dynamically allocate memory.',
    moduleId: ModulesSeed[17].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to NestJS',
    overview:
      'Get started with NestJS and learn about its features and architecture.',
    content:
      'NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. This lesson covers the basics of NestJS, including its features, architecture, and how it compares to other Node.js frameworks. We will also discuss how to set up a new NestJS project and how to run a basic application.',
    moduleId: ModulesSeed[18].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Modules and Controllers',
    overview: 'Learn how to create modules and controllers in NestJS.',
    content:
      'Modules and controllers are fundamental building blocks of NestJS applications. This lesson covers how to create modules and controllers, including how to define routes and how to handle HTTP requests. We will also discuss how to use dependency injection to manage dependencies between modules and controllers.',
    moduleId: ModulesSeed[18].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Services and Providers',
    overview: 'Learn how to create services and providers in NestJS.',
    content:
      'Services and providers are used to encapsulate business logic in NestJS applications. This lesson covers how to create services and providers, including how to inject dependencies into services and how to use providers to share data between modules. We will also discuss how to use the @Injectable decorator to mark a class as a provider.',
    moduleId: ModulesSeed[18].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Middleware and Pipes',
    overview: 'Learn how to use middleware and pipes in NestJS.',
    content:
      'Middleware and pipes are used to transform and validate data in NestJS applications. This lesson covers how to create middleware and pipes, including how to use the @Injectable decorator to mark a class as a pipe and how to use the @UsePipes decorator to apply pipes to routes. We will also discuss how to use built-in pipes provided by NestJS, such as the ValidationPipe.',
    moduleId: ModulesSeed[18].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Exception Handling',
    overview: 'Learn how to handle exceptions in NestJS.',
    content:
      'Exception handling is an important aspect of building robust applications. This lesson covers how to handle exceptions in NestJS, including how to create custom exceptions and how to use the @HttpException decorator to throw exceptions. We will also discuss how to use the built-in exception filter provided by NestJS to handle exceptions globally.',
    moduleId: ModulesSeed[18].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'NestJS Authentication and Authorization',
    overview:
      'Learn how to implement authentication and authorization in NestJS.',
    content:
      'Authentication and authorization are essential features of most web applications. This lesson covers how to implement authentication and authorization in NestJS, including how to use JSON Web Tokens (JWT) for authentication and how to use role-based access control (RBAC) for authorization. We will also discuss how to use the @UseGuards decorator to apply authentication and authorization guards to routes.',
    moduleId: ModulesSeed[19].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Database Integration',
    overview: 'Learn how to integrate databases with NestJS.',
    content:
      'Most applications require persistent storage, which is typically provided by databases. This lesson covers how to integrate databases with NestJS, including how to use the TypeORM library for database access and how to define entities and repositories. We will also discuss how to use the @InjectRepository decorator to inject repositories into services.',
    moduleId: ModulesSeed[19].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS WebSockets and Real-Time Communication',
    overview:
      'Learn how to implement real-time communication with WebSockets in NestJS.',
    content:
      'Real-time communication is an important feature of many modern web applications. This lesson covers how to implement real-time communication with WebSockets in NestJS, including how to use the @WebSocketGateway decorator to define WebSocket gateways and how to use the @SubscribeMessage decorator to handle WebSocket events. We will also discuss how to use the @MessageBody decorator to access message payloads and how to use the @ConnectedSocket decorator to access the connected socket.',
    moduleId: ModulesSeed[19].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Caching and Performance Optimization',
    overview: 'Learn how to optimize performance with caching in NestJS.',
    content:
      'Performance is a critical aspect of building scalable applications. This lesson covers how to optimize performance with caching in NestJS, including how to use the built-in cache module provided by NestJS and how to configure cache options such as TTL and max items. We will also discuss how to use the @CacheKey and @CacheTTL decorators to control caching behavior at the route level.',
    moduleId: ModulesSeed[19].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'NestJS Testing and Deployment',
    overview: 'Learn how to test and deploy NestJS applications.',
    content:
      'Testing and deployment are essential aspects of the application development lifecycle. This lesson covers how to test and deploy NestJS applications, including how to write unit tests and integration tests using Jest and how to use the built-in testing utilities provided by NestJS. We will also discuss how to deploy NestJS applications to popular hosting platforms such as AWS, Google Cloud, and Heroku.',
    moduleId: ModulesSeed[19].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to Docker Networking',
    overview:
      'Explore Docker networking concepts and how containers communicate with each other.',
    content:
      'This lesson introduces Docker networking, covering basic networking concepts, container communication, and different networking modes in Docker.',
    moduleId: ModulesSeed[20].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced Docker Networking',
    overview:
      'Learn advanced Docker networking features and techniques for complex network setups.',
    content:
      'This lesson dives deeper into Docker networking, covering topics such as overlay networks, service discovery, and network security.',
    moduleId: ModulesSeed[20].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Docker Volumes and Storage Module
  {
    id: uuidv4(),
    title: 'Docker Volumes',
    overview:
      'Understand Docker volume concepts and how to manage data persistence in containers.',
    content:
      'This lesson covers Docker volumes, including volume types, volume management, and best practices for data persistence in Docker containers.',
    moduleId: ModulesSeed[21].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Docker Storage Drivers',
    overview:
      'Explore different Docker storage drivers and their use cases for optimizing container storage.',
    content:
      'This lesson discusses Docker storage drivers, including built-in drivers, third-party drivers, and strategies for optimizing container storage performance.',
    moduleId: ModulesSeed[21].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Docker Orchestration Module
  {
    id: uuidv4(),
    title: 'Introduction to Docker Orchestration',
    overview:
      'Learn about Docker orchestration tools and techniques for managing containerized applications at scale.',
    content:
      'This lesson introduces Docker orchestration, covering orchestration concepts, container scheduling, and popular Docker orchestration tools.',
    moduleId: ModulesSeed[22].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Docker Swarm',
    overview:
      'Discover Docker Swarm, a native Docker orchestration tool for managing container clusters.',
    content:
      'This lesson focuses on Docker Swarm, covering Swarm architecture, cluster management, and deploying services with Docker Swarm.',
    moduleId: ModulesSeed[22].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to Responsive Web Design',
    overview:
      'Learn the principles and techniques of designing websites that adapt to different devices and screen sizes.',
    content:
      'This lesson introduces responsive web design, covering fluid grids, flexible images, and media queries for creating websites that look great on any device.',
    moduleId: ModulesSeed[23].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced Responsive Techniques',
    overview:
      'Explore advanced techniques for responsive web design, including viewport meta tag, flexbox, and CSS grid layouts.',
    content:
      'This lesson dives deeper into responsive web design, covering advanced techniques and best practices for creating complex responsive layouts and components.',
    moduleId: ModulesSeed[23].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // CSS Flexbox and Grid Module
  {
    id: uuidv4(),
    title: 'CSS Flexbox Fundamentals',
    overview:
      'Master the fundamentals of CSS Flexbox layout model for creating flexible and responsive web layouts.',
    content:
      'This lesson covers the basics of CSS Flexbox, including flex containers, flex items, and common layout patterns for building responsive web designs.',
    moduleId: ModulesSeed[24].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'CSS Grid Layouts',
    overview:
      'Learn how to use CSS Grid layout to create advanced grid-based web designs with precise control over layout and alignment.',
    content:
      'This lesson explores CSS Grid layout, covering grid containers, grid items, grid tracks, and various grid properties for building complex web layouts.',
    moduleId: ModulesSeed[24].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // JavaScript for Web Designers Module
  {
    id: uuidv4(),
    title: 'JavaScript Essentials for Web Designers',
    overview:
      'Get familiar with essential JavaScript concepts and techniques for enhancing web designs and interactions.',
    content:
      'This lesson covers fundamental JavaScript concepts, including variables, data types, operators, and basic DOM manipulation for creating interactive web designs.',
    moduleId: ModulesSeed[25].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'DOM Manipulation and Events Handling',
    overview:
      'Learn how to manipulate the Document Object Model (DOM) and handle events using JavaScript to create dynamic and interactive web experiences.',
    content:
      'This lesson dives deeper into DOM manipulation and event handling, covering DOM traversal, event listeners, and common event handling patterns for creating interactive web applications.',
    moduleId: ModulesSeed[25].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Understanding .NET Framework',
    overview:
      'Learn about the .NET Framework and its components for building Windows applications and web services.',
    content:
      'This lesson provides an overview of the .NET Framework, including its architecture, Common Language Runtime (CLR), and class library for developing Windows applications and web services.',
    moduleId: ModulesSeed[26].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Getting Started with .NET Core',
    overview:
      'Get started with .NET Core, a cross-platform and open-source framework for building modern applications.',
    content:
      'This lesson introduces .NET Core, covering its features, advantages, and how to set up a development environment for building cross-platform applications.',
    moduleId: ModulesSeed[26].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // C# Programming Basics Module
  {
    id: uuidv4(),
    title: 'Introduction to C# Programming',
    overview:
      'Learn the basics of C# programming language, including syntax, data types, and control flow structures.',
    content:
      'This lesson covers the fundamentals of C# programming, including variables, data types, operators, and control flow structures such as loops and conditional statements.',
    moduleId: ModulesSeed[27].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Object-Oriented Programming with C#',
    overview:
      'Explore object-oriented programming (OOP) concepts in C# for building modular and maintainable code.',
    content:
      'This lesson dives deeper into object-oriented programming (OOP) concepts in C#, covering classes, objects, inheritance, polymorphism, and encapsulation for building modular and maintainable code.',
    moduleId: ModulesSeed[27].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // ASP.NET Core Fundamentals Module
  {
    id: uuidv4(),
    title: 'Getting Started with ASP.NET Core',
    overview:
      'Learn the basics of ASP.NET Core for building web applications and APIs.',
    content:
      'This lesson introduces ASP.NET Core, covering its architecture, features, and how to create web applications and APIs using ASP.NET Core MVC and Web API frameworks.',
    moduleId: ModulesSeed[28].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Building RESTful APIs with ASP.NET Core',
    overview:
      'Explore the principles and best practices for building RESTful APIs using ASP.NET Core Web API framework.',
    content:
      'This lesson focuses on building RESTful APIs with ASP.NET Core Web API, covering routing, controllers, model binding, validation, and serialization techniques.',
    moduleId: ModulesSeed[28].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to Vue.js',
    overview:
      'Get started with Vue.js, a progressive JavaScript framework for building user interfaces.',
    content:
      'This lesson introduces Vue.js, covering its features, advantages, and how to set up a development environment for building Vue.js applications.',
    moduleId: ModulesSeed[29].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Vue.js Directives and Data Binding',
    overview:
      'Learn about Vue.js directives and data binding techniques for building dynamic and reactive UIs.',
    content:
      'This lesson covers Vue.js directives, including v-bind, v-model, and v-for, and how to use them for data binding and manipulating the DOM.',
    moduleId: ModulesSeed[29].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Vue.js Components Module
  {
    id: uuidv4(),
    title: 'Creating Vue.js Components',
    overview:
      'Learn how to create and use Vue.js components to build reusable and modular UIs.',
    content:
      'This lesson explores Vue.js components, covering component structure, props, events, and communication between components.',
    moduleId: ModulesSeed[30].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Vue.js Component Lifecycle',
    overview:
      'Understand the lifecycle hooks of Vue.js components and how to use them for component initialization and cleanup.',
    content:
      'This lesson dives deeper into Vue.js component lifecycle, covering lifecycle hooks such as created, mounted, updated, and destroyed.',
    moduleId: ModulesSeed[30].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Vue.js Routing and State Management Module
  {
    id: uuidv4(),
    title: 'Vue Router',
    overview:
      'Learn how to use Vue Router for adding routing functionality to Vue.js applications and creating single-page applications (SPAs).',
    content:
      'This lesson covers Vue Router, including routing concepts, navigation guards, dynamic routing, and nested routes for building SPAs with Vue.js.',
    moduleId: ModulesSeed[31].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Vuex for State Management',
    overview:
      'Explore Vuex, the official state management library for Vue.js, and learn how to manage application state effectively.',
    content:
      'This lesson focuses on Vuex, covering state, mutations, actions, and getters for managing application state in Vue.js applications.',
    moduleId: ModulesSeed[31].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to Flutter',
    overview:
      'Get started with Flutter, a modern framework for building native mobile applications for iOS and Android.',
    content:
      'This lesson introduces Flutter, covering its features, advantages, and how to set up a development environment for building Flutter applications.',
    moduleId: ModulesSeed[32].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Flutter Architecture Overview',
    overview:
      'Understand the architecture of Flutter applications and how Flutter works under the hood.',
    content:
      'This lesson dives deeper into Flutter architecture, covering widget tree, element tree, rendering pipeline, and how Flutter renders UIs efficiently.',
    moduleId: ModulesSeed[32].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Flutter Widgets and Layouts Module
  {
    id: uuidv4(),
    title: 'Flutter Widgets Fundamentals',
    overview:
      'Learn the fundamentals of Flutter widgets for building interactive UIs and layouts.',
    content:
      'This lesson covers basic Flutter widgets, including text, image, container, row, column, and how to use them to create UI layouts.',
    moduleId: ModulesSeed[33].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Layouts in Flutter',
    overview:
      'Explore different layout widgets and techniques in Flutter for creating responsive and flexible UI designs.',
    content:
      'This lesson focuses on Flutter layout widgets, covering container, padding, align, stack, and other layout widgets for building complex UI designs.',
    moduleId: ModulesSeed[33].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // State Management in Flutter Module
  {
    id: uuidv4(),
    title: 'State Management Techniques',
    overview:
      'Learn various state management techniques in Flutter for managing application state effectively.',
    content:
      'This lesson covers different state management techniques in Flutter, including setState, InheritedWidget, Provider, Redux, and Bloc for managing application state.',
    moduleId: ModulesSeed[34].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Using Provider for State Management',
    overview:
      'Understand how to use Provider package for state management in Flutter applications.',
    content:
      'This lesson focuses on using the Provider package for state management in Flutter, covering provider setup, provider usage, and advanced usage patterns.',
    moduleId: ModulesSeed[34].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to TypeScript',
    overview:
      'Get started with TypeScript, a statically typed superset of JavaScript for building scalable applications.',
    content:
      'This lesson introduces TypeScript, covering its features, advantages, and how to set up a development environment for building TypeScript applications.',
    moduleId: ModulesSeed[35].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'TypeScript Data Types and Variables',
    overview:
      'Learn about TypeScript data types and variable declarations for writing type-safe code.',
    content:
      'This lesson covers TypeScript data types such as string, number, boolean, arrays, tuples, enums, and variable declarations for writing type-safe code in TypeScript.',
    moduleId: ModulesSeed[35].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Advanced TypeScript Features Module
  {
    id: uuidv4(),
    title: 'TypeScript Functions and Interfaces',
    overview:
      'Explore TypeScript functions and interfaces for writing modular and maintainable code.',
    content:
      'This lesson focuses on TypeScript functions, function types, arrow functions, interfaces, and how to use them for writing modular and maintainable code.',
    moduleId: ModulesSeed[36].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Generics and Advanced Types in TypeScript',
    overview:
      'Understand TypeScript generics and advanced types for writing flexible and reusable code.',
    content:
      'This lesson dives deeper into TypeScript generics, conditional types, mapped types, and key types for writing flexible and reusable code in TypeScript.',
    moduleId: ModulesSeed[36].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced C# Concepts',
    overview:
      'Explore advanced concepts in C# programming language for building high-performance applications.',
    content:
      'This lesson covers advanced concepts in C# such as delegates, events, lambda expressions, nullable types, and dynamic types.',
    moduleId: ModulesSeed[37].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Asynchronous Programming in C#',
    overview:
      'Learn how to write asynchronous code in C# using async/await keywords for better performance and responsiveness.',
    content:
      'This lesson dives deeper into asynchronous programming in C#, covering async/await keywords, tasks, and how to write asynchronous code for handling I/O-bound and CPU-bound operations.',
    moduleId: ModulesSeed[37].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'LINQ and Lambda Expressions',
    overview:
      'Master LINQ (Language-Integrated Query) and lambda expressions in C# for querying and manipulating data collections.',
    content:
      'This lesson focuses on LINQ queries, lambda expressions, standard query operators, and how to use them for querying and manipulating data collections in C#.',
    moduleId: ModulesSeed[37].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Exception Handling and Logging',
    overview:
      'Learn how to handle exceptions and implement logging in C# applications for better error handling and debugging.',
    content:
      'This lesson covers exception handling techniques, try-catch-finally blocks, custom exceptions, logging frameworks, and best practices for error handling and logging in C# applications.',
    moduleId: ModulesSeed[37].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced C# Best Practices',
    overview:
      'Discover advanced best practices and techniques for writing clean, efficient, and maintainable C# code.',
    content:
      'This lesson explores advanced C# best practices, including SOLID principles, design patterns, unit testing, performance optimization, and code refactoring techniques.',
    moduleId: ModulesSeed[37].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Introduction to Kubernetes Module
  {
    id: uuidv4(),
    title: 'Understanding Kubernetes Architecture',
    overview:
      'Learn about the architecture of Kubernetes and its components for orchestrating containerized applications.',
    content:
      'This lesson provides an overview of Kubernetes architecture, including master nodes, worker nodes, API server, etcd, scheduler, controller manager, and kubelet.',
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Objects and Resources',
    overview:
      'Explore Kubernetes objects and resources such as pods, deployments, services, and ingress for defining and managing applications.',
    content:
      'This lesson dives deeper into Kubernetes objects and resources, covering pods, deployments, services, ingress, config maps, secrets, and persistent volumes.',
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'What is Kubernetes?',
    overview: 'Learn the basics of Kubernetes and its core concepts.',
    content: `
    <h2>What is Kubernetes?</h2>
    <p>Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. Key concepts include:</p>
    <ul>
      <li><strong>Containers:</strong> Lightweight, portable, and self-sufficient software environments.</li>
      <li><strong>Cluster:</strong> A set of nodes that run containerized applications.</li>
      <li><strong>Master Node:</strong> Manages the Kubernetes cluster.</li>
      <li><strong>Worker Node:</strong> Runs the containerized applications.</li>
    </ul>
    <p>Kubernetes helps manage containerized applications across multiple hosts and provides mechanisms for deployment, maintenance, and scaling of applications.</p>
  `,
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Architecture',
    overview: 'Understand the architecture of Kubernetes and its components.',
    content: `
    <h2>Kubernetes Architecture</h2>
    <p>The architecture of Kubernetes consists of several key components:</p>
    <ul>
      <li><strong>Master Node:</strong> Manages the cluster and coordinates activities.</li>
      <li><strong>API Server:</strong> Provides the Kubernetes API.</li>
      <li><strong>etcd:</strong> Stores configuration data and the state of the cluster.</li>
      <li><strong>Controller Manager:</strong> Handles routine tasks in the cluster.</li>
      <li><strong>Scheduler:</strong> Assigns workloads to nodes.</li>
      <li><strong>Worker Nodes:</strong> Run the containerized applications and contain the kubelet and kube-proxy components.</li>
    </ul>
    <p>The Kubernetes architecture enables efficient management and scaling of containerized applications.</p>
  `,
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Pods',
    overview: 'Learn about pods, the basic unit of deployment in Kubernetes.',
    content: `
    <h2>Kubernetes Pods</h2>
    <p>Pods are the smallest deployable units in Kubernetes. They represent a single instance of a running process in a cluster. Key features include:</p>
    <ul>
      <li><strong>Single Container:</strong> Most pods run a single container.</li>
      <li><strong>Multiple Containers:</strong> Pods can also run multiple containers that share resources.</li>
      <li><strong>Shared Storage:</strong> Containers in a pod share storage volumes.</li>
      <li><strong>Shared Network:</strong> Containers in a pod share an IP address and port space.</li>
    </ul>
    <p>Understanding pods is essential for managing containerized applications in Kubernetes.</p>
  `,
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Services',
    overview:
      'Explore services in Kubernetes and how they enable communication between components.',
    content: `
    <h2>Kubernetes Services</h2>
    <p>Services in Kubernetes provide a stable IP address and DNS name to a set of pods. Key concepts include:</p>
    <ul>
      <li><strong>ClusterIP:</strong> Exposes the service on a cluster-internal IP.</li>
      <li><strong>NodePort:</strong> Exposes the service on each node's IP at a static port.</li>
      <li><strong>LoadBalancer:</strong> Exposes the service externally using a cloud provider's load balancer.</li>
      <li><strong>ExternalName:</strong> Maps the service to the contents of the externalName field (e.g., foo.bar.example.com).</li>
    </ul>
    <p>Services enable communication between different parts of your application and ensure that traffic is routed to the correct pods.</p>
  `,
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes ConfigMaps and Secrets',
    overview:
      'Understand how to manage configuration data and sensitive information using ConfigMaps and Secrets.',
    content: `
    <h2>Kubernetes ConfigMaps and Secrets</h2>
    <p>ConfigMaps and Secrets are used to manage configuration data and sensitive information in Kubernetes. Key concepts include:</p>
    <ul>
      <li><strong>ConfigMaps:</strong> Store configuration data as key-value pairs.</li>
      <li><strong>Secrets:</strong> Store sensitive data, such as passwords and tokens, in an encrypted format.</li>
      <li><strong>Usage:</strong> Both ConfigMaps and Secrets can be mounted as volumes or exposed as environment variables in pods.</li>
    </ul>
    <p>Using ConfigMaps and Secrets, you can decouple configuration artifacts from image content to keep containerized applications portable.</p>
  `,
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Kubernetes Deployment Strategies Module
  {
    id: uuidv4(),
    title: 'Deploying Applications with Kubernetes',
    overview:
      'Learn different strategies for deploying applications with Kubernetes, including imperative and declarative approaches.',
    content:
      'This lesson covers various deployment strategies in Kubernetes, including imperative commands, YAML manifests, Helm charts, and Kubernetes operators.',
    moduleId: ModulesSeed[39].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Scaling and Autoscaling in Kubernetes',
    overview:
      'Understand how to scale applications manually and automatically with Kubernetes using horizontal and vertical scaling techniques.',
    content:
      'This lesson focuses on scaling and autoscaling in Kubernetes, covering horizontal pod autoscaler (HPA), vertical pod autoscaler (VPA), and cluster autoscaler.',
    moduleId: ModulesSeed[39].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for Kubernetes Deployment Strategies Module
  {
    id: uuidv4(),
    title: 'Rolling Updates in Kubernetes',
    overview:
      'Learn about rolling updates and how to perform them in Kubernetes.',
    content: `
    <h2>Rolling Updates in Kubernetes</h2>
    <p>Rolling updates allow you to update your application without downtime by gradually replacing old pods with new ones. Key concepts include:</p>
    <ul>
      <li><strong>Deployment:</strong> Defines the desired state of an application, including the number of replicas and the container image version.</li>
      <li><strong>Strategy:</strong> The rolling update strategy is the default update strategy in Kubernetes.</li>
      <li><strong>MaxUnavailable:</strong> Specifies the maximum number of pods that can be unavailable during the update.</li>
      <li><strong>MaxSurge:</strong> Specifies the maximum number of pods that can be created above the desired number of pods during the update.</li>
    </ul>
    <p>Rolling updates ensure a smooth transition from the old version of your application to the new version with minimal impact on availability.</p>
  `,
    moduleId: ModulesSeed[39].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Blue-Green Deployments in Kubernetes',
    overview:
      'Understand blue-green deployments and how to implement them in Kubernetes.',
    content: `
    <h2>Blue-Green Deployments in Kubernetes</h2>
    <p>Blue-green deployments involve running two identical environments (blue and green) and switching traffic between them. Key concepts include:</p>
    <ul>
      <li><strong>Blue Environment:</strong> The current live environment serving production traffic.</li>
      <li><strong>Green Environment:</strong> The new environment with the updated version of your application.</li>
      <li><strong>Traffic Switch:</strong> Traffic is switched from the blue environment to the green environment once the green environment is verified.</li>
      <li><strong>Rollback:</strong> If any issues are detected, traffic can be switched back to the blue environment.</li>
    </ul>
    <p>Blue-green deployments reduce the risk of downtime and make it easier to rollback if something goes wrong.</p>
  `,
    moduleId: ModulesSeed[39].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'HTML Basics',
    overview:
      'Learn the basics of HTML (Hypertext Markup Language) for creating the structure of web pages.',
    content:
      'This lesson covers HTML fundamentals, including tags, elements, attributes, text formatting, lists, links, and images.',
    moduleId: ModulesSeed[40].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'HTML Forms and Tables',
    overview:
      'Explore HTML forms and tables for collecting user input and organizing data on web pages.',
    content:
      'This lesson focuses on HTML forms and tables, covering form elements, input types, form validation, table structure, and table styling.',
    moduleId: ModulesSeed[40].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Introduction to CSS Module
  {
    id: uuidv4(),
    title: 'CSS Basics',
    overview:
      'Learn the basics of CSS (Cascading Style Sheets) for styling and formatting web pages.',
    content:
      'This lesson covers CSS fundamentals, including selectors, properties, values, text styling, box model, and layout techniques.',
    moduleId: ModulesSeed[41].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'CSS Layouts and Flexbox',
    overview:
      'Explore CSS layout techniques and Flexbox for creating responsive and flexible page layouts.',
    content:
      'This lesson dives deeper into CSS layouts and Flexbox, covering layout techniques such as float, position, display properties, and Flexbox for building responsive designs.',
    moduleId: ModulesSeed[41].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Advanced HTML/CSS Techniques Module
  {
    id: uuidv4(),
    title: 'Responsive Web Design',
    overview:
      'Understand the principles of responsive web design and how to create mobile-friendly layouts using media queries.',
    content:
      'This lesson focuses on responsive web design principles, including viewport meta tag, media queries, fluid layouts, and responsive images for creating mobile-friendly web pages.',
    moduleId: ModulesSeed[42].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'CSS Preprocessors and Frameworks',
    overview:
      'Discover CSS preprocessors like Sass and LESS, and CSS frameworks like Bootstrap for speeding up web development.',
    content:
      'This lesson covers CSS preprocessors such as Sass and LESS, and CSS frameworks like Bootstrap, Foundation, and Bulma for speeding up and streamlining web development.',
    moduleId: ModulesSeed[42].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to Django',
    overview:
      'Get started with Django, a high-level Python web framework for rapid development of web applications.',
    content:
      'This lesson introduces Django, covering its features, architecture, installation, and setting up a Django project.',
    moduleId: ModulesSeed[43].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Django Project Structure',
    overview:
      'Understand the structure of a Django project and how to organize files and directories for building scalable applications.',
    content:
      'This lesson explores the structure of a Django project, including settings, URLs, apps, models, views, templates, and static files.',
    moduleId: ModulesSeed[43].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Django URLs and Views',
    overview:
      'Learn how to define URLs and views in Django for routing requests and handling user interactions.',
    content:
      'This lesson covers URL patterns, view functions, class-based views, URL namespaces, and how to map URLs to view functions or class-based views.',
    moduleId: ModulesSeed[43].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Django Models and ORM Module
  {
    id: uuidv4(),
    title: 'Django Models and Database',
    overview:
      'Explore Django models and ORM (Object-Relational Mapping) for defining data models and interacting with databases.',
    content:
      'This lesson focuses on Django models, including model fields, relationships, model methods, database migrations, and how to work with the Django ORM for database operations.',
    moduleId: ModulesSeed[44].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Database Migrations in Django',
    overview:
      'Understand Django database migrations and how to manage changes to the database schema over time.',
    content:
      'This lesson covers Django database migrations, including creating migrations, applying migrations, rolling back migrations, and managing database schema changes.',
    moduleId: ModulesSeed[44].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Django QuerySets and Managers',
    overview:
      'Learn how to use Django QuerySets and managers for querying and manipulating data in the database.',
    content:
      'This lesson dives deeper into Django QuerySets and managers, covering query operations, filtering, ordering, aggregations, and how to customize QuerySets using managers.',
    moduleId: ModulesSeed[44].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Django Views and Templates Module
  {
    id: uuidv4(),
    title: 'Django Templates and Template Language',
    overview:
      'Understand Django templates and template language for building dynamic and reusable HTML templates.',
    content:
      'This lesson covers Django templates, template syntax, template inheritance, template tags, filters, and how to create dynamic HTML templates for rendering data.',
    moduleId: ModulesSeed[45].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Working with Forms in Django',
    overview:
      'Learn how to create and handle HTML forms in Django for collecting user input and processing form submissions.',
    content:
      'This lesson focuses on working with forms in Django, including form creation, form validation, form handling, form rendering, and how to use built-in form classes and form validation.',
    moduleId: ModulesSeed[45].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Django Authentication and Authorization',
    overview:
      'Explore Django authentication and authorization mechanisms for securing web applications and managing user access.',
    content:
      'This lesson covers Django authentication system, user authentication, user registration, login, logout, permissions, groups, and how to implement user authentication and authorization in Django applications.',
    moduleId: ModulesSeed[45].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Django Forms and Authentication Module
  {
    id: uuidv4(),
    title: 'Django Forms and Formsets',
    overview:
      'Learn how to work with Django forms and formsets for handling user input and processing form submissions.',
    content:
      'This lesson covers Django forms, form validation, form handling, form rendering, and how to use formsets for working with multiple forms on a single page.',
    moduleId: ModulesSeed[46].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Django User Authentication',
    overview:
      'Understand Django user authentication mechanisms and how to implement user authentication in Django applications.',
    content:
      'This lesson focuses on Django user authentication, including built-in authentication views, user authentication backend, custom authentication, social authentication, and how to implement user authentication in Django applications.',
    moduleId: ModulesSeed[46].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'OAuth2 Authentication with Django REST Framework',
    overview:
      'Explore OAuth2 authentication with Django REST Framework for securing APIs and implementing token-based authentication.',
    content:
      'This lesson covers OAuth2 authentication, token-based authentication, JWT (JSON Web Tokens), OAuth2 flows, and how to implement OAuth2 authentication with Django REST Framework for securing APIs.',
    moduleId: ModulesSeed[47].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for JavaScript Functions and Scope Module
  {
    id: uuidv4(),
    title: 'JavaScript Functions',
    overview:
      'Learn about functions in JavaScript, including function declarations, expressions, and arrow functions.',
    content:
      'This lesson covers the basics of functions in JavaScript, including how to define and call functions, function parameters, return values, and different types of functions.',
    moduleId: ModulesSeed[48].id, // Starting from 48 and incrementing
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Scope and Closures',
    overview:
      'Understand the concept of scope in JavaScript and how closures work.',
    content:
      'This lesson dives into the scope of variables in JavaScript, including global scope, local scope, block scope, and how closures capture variables.',
    moduleId: ModulesSeed[48].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Hoisting',
    overview:
      'Learn about the concept of hoisting in JavaScript and how it affects variable and function declarations.',
    content:
      'This lesson explains hoisting in JavaScript, covering how variable and function declarations are moved to the top of their containing scope during the compilation phase.',
    moduleId: ModulesSeed[48].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for JavaScript Objects and Arrays Module
  {
    id: uuidv4(),
    title: 'JavaScript Objects',
    overview:
      'Explore objects in JavaScript, including object literals, properties, and methods.',
    content:
      'This lesson covers the basics of JavaScript objects, including creating objects, accessing and modifying object properties, and using methods.',
    moduleId: ModulesSeed[49].id, // Incrementing moduleId for the new module
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Arrays',
    overview:
      'Learn about arrays in JavaScript, including array methods and properties.',
    content:
      'This lesson covers JavaScript arrays, including how to create arrays, access and modify array elements, and use common array methods like push, pop, shift, unshift, map, filter, and reduce.',
    moduleId: ModulesSeed[49].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Iterating Over Arrays and Objects',
    overview:
      'Understand how to iterate over arrays and objects in JavaScript using loops and methods.',
    content:
      'This lesson explores different ways to iterate over arrays and objects in JavaScript, including for loops, for...in, for...of, and array iteration methods.',
    moduleId: ModulesSeed[49].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for JavaScript Asynchronous Programming Module
  {
    id: uuidv4(),
    title: 'JavaScript Promises',
    overview:
      'Learn about promises in JavaScript for handling asynchronous operations.',
    content:
      'This lesson covers the basics of promises in JavaScript, including creating promises, chaining promises, and handling errors with promises.',
    moduleId: ModulesSeed[50].id, // Incrementing moduleId for the new module
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Async/Await in JavaScript',
    overview:
      'Understand the async/await syntax in JavaScript for working with promises more easily.',
    content:
      'This lesson dives into the async/await syntax in JavaScript, covering how to write asynchronous code that looks synchronous, error handling, and best practices.',
    moduleId: ModulesSeed[50].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'JavaScript Callbacks',
    overview:
      'Explore callbacks in JavaScript and how they are used for asynchronous programming.',
    content:
      'This lesson explains callbacks in JavaScript, including how to create and use callbacks, nested callbacks, and how to avoid callback hell.',
    moduleId: ModulesSeed[50].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for Kubernetes Architecture and Components Module
  {
    id: uuidv4(),
    title: 'Kubernetes Cluster Architecture',
    overview:
      'Understand the architecture of a Kubernetes cluster and its main components.',
    content: `<h2>Kubernetes Cluster Architecture</h2>
<p>Kubernetes clusters are composed of various components that work together to manage containers. The main components include:</p>
<ul>
  <li><strong>Master Node:</strong> Manages the cluster and coordinates tasks such as scheduling and scaling.</li>
  <li><strong>Worker Nodes:</strong> Run the containerized applications.</li>
  <li><strong>etcd:</strong> A key-value store for storing cluster data.</li>
  <li><strong>Controller Manager:</strong> Manages the state of the cluster.</li>
  <li><strong>Scheduler:</strong> Assigns workloads to nodes.</li>
  <li><strong>Kubelet:</strong> An agent that runs on each worker node and ensures containers are running.</li>
</ul>
<p>By understanding these components, you can better manage and troubleshoot a Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[51].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes API and kubectl',
    overview: 'Learn how to interact with the Kubernetes API using kubectl.',
    content: `<h2>Kubernetes API and kubectl</h2>
<p>The Kubernetes API is the interface used to interact with the Kubernetes cluster. kubectl is the command-line tool used to interact with the API. Key commands include:</p>
<ul>
  <li><code>kubectl get</code>: List resources</li>
  <li><code>kubectl create</code>: Create a resource</li>
  <li><code>kubectl apply</code>: Apply a configuration to a resource</li>
  <li><code>kubectl delete</code>: Delete a resource</li>
</ul>
<p>Using kubectl, you can manage your cluster efficiently and perform operations like scaling, updating, and troubleshooting.</p>`,
    moduleId: ModulesSeed[51].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Controllers',
    overview: 'Explore the different types of controllers in Kubernetes.',
    content: `<h2>Kubernetes Controllers</h2>
<p>Controllers in Kubernetes ensure the desired state of resources. Key controllers include:</p>
<ul>
  <li><strong>Replication Controller:</strong> Ensures a specified number of pod replicas are running.</li>
  <li><strong>Deployment Controller:</strong> Manages updates to applications.</li>
  <li><strong>DaemonSet Controller:</strong> Ensures that a copy of a pod runs on all (or some) nodes.</li>
  <li><strong>StatefulSet Controller:</strong> Manages stateful applications.</li>
  <li><strong>Job Controller:</strong> Creates one or more pods and ensures that a specified number of them successfully terminate.</li>
</ul>
<p>Controllers help automate the management of applications and resources in a Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[51].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Pods and Services',
    overview:
      'Learn about pods and services in Kubernetes and how they work together.',
    content: `<h2>Kubernetes Pods and Services</h2>
<p>Pods are the smallest deployable units in Kubernetes, consisting of one or more containers. Services provide a stable IP address and DNS name for accessing pods. Key concepts include:</p>
<ul>
  <li><strong>Pod:</strong> The smallest unit of deployment in Kubernetes.</li>
  <li><strong>Service:</strong> An abstraction that defines a logical set of pods and a policy for accessing them.</li>
  <li><strong>ClusterIP:</strong> Exposes the service on a cluster-internal IP.</li>
  <li><strong>NodePort:</strong> Exposes the service on each node's IP at a static port.</li>
  <li><strong>LoadBalancer:</strong> Exposes the service externally using a cloud provider's load balancer.</li>
</ul>
<p>Understanding pods and services is crucial for managing applications in a Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[51].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Namespaces',
    overview:
      'Explore Kubernetes namespaces and their role in organizing resources.',
    content: `<h2>Kubernetes Namespaces</h2>
<p>Namespaces in Kubernetes are used to organize and separate resources within a cluster. They are particularly useful in environments with many users or teams, allowing for resource isolation and access control. Key concepts include:</p>
<ul>
  <li><strong>Default Namespace:</strong> The default namespace for objects without a specific namespace.</li>
  <li><strong>Kube-system Namespace:</strong> Reserved for Kubernetes system components.</li>
  <li><strong>Custom Namespaces:</strong> User-defined namespaces for organizing resources.</li>
  <li><strong>Resource Quotas:</strong> Limit the resources that can be consumed in a namespace.</li>
  <li><strong>Network Policies:</strong> Define the network access rules within a namespace.</li>
</ul>
<p>Namespaces help manage and organize resources efficiently in a Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[51].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for Kubernetes Networking Module
  {
    id: uuidv4(),
    title: 'Kubernetes Networking Basics',
    overview: 'Learn the basics of networking in Kubernetes.',
    content: `<h2>Kubernetes Networking Basics</h2>
<p>Kubernetes networking model is designed to provide a consistent network experience across clusters. Key components include:</p>
<ul>
  <li><strong>Pod-to-Pod Communication:</strong> All pods can communicate with each other without NAT.</li>
  <li><strong>Service Discovery:</strong> Services are discovered using DNS and environment variables.</li>
  <li><strong>Network Policies:</strong> Define rules for pod communication.</li>
</ul>
<p>Understanding these basics is crucial for configuring and troubleshooting network-related issues in Kubernetes.</p>`,
    moduleId: ModulesSeed[52].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Ingress',
    overview:
      'Explore how to use Ingress in Kubernetes for managing external access to services.',
    content: `<h2>Kubernetes Ingress</h2>
<p>Ingress in Kubernetes provides a way to expose HTTP and HTTPS routes from outside the cluster to services within the cluster. Key concepts include:</p>
<ul>
  <li><strong>Ingress Controller:</strong> Manages the Ingress resources and routes traffic.</li>
  <li><strong>Ingress Resources:</strong> Define the routing rules.</li>
  <li><strong>Path-based Routing:</strong> Routes traffic based on URL paths.</li>
  <li><strong>Host-based Routing:</strong> Routes traffic based on hostnames.</li>
</ul>
<p>Using Ingress, you can manage external access to your services effectively.</p>`,
    moduleId: ModulesSeed[52].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Network Policies',
    overview:
      'Learn how to use network policies to control traffic between pods.',
    content: `<h2>Kubernetes Network Policies</h2>
<p>Network policies in Kubernetes allow you to control the traffic flow between pods. Key concepts include:</p>
<ul>
  <li><strong>Ingress Policy:</strong> Controls inbound traffic to pods.</li>
  <li><strong>Egress Policy:</strong> Controls outbound traffic from pods.</li>
  <li><strong>Selectors:</strong> Define the target pods for the policy.</li>
  <li><strong>Rules:</strong> Define the allowed traffic.</li>
</ul>
<p>By using network policies, you can secure your applications by restricting pod communication.</p>`,
    moduleId: ModulesSeed[52].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Service Mesh',
    overview:
      'Understand the concept of a service mesh and its role in Kubernetes networking.',
    content: `<h2>Kubernetes Service Mesh</h2>
<p>A service mesh in Kubernetes provides a dedicated infrastructure layer to manage service-to-service communication. Key components include:</p>
<ul>
  <li><strong>Sidecar Proxy:</strong> Intercepts communication between services.</li>
  <li><strong>Control Plane:</strong> Manages and configures the proxies.</li>
  <li><strong>Data Plane:</strong> Handles the communication between services.</li>
</ul>
<p>Service meshes enhance security, observability, and reliability of service communication in Kubernetes.</p>`,
    moduleId: ModulesSeed[52].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes DNS and Service Discovery',
    overview: 'Explore DNS and service discovery mechanisms in Kubernetes.',
    content: `<h2>Kubernetes DNS and Service Discovery</h2>
<p>DNS and service discovery in Kubernetes enable efficient communication between services. Key concepts include:</p>
<ul>
  <li><strong>CoreDNS:</strong> The default DNS server for service discovery in Kubernetes.</li>
  <li><strong>Service Records:</strong> DNS records created for each service.</li>
  <li><strong>Pod DNS:</strong> DNS entries for pods based on their names and namespaces.</li>
</ul>
<p>By understanding DNS and service discovery, you can ensure reliable communication between services in your Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[52].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for Kubernetes Storage Module
  {
    id: uuidv4(),
    title: 'Kubernetes Persistent Volumes',
    overview:
      'Learn about persistent volumes in Kubernetes for managing storage.',
    content: `<h2>Kubernetes Persistent Volumes</h2>
<p>Persistent volumes in Kubernetes provide a way to manage storage that persists beyond the lifecycle of a pod. Key concepts include:</p>
<ul>
  <li><strong>Persistent Volume (PV):</strong> A piece of storage in the cluster.</li>
  <li><strong>Persistent Volume Claim (PVC):</strong> A request for storage by a user.</li>
  <li><strong>Storage Class:</strong> Defines the type of storage (e.g., SSD, HDD).</li>
</ul>
<p>Using persistent volumes, you can manage data that needs to be retained across pod restarts and upgrades.</p>`,
    moduleId: ModulesSeed[53].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Dynamic Provisioning',
    overview: 'Understand dynamic provisioning of storage in Kubernetes.',
    content: `<h2>Kubernetes Dynamic Provisioning</h2>
<p>Dynamic provisioning in Kubernetes allows for automatic creation of storage volumes based on user requests. Key concepts include:</p>
<ul>
  <li><strong>Storage Class:</strong> Defines the parameters for dynamic provisioning.</li>
  <li><strong>Provisioner:</strong> The component that provisions storage based on the storage class.</li>
  <li><strong>Binding:</strong> The process of associating a PVC with a PV.</li>
</ul>
<p>Dynamic provisioning simplifies storage management by automating the creation and allocation of storage resources.</p>`,
    moduleId: ModulesSeed[53].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Volume Types',
    overview: 'Explore the different types of volumes in Kubernetes.',
    content: `<h2>Kubernetes Volume Types</h2>
<p>Kubernetes supports various volume types for different storage needs. Key volume types include:</p>
<ul>
  <li><strong>EmptyDir:</strong> Temporary storage for the lifetime of a pod.</li>
  <li><strong>HostPath:</strong> Mounts a file or directory from the host node.</li>
  <li><strong>ConfigMap:</strong> Provides configuration data to pods.</li>
  <li><strong>Secret:</strong> Provides sensitive data to pods.</li>
  <li><strong>NFS:</strong> Network File System for shared storage.</li>
</ul>
<p>Understanding the different volume types helps in choosing the right storage solution for your applications.</p>`,
    moduleId: ModulesSeed[53].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Storage Classes',
    overview: 'Learn about storage classes in Kubernetes and how to use them.',
    content: `<h2>Kubernetes Storage Classes</h2>
<p>Storage classes in Kubernetes define the different types of storage available in the cluster. Key concepts include:</p>
<ul>
  <li><strong>Provisioner:</strong> The component that provisions the storage.</li>
  <li><strong>Reclaim Policy:</strong> Defines what happens to the volume when the PVC is deleted (e.g., Retain, Delete).</li>
  <li><strong>Parameters:</strong> Specific parameters for the storage class (e.g., type of disk).</li>
</ul>
<p>By using storage classes, you can manage and provision storage dynamically based on application needs.</p>`,
    moduleId: ModulesSeed[53].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes StatefulSets',
    overview: 'Understand StatefulSets and their use cases in Kubernetes.',
    content: `<h2>Kubernetes StatefulSets</h2>
<p>StatefulSets in Kubernetes manage stateful applications, ensuring that pods have persistent identities and storage. Key concepts include:</p>
<ul>
  <li><strong>Pod Identity:</strong> Each pod has a unique, stable identity.</li>
  <li><strong>Persistent Storage:</strong> Each pod has its own persistent storage.</li>
  <li><strong>Ordered Deployment:</strong> Pods are deployed and scaled in order.</li>
</ul>
<p>StatefulSets are ideal for applications that require stable network identities and persistent storage, such as databases.</p>`,
    moduleId: ModulesSeed[53].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for Kubernetes Security Module
  {
    id: uuidv4(),
    title: 'Kubernetes RBAC',
    overview: 'Learn about Role-Based Access Control (RBAC) in Kubernetes.',
    content: `<h2>Kubernetes RBAC</h2>
<p>Role-Based Access Control (RBAC) in Kubernetes manages permissions and access to resources. Key concepts include:</p>
<ul>
  <li><strong>Role:</strong> Defines a set of permissions within a namespace.</li>
  <li><strong>ClusterRole:</strong> Defines a set of permissions cluster-wide.</li>
  <li><strong>RoleBinding:</strong> Grants a role to a user or group within a namespace.</li>
  <li><strong>ClusterRoleBinding:</strong> Grants a ClusterRole to a user or group cluster-wide.</li>
</ul>
<p>Using RBAC, you can control access to resources and ensure security in your Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[54].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Network Policies',
    overview:
      'Explore how to use network policies for securing pod communication.',
    content: `<h2>Kubernetes Network Policies</h2>
<p>Network policies in Kubernetes allow you to control the traffic flow between pods. Key concepts include:</p>
<ul>
  <li><strong>Ingress Policy:</strong> Controls inbound traffic to pods.</li>
  <li><strong>Egress Policy:</strong> Controls outbound traffic from pods.</li>
  <li><strong>Selectors:</strong> Define the target pods for the policy.</li>
  <li><strong>Rules:</strong> Define the allowed traffic.</li>
</ul>
<p>By using network policies, you can secure your applications by restricting pod communication.</p>`,
    moduleId: ModulesSeed[54].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Secrets Management',
    overview:
      'Learn how to manage sensitive information using Kubernetes Secrets.',
    content: `<h2>Kubernetes Secrets Management</h2>
<p>Kubernetes Secrets are used to store and manage sensitive information such as passwords, tokens, and keys. Key concepts include:</p>
<ul>
  <li><strong>Creating Secrets:</strong> Use <code>kubectl create secret</code> command or a YAML manifest.</li>
  <li><strong>Using Secrets:</strong> Mount secrets as volumes or environment variables in pods.</li>
  <li><strong>Encryption:</strong> Enable encryption at rest for secrets in the cluster.</li>
</ul>
<p>Managing secrets securely is crucial for protecting sensitive information in your Kubernetes applications.</p>`,
    moduleId: ModulesSeed[54].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Pod Security Policies',
    overview:
      'Understand Pod Security Policies and their role in securing Kubernetes clusters.',
    content: `<h2>Kubernetes Pod Security Policies</h2>
<p>Pod Security Policies (PSP) in Kubernetes define a set of conditions that a pod must meet to be accepted by the cluster. Key concepts include:</p>
<ul>
  <li><strong>Policy Definition:</strong> Specifies the security requirements for pods.</li>
  <li><strong>Policy Enforcement:</strong> Ensures pods comply with the defined policies.</li>
  <li><strong>Deprecation:</strong> Note that PSP is deprecated and being replaced by other mechanisms.</li>
</ul>
<p>Using Pod Security Policies, you can enforce security standards for pods in your Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[54].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Auditing',
    overview: 'Learn how to enable and configure auditing in Kubernetes.',
    content: `<h2>Kubernetes Auditing</h2>
<p>Auditing in Kubernetes provides a way to keep track of the events that happen in your cluster. Key concepts include:</p>
<ul>
  <li><strong>Audit Policy:</strong> Defines what events are captured and what data is included.</li>
  <li><strong>Audit Backend:</strong> Specifies where audit logs are stored (e.g., files, external systems).</li>
  <li><strong>Log Analysis:</strong> Analyze audit logs to monitor and investigate events.</li>
</ul>
<p>Enabling auditing helps in tracking changes and detecting suspicious activities in your Kubernetes cluster.</p>`,
    moduleId: ModulesSeed[54].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for Advanced Kubernetes Topics Module
  {
    id: uuidv4(),
    title: 'Kubernetes Operators',
    overview: 'Learn about Kubernetes Operators and how to use them.',
    content: `<h2>Kubernetes Operators</h2>
<p>Kubernetes Operators extend the functionality of Kubernetes by managing complex applications. Key concepts include:</p>
<ul>
  <li><strong>Custom Resource Definitions (CRD):</strong> Define new resource types in Kubernetes.</li>
  <li><strong>Operator Pattern:</strong> Encapsulates operational knowledge into software.</li>
  <li><strong>Controller:</strong> Manages the lifecycle of custom resources.</li>
</ul>
<p>Using Operators, you can automate the management of complex applications in Kubernetes.</p>`,
    moduleId: ModulesSeed[55].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Custom Resources',
    overview: 'Explore custom resources in Kubernetes and their use cases.',
    content: `<h2>Kubernetes Custom Resources</h2>
<p>Custom Resources in Kubernetes allow you to define your own resource types and manage them using Kubernetes APIs. Key concepts include:</p>
<ul>
  <li><strong>Custom Resource Definitions (CRD):</strong> Define new resource types.</li>
  <li><strong>Custom Controllers:</strong> Manage the lifecycle of custom resources.</li>
  <li><strong>Use Cases:</strong> Examples of custom resources for various applications.</li>
</ul>
<p>By using custom resources, you can extend Kubernetes to manage any type of resource.</p>`,
    moduleId: ModulesSeed[55].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Helm Charts',
    overview:
      'Understand Helm charts and their role in deploying applications.',
    content: `<h2>Kubernetes Helm Charts</h2>
<p>Helm charts are packages of pre-configured Kubernetes resources. Key concepts include:</p>
<ul>
  <li><strong>Chart:</strong> A collection of files that describe a related set of Kubernetes resources.</li>
  <li><strong>Repository:</strong> A location where charts can be stored and shared.</li>
  <li><strong>Release:</strong> An instance of a chart running in a Kubernetes cluster.</li>
</ul>
<p>Using Helm charts, you can simplify the deployment and management of applications in Kubernetes.</p>`,
    moduleId: ModulesSeed[55].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes CI/CD Pipelines',
    overview:
      'Learn how to set up CI/CD pipelines for Kubernetes applications.',
    content: `<h2>Kubernetes CI/CD Pipelines</h2>
<p>CI/CD pipelines automate the process of building, testing, and deploying applications. Key concepts include:</p>
<ul>
  <li><strong>Continuous Integration:</strong> Automates the building and testing of code changes.</li>
  <li><strong>Continuous Deployment:</strong> Automates the deployment of applications to Kubernetes.</li>
  <li><strong>Tools:</strong> Popular CI/CD tools for Kubernetes include Jenkins, GitLab CI, and Argo CD.</li>
</ul>
<p>By setting up CI/CD pipelines, you can improve the speed and reliability of your software delivery process.</p>`,
    moduleId: ModulesSeed[55].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Kubernetes Monitoring and Logging',
    overview:
      'Explore monitoring and logging solutions for Kubernetes clusters.',
    content: `<h2>Kubernetes Monitoring and Logging</h2>
<p>Monitoring and logging are essential for managing and troubleshooting Kubernetes clusters. Key concepts include:</p>
<ul>
  <li><strong>Monitoring:</strong> Tools like Prometheus and Grafana for tracking cluster performance.</li>
  <li><strong>Logging:</strong> Tools like Fluentd, Elasticsearch, and Kibana for collecting and analyzing logs.</li>
  <li><strong>Alerting:</strong> Set up alerts to notify you of critical events in the cluster.</li>
</ul>
<p>Implementing monitoring and logging helps ensure the reliability and performance of your Kubernetes applications.</p>`,
    moduleId: ModulesSeed[55].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for JavaScript Promises and Async/Await Module
  {
    id: uuidv4(),
    title: 'Understanding Promises',
    overview: 'Learn the basics of JavaScript Promises and how they work.',
    content: `
    <h2>Understanding Promises</h2>
    <p>Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation. Key concepts include:</p>
    <ul>
      <li><strong>Promise States:</strong> Pending, Fulfilled, Rejected.</li>
      <li><strong>Creating Promises:</strong> Using the <code>new Promise()</code> constructor.</li>
      <li><strong>Consuming Promises:</strong> Using <code>then</code>, <code>catch</code>, and <code>finally</code> methods.</li>
    </ul>
    <p>Understanding how promises work is essential for managing asynchronous operations in JavaScript.</p>
  `,
    moduleId: ModulesSeed[56].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Chaining Promises',
    overview: 'Learn how to chain multiple promises together.',
    content: `
    <h2>Chaining Promises</h2>
    <p>Promise chaining allows you to perform a sequence of asynchronous operations. Key concepts include:</p>
    <ul>
      <li><strong>Chaining:</strong> Using <code>then</code> to chain multiple promises.</li>
      <li><strong>Error Handling:</strong> Using <code>catch</code> to handle errors in the chain.</li>
      <li><strong>Returning Values:</strong> Each <code>then</code> returns a new promise, allowing further chaining.</li>
    </ul>
    <p>Promise chaining simplifies the management of multiple asynchronous operations in a sequential manner.</p>
  `,
    moduleId: ModulesSeed[56].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Using Async/Await',
    overview:
      'Learn how to use the async and await keywords to simplify asynchronous code.',
    content: `
    <h2>Using Async/Await</h2>
    <p>The <code>async</code> and <code>await</code> keywords provide a more readable and concise way to work with promises. Key concepts include:</p>
    <ul>
      <li><strong>Async Functions:</strong> Declaring a function as <code>async</code>.</li>
      <li><strong>Await Keyword:</strong> Waiting for a promise to resolve.</li>
      <li><strong>Error Handling:</strong> Using <code>try/catch</code> blocks with async functions.</li>
    </ul>
    <p>Using async/await makes asynchronous code easier to read and write.</p>
  `,
    moduleId: ModulesSeed[56].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Async Iteration with for-await-of',
    overview:
      'Learn how to iterate over asynchronous data streams using for-await-of loops.',
    content: `
    <h2>Async Iteration with for-await-of</h2>
    <p>The <code>for-await-of</code> loop allows you to iterate over asynchronous iterables. Key concepts include:</p>
    <ul>
      <li><strong>Asynchronous Iterables:</strong> Objects implementing the <code>[Symbol.asyncIterator]</code> method.</li>
      <li><strong>Using for-await-of:</strong> Iterating over async iterables.</li>
      <li><strong>Applications:</strong> Common use cases for async iteration.</li>
    </ul>
    <p>Using <code>for-await-of</code> simplifies the handling of asynchronous data streams.</p>
  `,
    moduleId: ModulesSeed[56].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Promise.all and Promise.race',
    overview:
      'Learn how to manage multiple promises with Promise.all and Promise.race.',
    content: `
    <h2>Promise.all and Promise.race</h2>
    <p>The <code>Promise.all</code> and <code>Promise.race</code> methods help you work with multiple promises concurrently. Key concepts include:</p>
    <ul>
      <li><strong>Promise.all:</strong> Waits for all promises to resolve or any to reject.</li>
      <li><strong>Promise.race:</strong> Waits for the first promise to resolve or reject.</li>
      <li><strong>Use Cases:</strong> Common scenarios for using <code>Promise.all</code> and <code>Promise.race</code>.</li>
    </ul>
    <p>Using <code>Promise.all</code> and <code>Promise.race</code> allows you to handle multiple asynchronous operations efficiently.</p>
  `,
    moduleId: ModulesSeed[56].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for JavaScript Modules and ES6+ Features Module
  {
    id: uuidv4(),
    title: 'Introduction to ES6 Modules',
    overview: 'Learn the basics of ES6 modules and how to use them.',
    content: `
    <h2>Introduction to ES6 Modules</h2>
    <p>ES6 modules allow you to organize and reuse code. Key concepts include:</p>
    <ul>
      <li><strong>Importing Modules:</strong> Using the <code>import</code> statement.</li>
      <li><strong>Exporting Modules:</strong> Using the <code>export</code> statement.</li>
      <li><strong>Named and Default Exports:</strong> Differences between named and default exports.</li>
    </ul>
    <p>Understanding ES6 modules is essential for writing modular and maintainable JavaScript code.</p>
  `,
    moduleId: ModulesSeed[57].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Arrow Functions and Template Literals',
    overview: 'Learn about arrow functions and template literals in ES6.',
    content: `
    <h2>Arrow Functions and Template Literals</h2>
    <p>ES6 introduces arrow functions and template literals for more concise and readable code. Key concepts include:</p>
    <ul>
      <li><strong>Arrow Functions:</strong> A shorter syntax for writing functions.</li>
      <li><strong>Lexical Scoping:</strong> Arrow functions do not have their own <code>this</code> context.</li>
      <li><strong>Template Literals:</strong> Use backticks for multi-line strings and string interpolation.</li>
    </ul>
    <p>Using arrow functions and template literals can make your code more concise and easier to read.</p>
  `,
    moduleId: ModulesSeed[57].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Destructuring and Spread Operator',
    overview: 'Learn about destructuring and the spread operator in ES6.',
    content: `
    <h2>Destructuring and Spread Operator</h2>
    <p>ES6 introduces destructuring and the spread operator for working with arrays and objects. Key concepts include:</p>
    <ul>
      <li><strong>Destructuring Arrays:</strong> Extracting values from arrays.</li>
      <li><strong>Destructuring Objects:</strong> Extracting values from objects.</li>
      <li><strong>Spread Operator:</strong> Expanding arrays and objects.</li>
    </ul>
    <p>Using destructuring and the spread operator can simplify your code and make it more readable.</p>
  `,
    moduleId: ModulesSeed[57].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Classes and Inheritance in ES6',
    overview: 'Learn about classes and inheritance in ES6.',
    content: `
    <h2>Classes and Inheritance in ES6</h2>
    <p>ES6 introduces classes for object-oriented programming in JavaScript. Key concepts include:</p>
    <ul>
      <li><strong>Class Syntax:</strong> Using the <code>class</code> keyword to define classes.</li>
      <li><strong>Constructor:</strong> The constructor method for initializing objects.</li>
      <li><strong>Inheritance:</strong> Using the <code>extends</code> keyword for inheritance.</li>
    </ul>
    <p>Understanding classes and inheritance is essential for writing modular and reusable JavaScript code.</p>
  `,
    moduleId: ModulesSeed[57].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Promises and Async/Await',
    overview: 'Learn about promises and async/await in ES6.',
    content: `
    <h2>Promises and Async/Await</h2>
    <p>ES6 introduces promises and async/await for managing asynchronous code. Key concepts include:</p>
    <ul>
      <li><strong>Promises:</strong> A new way to handle asynchronous operations.</li>
      <li><strong>Async Functions:</strong> Declaring a function as <code>async</code>.</li>
      <li><strong>Await Keyword:</strong> Waiting for a promise to resolve.</li>
    </ul>
    <p>Using promises and async/await can make your asynchronous code easier to read and manage.</p>
  `,
    moduleId: ModulesSeed[57].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for JavaScript Event Loop and Concurrency Module
  {
    id: uuidv4(),
    title: 'Understanding the Event Loop',
    overview: 'Learn how the JavaScript event loop works.',
    content: `
    <h2>Understanding the Event Loop</h2>
    <p>The event loop is a fundamental concept in JavaScript for handling asynchronous operations. Key concepts include:</p>
    <ul>
      <li><strong>Call Stack:</strong> The stack of function calls to be executed.</li>
      <li><strong>Event Queue:</strong> A queue of events to be processed.</li>
      <li><strong>Event Loop:</strong> The loop that processes events from the queue.</li>
    </ul>
    <p>Understanding the event loop is essential for writing efficient and non-blocking JavaScript code.</p>
  `,
    moduleId: ModulesSeed[58].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Handling Concurrency in JavaScript',
    overview: 'Learn how to handle concurrency in JavaScript.',
    content: `
    <h2>Handling Concurrency in JavaScript</h2>
    <p>Concurrency is the ability to manage multiple tasks simultaneously. Key concepts include:</p>
    <ul>
      <li><strong>Concurrency Model:</strong> JavaScript uses a single-threaded concurrency model with an event loop.</li>
      <li><strong>Web Workers:</strong> Running scripts in background threads.</li>
      <li><strong>Async/Await:</strong> Managing asynchronous operations.</li>
    </ul>
    <p>Understanding concurrency is essential for writing efficient and responsive JavaScript applications.</p>
  `,
    moduleId: ModulesSeed[58].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Timers and Intervals',
    overview: 'Learn how to use timers and intervals in JavaScript.',
    content: `
    <h2>Timers and Intervals</h2>
    <p>JavaScript provides functions for scheduling tasks. Key concepts include:</p>
    <ul>
      <li><strong>setTimeout:</strong> Schedules a task to be executed after a delay.</ <li><strong>setTimeout:</strong> Schedules a task to be executed after a delay.</li>
      <li><strong>setInterval:</strong> Repeats a task at specified intervals.</li>
      <li><strong>clearTimeout:</strong> Cancels a timeout.</li>
      <li><strong>clearInterval:</strong> Cancels an interval.</li>
    </ul>
    <p>Using timers and intervals allows you to schedule and manage tasks in JavaScript.</p>
  `,
    moduleId: ModulesSeed[58].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Microtasks and Macrotasks',
    overview:
      'Learn the difference between microtasks and macrotasks in JavaScript.',
    content: `
    <h2>Microtasks and Macrotasks</h2>
    <p>Microtasks and macrotasks are two types of tasks in JavaScript's event loop. Key concepts include:</p>
    <ul>
      <li><strong>Microtasks:</strong> Tasks that execute before the next rendering, such as promises.</li>
      <li><strong>Macrotasks:</strong> Tasks that execute after the rendering, such as setTimeout.</li>
      <li><strong>Event Loop Order:</strong> Microtasks are executed before macrotasks.</li>
    </ul>
    <p>Understanding the difference between microtasks and macrotasks is crucial for optimizing performance and avoiding unexpected behavior.</p>
  `,
    moduleId: ModulesSeed[58].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Concurrency Patterns',
    overview: 'Learn about common concurrency patterns in JavaScript.',
    content: `
    <h2>Concurrency Patterns</h2>
    <p>Concurrency patterns help manage multiple tasks efficiently. Key concepts include:</p>
    <ul>
      <li><strong>Producer-Consumer:</strong> A pattern where tasks produce and consume data.</li>
      <li><strong>Observer:</strong> A pattern where objects notify observers of state changes.</li>
      <li><strong>Async Queue:</strong> A pattern for managing a queue of asynchronous tasks.</li>
    </ul>
    <p>Using concurrency patterns helps you write scalable and maintainable JavaScript code.</p>
  `,
    moduleId: ModulesSeed[58].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Lessons for JavaScript Performance Optimization Module
  {
    id: uuidv4(),
    title: 'Identifying Performance Bottlenecks',
    overview:
      'Learn how to identify performance bottlenecks in JavaScript applications.',
    content: `
    <h2>Identifying Performance Bottlenecks</h2>
    <p>Performance bottlenecks can slow down your JavaScript applications. Key concepts include:</p>
    <ul>
      <li><strong>Profiling:</strong> Using tools to measure performance.</li>
      <li><strong>Performance Metrics:</strong> Key metrics to monitor.</li>
      <li><strong>Common Bottlenecks:</strong> Identifying typical performance issues.</li>
    </ul>
    <p>Understanding how to identify performance bottlenecks is the first step in optimizing your applications.</p>
  `,
    moduleId: ModulesSeed[59].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Optimizing JavaScript Code',
    overview: 'Learn techniques for optimizing JavaScript code.',
    content: `
    <h2>Optimizing JavaScript Code</h2>
    <p>Optimizing your JavaScript code can improve performance. Key concepts include:</p>
    <ul>
      <li><strong>Code Minification:</strong> Reducing the size of your JavaScript files.</li>
      <li><strong>Code Splitting:</strong> Breaking your code into smaller chunks.</li>
      <li><strong>Lazy Loading:</strong> Loading code only when it's needed.</li>
    </ul>
    <p>Implementing these optimization techniques can help improve the performance of your JavaScript applications.</p>
  `,
    moduleId: ModulesSeed[59].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Efficient DOM Manipulation',
    overview: 'Learn how to manipulate the DOM efficiently in JavaScript.',
    content: `
    <h2>Efficient DOM Manipulation</h2>
    <p>Efficient DOM manipulation can improve the performance of your web applications. Key concepts include:</p>
    <ul>
      <li><strong>Minimize Reflows:</strong> Avoiding layout thrashing.</li>
      <li><strong>Batch Updates:</strong> Using document fragments and innerHTML.</li>
      <li><strong>Virtual DOM:</strong> Leveraging libraries like React.</li>
    </ul>
    <p>Understanding how to manipulate the DOM efficiently is essential for optimizing the performance of your web applications.</p>
  `,
    moduleId: ModulesSeed[59].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Memory Management',
    overview:
      'Learn how to manage memory effectively in JavaScript applications.',
    content: `
    <h2>Memory Management</h2>
    <p>Effective memory management is crucial for preventing memory leaks and improving performance. Key concepts include:</p>
    <ul>
      <li><strong>Garbage Collection:</strong> Understanding how garbage collection works in JavaScript.</li>
      <li><strong>Memory Leaks:</strong> Identifying and preventing memory leaks.</li>
      <li><strong>Profiling Memory Usage:</strong> Using tools to monitor memory usage.</li>
    </ul>
    <p>Managing memory effectively helps ensure your JavaScript applications run smoothly and efficiently.</p>
  `,
    moduleId: ModulesSeed[59].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Optimizing Network Performance',
    overview:
      'Learn how to optimize network performance in JavaScript applications.',
    content: `
    <h2>Optimizing Network Performance</h2>
    <p>Optimizing network performance can significantly improve the user experience. Key concepts include:</p>
    <ul>
      <li><strong>Minimizing HTTP Requests:</strong> Reducing the number of HTTP requests.</li>
      <li><strong>Compression:</strong> Compressing files to reduce their size.</li>
      <li><strong>Caching:</strong> Leveraging browser and server caching.</li>
    </ul>
    <p>Implementing these network optimization techniques can help ensure your JavaScript applications load quickly and efficiently.</p>
  `,
    moduleId: ModulesSeed[59].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: uuidv4(),
    title: 'Overview of Full-Stack Development',
    overview:
      'Understand the basics of full-stack development and the roles of front-end and back-end development.',
    content: `
      <h2>Overview of Full-Stack Development</h2>
      <p>Full-stack development involves working on both the front-end and back-end of an application. Key concepts include:</p>
      <ul>
        <li><strong>Front-End Development:</strong> Creating the user interface and user experience.</li>
        <li><strong>Back-End Development:</strong> Managing the server, database, and application logic.</li>
        <li><strong>Full-Stack Developer:</strong> A developer proficient in both front-end and back-end technologies.</li>
      </ul>
      <p>Understanding the full-stack development process is essential for building comprehensive and robust web applications.</p>
    `,
    moduleId: ModulesSeed[60].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Front-End vs. Back-End Development',
    overview:
      'Learn the differences between front-end and back-end development and the technologies used in each.',
    content: `
      <h2>Front-End vs. Back-End Development</h2>
      <p>Front-end and back-end development serve different purposes in web development. Key concepts include:</p>
      <ul>
        <li><strong>Front-End Development:</strong> HTML, CSS, JavaScript, frameworks like React, Angular, and Vue.js.</li>
        <li><strong>Back-End Development:</strong> Server-side languages like Node.js, Python, Ruby, and PHP; databases like MySQL, MongoDB, and PostgreSQL.</li>
        <li><strong>Responsibilities:</strong> Front-end developers focus on user experience, while back-end developers handle data management and application logic.</li>
      </ul>
      <p>Understanding the distinct roles of front-end and back-end development helps you become a more effective full-stack developer.</p>
    `,
    moduleId: ModulesSeed[60].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Tools and Technologies for Full-Stack Development',
    overview:
      'Explore the tools and technologies commonly used in full-stack development.',
    content: `
      <h2>Tools and Technologies for Full-Stack Development</h2>
      <p>Full-stack developers use a variety of tools and technologies to build applications. Key tools include:</p>
      <ul>
        <li><strong>Version Control:</strong> Git, GitHub, GitLab for source code management.</li>
        <li><strong>Development Environments:</strong> IDEs like Visual Studio Code, WebStorm, and Sublime Text.</li>
        <li><strong>Package Managers:</strong> npm, Yarn for managing dependencies.</li>
        <li><strong>Build Tools:</strong> Webpack, Babel for bundling and transpiling code.</li>
      </ul>
      <p>Using the right tools and technologies can enhance your productivity and streamline the development process.</p>
    `,
    moduleId: ModulesSeed[60].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  //Lessons for "HTML and CSS Fundamentals" Module

  {
    id: uuidv4(),
    title: 'Introduction to HTML',
    overview: 'Learn the basics of HTML and how to structure web pages.',
    content: `
    <h2>Introduction to HTML</h2>
    <p>HTML (HyperText Markup Language) is the standard language for creating web pages. Key concepts include:</p>
    <ul>
      <li><strong>HTML Elements:</strong> Basic building blocks of HTML.</li>
      <li><strong>Tags:</strong> Opening and closing tags to define elements.</li>
      <li><strong>Attributes:</strong> Additional information about elements.</li>
    </ul>
    <p>Understanding HTML is essential for structuring content on the web.</p>
  `,
    moduleId: ModulesSeed[61].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to CSS',
    overview: 'Learn the basics of CSS and how to style web pages.',
    content: `
    <h2>Introduction to CSS</h2>
    <p>CSS (Cascading Style Sheets) is used to style and layout web pages. Key concepts include:</p>
    <ul>
      <li><strong>Selectors:</strong> Targeting HTML elements to apply styles.</li>
      <li><strong>Properties and Values:</strong> Defining styles for elements.</li>
      <li><strong>Box Model:</strong> Understanding margin, border, padding, and content.</li>
    </ul>
    <p>Using CSS, you can create visually appealing web pages.</p>
  `,
    moduleId: ModulesSeed[61].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Responsive Web Design',
    overview:
      'Learn the principles of responsive web design and how to create websites that look good on all devices.',
    content: `
    <h2>Responsive Web Design</h2>
    <p>Responsive web design ensures websites look good on all devices. Key concepts include:</p>
    <ul>
      <li><strong>Media Queries:</strong> Applying styles based on device characteristics.</li>
      <li><strong>Flexible Layouts:</strong> Using fluid grids and flexible images.</li>
      <li><strong>Mobile First:</strong> Designing for mobile devices first, then scaling up.</li>
    </ul>
    <p>Implementing responsive web design is crucial for creating user-friendly websites.</p>
  `,
    moduleId: ModulesSeed[61].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  //  Lessons for "JavaScript Essentials" Module

  {
    id: uuidv4(),
    title: 'Introduction to JavaScript',
    overview: 'Learn the basics of JavaScript programming language.',
    content: `
    <h2>Introduction to JavaScript</h2>
    <p>JavaScript is a powerful programming language used for web development. Key concepts include:</p>
    <ul>
      <li><strong>Variables and Data Types:</strong> Storing and manipulating data.</li>
      <li><strong>Control Flow:</strong> Conditional statements and loops.</li>
      <li><strong>Functions:</strong> Reusable blocks of code.</li>
    </ul>
    <p>Understanding JavaScript fundamentals is essential for building dynamic web applications.</p>
  `,
    moduleId: ModulesSeed[62].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'DOM Manipulation',
    overview:
      'Learn how to manipulate the Document Object Model (DOM) with JavaScript.',
    content: `
    <h2>DOM Manipulation</h2>
    <p>The Document Object Model (DOM) is a programming interface for web documents. Key concepts include:</p>
    <ul>
      <li><strong>Selecting Elements:</strong> Using selectors to access HTML elements.</li>
      <li><strong>Modifying Elements:</strong> Changing content, attributes, and styles.</li>
      <li><strong>Event Handling:</strong> Responding to user interactions.</li>
    </ul>
    <p>Manipulating the DOM dynamically updates web pages and enhances user experience.</p>
  `,
    moduleId: ModulesSeed[62].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Asynchronous JavaScript',
    overview:
      'Learn how to work with asynchronous code in JavaScript using promises and async/await.',
    content: `
    <h2>Asynchronous JavaScript</h2>
    <p>JavaScript supports asynchronous programming to handle tasks that may take time to complete. Key concepts include:</p>
    <ul>
      <li><strong>Promises:</strong> Handling asynchronous operations and chaining.</li>
      <li><strong>Async/Await:</strong> Writing asynchronous code in a synchronous-like manner.</li>
      <li><strong>Callbacks:</strong> Executing code after asynchronous tasks complete.</li>
    </ul>
    <p>Understanding asynchronous JavaScript is crucial for building responsive and efficient web applications.</p>
  `,
    moduleId: ModulesSeed[62].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Responsive Web Design" Module

  {
    id: uuidv4(),
    title: 'Media Queries',
    overview: 'Learn how to use media queries to create responsive layouts.',
    content: `
    <h2>Media Queries</h2>
    <p>Media queries allow developers to apply CSS styles based on device characteristics. Key concepts include:</p>
    <ul>
      <li><strong>Screen Size:</strong> Targeting different screen sizes with CSS rules.</li>
      <li><strong>Viewport Width:</strong> Adjusting layouts for various viewport widths.</li>
      <li><strong>Device Orientation:</strong> Modifying styles based on device orientation.</li>
    </ul>
    <p>Using media queries is essential for creating websites that adapt to different devices and screen sizes.</p>
  `,
    moduleId: ModulesSeed[63].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Flexible Layouts',
    overview:
      'Learn how to create flexible layouts using CSS Flexbox and Grid.',
    content: `
    <h2>Flexible Layouts</h2>
    <p>CSS Flexbox and Grid provide powerful tools for creating flexible and responsive layouts. Key concepts include:</p>
    <ul>
      <li><strong>Flexbox:</strong> A one-dimensional layout model for arranging items in a container.</li>
      <li><strong>Grid:</strong> A two-dimensional layout system for designing complex grids.</li>
      <li><strong>Responsive Design:</strong> Designing layouts that adapt to different screen sizes.</li>
    </ul>
    <p>Using Flexbox and Grid, you can create versatile and visually appealing web layouts.</p>
  `,
    moduleId: ModulesSeed[63].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Accessibility in Responsive Design',
    overview:
      'Understand the importance of accessibility in responsive web design.',
    content: `
    <h2>Accessibility in Responsive Design</h2>
    <p>Accessibility ensures that web content is usable by people with disabilities. Key concepts include:</p>
    <ul>
      <li><strong>Semantic HTML:</strong> Using meaningful HTML elements for better accessibility.</li>
      <li><strong>Keyboard Navigation:</strong> Navigating websites using keyboard shortcuts.</li>
      <li><strong>ARIA Roles and Attributes:</strong> Enhancing accessibility with ARIA landmarks and attributes.</li>
    </ul>
    <p>Designing with accessibility in mind ensures that your website is usable by all users, regardless of their abilities.</p>
  `,
    moduleId: ModulesSeed[63].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Server-Side Scripting with Node.js" Module
  {
    id: uuidv4(),
    title: 'Introduction to Node.js',
    overview:
      'Learn the basics of Node.js and server-side JavaScript development.',
    content: `
    <h2>Introduction to Node.js</h2>
    <p>Node.js is a runtime environment that allows you to run JavaScript on the server. Key concepts include:</p>
    <ul>
      <li><strong>Event-Driven Architecture:</strong> Non-blocking I/O for efficient handling of concurrent requests.</li>
      <li><strong>Common Use Cases:</strong> Building web servers, REST APIs, real-time applications, and more.</li>
      <li><strong>npm:</strong> Node Package Manager for managing dependencies and packages.</li>
    </ul>
    <p>Understanding Node.js enables you to build scalable and high-performance server-side applications.</p>
  `,
    moduleId: ModulesSeed[64].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Express.js Framework',
    overview:
      'Learn how to build web applications using the Express.js framework.',
    content: `
    <h2>Express.js Framework</h2>
    <p>Express.js is a minimalist web framework for Node.js. Key concepts include:</p>
    <ul>
      <li><strong>Routing:</strong> Defining routes for handling HTTP requests.</li>
      <li><strong>Middleware:</strong> Modular components for processing requests and responses.</li>
      <li><strong>Template Engines:</strong> Integrating template engines like EJS or Pug for dynamic content.</li>
    </ul>
    <p>Using Express.js simplifies the process of building web applications with Node.js.</p>
  `,
    moduleId: ModulesSeed[64].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Authentication and Authorization',
    overview:
      'Understand the concepts of authentication and authorization in web applications.',
    content: `
    <h2>Authentication and Authorization</h2>
    <p>Authentication verifies the identity of users, while authorization determines their access rights. Key concepts include:</p>
    <ul>
      <li><strong>Authentication Methods:</strong> Password-based, token-based, OAuth, etc.</li>
      <li><strong>Authorization Strategies:</strong> Role-based access control (RBAC), permissions, etc.</li>
      <li><strong>Session Management:</strong> Handling user sessions and cookies.</li>
    </ul>
    <p>Implementing robust authentication and authorization mechanisms enhances the security of web applications.</p>
  `,
    moduleId: ModulesSeed[64].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Database Integration" Module

  {
    id: uuidv4(),
    title: 'Introduction to Databases',
    overview:
      'Learn the basics of databases and different types of database management systems.',
    content: `
    <h2>Introduction to Databases</h2>
    <p>Databases store and manage structured data. Key concepts include:</p>
    <ul>
      <li><strong>Relational vs. NoSQL:</strong> Differences between relational and non-relational databases.</li>
      <li><strong>Database Models:</strong> Hierarchical, network, relational, and document models.</li>
      <li><strong>Popular Database Systems:</strong> MySQL, PostgreSQL, MongoDB, etc.</li>
    </ul>
    <p>Understanding databases is essential for building data-driven applications.</p>
  `,
    moduleId: ModulesSeed[65].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'MongoDB Fundamentals',
    overview: 'Learn the basics of MongoDB, a popular NoSQL database system.',
    content: `
    <h2>MongoDB Fundamentals</h2>
    <p>MongoDB is a document-oriented NoSQL database. Key concepts include:</p>
    <ul>
      <li><strong>Documents and Collections:</strong> Storing data in flexible JSON-like documents.</li>
      <li><strong>Queries and Aggregations:</strong> Retrieving and analyzing data using MongoDB queries.</li>
      <li><strong>Indexes and Performance:</strong> Optimizing database performance with indexes.</li>
    </ul>
    <p>Using MongoDB allows you to build scalable and flexible data storage solutions.</p>
  `,
    moduleId: ModulesSeed[65].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'SQL and Relational Databases',
    overview:
      'Understand SQL and relational database concepts for data storage and manipulation.',
    content: `
    <h2>SQL and Relational Databases</h2>
    <p>SQL (Structured Query Language) is used to communicate with relational databases. Key concepts include:</p>
    <ul>
      <li><strong>Database Design:</strong> Creating tables, defining relationships, and enforcing constraints.</li>
      <li><strong>CRUD Operations:</strong> Creating, reading, updating, and deleting data.</li>
      <li><strong>Joins and Transactions:</strong> Combining data from multiple tables and ensuring data integrity.</li>
    </ul>
    <p>Understanding SQL and relational databases is fundamental for building robust and scalable applications.</p>
  `,
    moduleId: ModulesSeed[65].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "RESTful API Design" Module
  {
    id: uuidv4(),
    title: 'Introduction to RESTful APIs',
    overview: 'Learn the principles and characteristics of RESTful APIs.',
    content: `
    <h2>Introduction to RESTful APIs</h2>
    <p>REST (Representational State Transfer) is an architectural style for designing networked applications. Key concepts include:</p>
    <ul>
      <li><strong>Resources:</strong> Data entities that can be accessed via the API.</li>
      <li><strong>HTTP Methods:</strong> GET, POST, PUT, DELETE for CRUD operations.</li>
      <li><strong>Statelessness:</strong> Each request from a client must contain all the information necessary to process the request.</li>
    </ul>
    <p>Designing RESTful APIs enables interoperability between different systems and enhances scalability.</p>
  `,
    moduleId: ModulesSeed[66].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Building RESTful APIs with Express',
    overview: 'Learn how to build RESTful APIs using Express.js framework.',
    content: `
    <h2>Building RESTful APIs with Express</h2>
    <p>Express.js simplifies the process of building RESTful APIs in Node.js. Key concepts include:</p>
    <ul>
      <li><strong>Route Handling:</strong> Def <h2>Building RESTful APIs with Express</h2>
      <p>Express.js simplifies the process of building RESTful APIs in Node.js. Key concepts include:</p>
      <ul>
        <li><strong>Route Handling:</strong> Defining routes for handling HTTP requests.</li>
        <li><strong>Middleware:</strong> Modular components for processing requests and responses.</li>
        <li><strong>Request and Response:</strong> Accessing request data and sending responses.</li>
      </ul>
      <p>Using Express.js, you can create scalable and maintainable RESTful APIs for your applications.</p>
    `,
    moduleId: ModulesSeed[66].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'API Security Best Practices',
    overview: 'Understand the best practices for securing RESTful APIs.',
    content: `
      <h2>API Security Best Practices</h2>
      <p>Securing RESTful APIs is essential to protect sensitive data and prevent unauthorized access. Key concepts include:</p>
      <ul>
        <li><strong>Authentication:</strong> Verifying the identity of clients accessing the API.</li>
        <li><strong>Authorization:</strong> Determining what actions a client is allowed to perform.</li>
        <li><strong>Input Validation:</strong> Sanitizing and validating input data to prevent security vulnerabilities.</li>
      </ul>
      <p>Implementing robust security measures ensures the integrity and confidentiality of your API.</p>
    `,
    moduleId: ModulesSeed[66].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'API Documentation with Swagger',
    overview: 'Learn how to document RESTful APIs using Swagger.',
    content: `
      <h2>API Documentation with Swagger</h2>
      <p>Swagger is a tool for designing, documenting, and testing RESTful APIs. Key concepts include:</p>
      <ul>
        <li><strong>OpenAPI Specification:</strong> A standard format for describing RESTful APIs.</li>
        <li><strong>Swagger UI:</strong> An interactive interface for exploring and testing APIs.</li>
        <li><strong>Automatic Documentation:</strong> Generating API documentation from code annotations.</li>
      </ul>
      <p>Using Swagger, you can create comprehensive and user-friendly documentation for your APIs.</p>
    `,
    moduleId: ModulesSeed[66].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Working with React Props" Module

  {
    id: uuidv4(),
    title: 'Understanding Props in React',
    overview:
      'Learn the concept of props and how to use them in React components.',
    content: `
    <h2>Understanding Props in React</h2>
    <p>Props (short for properties) allow you to pass data from a parent component to a child component in React. Key concepts include:</p>
    <ul>
      <li><strong>Passing Props:</strong> Passing data from parent to child components.</li>
      <li><strong>Accessing Props:</strong> Accessing props within a component.</li>
      <li><strong>Immutable Props:</strong> Props are read-only and cannot be modified by the child component.</li>
    </ul>
    <p>Understanding how to work with props is essential for building reusable and modular React components.</p>
  `,
    moduleId: ModulesSeed[67].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'PropTypes and Default Props',
    overview:
      'Learn how to define PropTypes and default values for props in React components.',
    content: `
    <h2>PropTypes and Default Props</h2>
    <p>PropTypes are used to define the type and shape of props expected by a React component. Key concepts include:</p>
    <ul>
      <li><strong>Defining PropTypes:</strong> Specifying the expected data types for props.</li>
      <li><strong>Default Props:</strong> Providing default values for props when not explicitly passed.</li>
      <li><strong>Type Checking:</strong> Ensuring data integrity and catching errors early.</li>
    </ul>
    <p>Using PropTypes and default props helps improve code quality and maintainability in React applications.</p>
  `,
    moduleId: ModulesSeed[67].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Passing Functions as Props',
    overview:
      'Learn how to pass functions as props to handle events and data flow in React applications.',
    content: `
    <h2>Passing Functions as Props</h2>
    <p>Passing functions as props enables communication between parent and child components in React. Key concepts include:</p>
    <ul>
      <li><strong>Event Handling:</strong> Passing callback functions to child components to handle user interactions.</li>
      <li><strong>Data Flow:</strong> Updating parent component state from child components.</li>
      <li><strong>Callback Patterns:</strong> Using callbacks to trigger actions in parent components.</li>
    </ul>
    <p>Passing functions as props allows for flexible and efficient communication in React component hierarchies.</p>
  `,
    moduleId: ModulesSeed[67].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Managing State with Hooks" Module
  {
    id: uuidv4(),
    title: 'Introduction to React State',
    overview:
      'Learn the basics of React state and its importance in managing component data.',
    content: `
    <h2>Introduction to React State</h2>
    <p>State is a built-in feature of React that allows components to manage their data internally. Key concepts include:</p>
    <ul>
      <li><strong>Component State:</strong> Local state specific to a component.</li>
      <li><strong>useState Hook:</strong> React Hook for adding state to functional components.</li>
      <li><strong>Updating State:</strong> Modifying state values and triggering re-renders.</li>
    </ul>
    <p>Understanding React state is essential for building interactive and dynamic user interfaces.</p>
  `,
    moduleId: ModulesSeed[68].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Using Multiple State Variables',
    overview:
      'Learn how to manage multiple state variables in React components.',
    content: `
    <h2>Using Multiple State Variables</h2>
    <p>React components can manage multiple state variables independently. Key concepts include:</p>
    <ul>
      <li><strong>Separate State Concerns:</strong> Maintaining different state variables for distinct data.</li>
      <li><strong>useState Hook Usage:</strong> Declaring and updating multiple state variables.</li>
      <li><strong>State Composition:</strong> Composing state values for complex data structures.</li>
    </ul>
    <p>Using multiple state variables allows for more granular control and organization of component data.</p>
  `,
    moduleId: ModulesSeed[68].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'State Management Best Practices',
    overview:
      'Explore best practices for managing state in React applications.',
    content: `
    <h2>State Management Best Practices</h2>
    <p>Effective state management is crucial for building maintainable and scalable React applications. Key practices include:</p>
    <ul>
      <li><strong>Single Source of Truth:</strong> Centralizing state management to avoid inconsistencies.</li>
      <li><strong>Immutability:</strong> Treating state as immutable to prevent accidental mutations.</li>
      <li><strong>Separation of Concerns:</strong> Decoupling UI logic from business logic for better maintainability.</li>
    </ul>
    <p>Following state management best practices helps improve the reliability and performance of React applications.</p>
  `,
    moduleId: ModulesSeed[68].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Lessons for "Handling Forms in React" Module
  {
    id: uuidv4(),
    title: 'Controlled Components',
    overview:
      'Learn how to create controlled components to manage form state in React.',
    content: `
    <h2>Controlled Components</h2>
    <p>Controlled components in React maintain form state by controlling input elements through React state. Key concepts include:</p>
    <ul>
      <li><strong>Controlled vs. Uncontrolled Components:</strong> Managing form state with React.</li>
      <li><strong>Event Handling:</strong> Handling input changes and updating state accordingly.</li>
      <li><strong>Form Submission:</strong> Handling form submission and processing user input.</li>
    </ul>
    <p>Using controlled components provides a reliable way to manage form state and user input in React applications.</p>
  `,
    moduleId: ModulesSeed[69].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Form Validation in React',
    overview:
      'Learn how to implement form validation techniques in React applications.',
    content: `
    <h2>Form Validation in React</h2>
    <p>Form validation ensures that user input meets specific criteria before submission. Key concepts include:</p>
    <<ul>
    <li><strong>Client-Side Validation:</strong> Validating input data on the client side using JavaScript.</li>
    <li><strong>Form Feedback:</strong> Providing feedback to users based on validation results.</li>
    <li><strong>Validation Libraries:</strong> Utilizing third-party libraries for complex validation logic.</li>
  </ul>
  <p>Implementing form validation enhances the user experience and ensures data integrity in React forms.</p>
`,
    moduleId: ModulesSeed[69].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'File Uploads with React',
    overview: 'Learn how to handle file uploads in React applications.',
    content: `
  <h2>File Uploads with React</h2>
  <p>File uploads allow users to submit files (such as images or documents) through web forms. Key concepts include:</p>
  <ul>
    <li><strong>Handling File Input:</strong> Creating file input fields in React forms.</li>
    <li><strong>Uploading Files:</strong> Sending files to a server for processing.</li>
    <li><strong>Displaying Upload Progress:</strong> Providing feedback on file upload progress.</li>
  </ul>
  <p>Implementing file uploads enables users to share files with your React applications.</p>
`,
    moduleId: ModulesSeed[69].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to React Router',
    overview:
      'Learn the fundamentals of React Router for managing navigation in React applications.',
    content: `
      <h2>Introduction to React Router</h2>
      <p>React Router is a library for handling routing and navigation in React applications. Key concepts include:</p>
      <ul>
        <li><strong>Route Configuration:</strong> Defining routes for different URL paths.</li>
        <li><strong>Route Rendering:</strong> Rendering components based on the current URL.</li>
        <li><strong>Navigation:</strong> Navigating between different views in the application.</li>
      </ul>
      <p>Understanding React Router is essential for building single-page applications with dynamic routing.</p>
    `,
    moduleId: ModulesSeed[70].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced React Router Features',
    overview:
      'Explore advanced features of React Router for building complex navigation structures.',
    content: `
      <h2>Advanced React Router Features</h2>
      <p>React Router provides advanced features for handling complex navigation requirements in React applications. Key concepts include:</p>
      <ul>
        <li><strong>Nested Routes:</strong> Nesting routes to create hierarchical navigation.</li>
        <li><strong>Route Guards:</strong> Protecting routes based on authentication or authorization.</li>
        <li><strong>Dynamic Routing:</strong> Generating routes dynamically based on data.</li>
      </ul>
      <p>Mastering advanced React Router features enables you to build sophisticated navigation systems.</p>
    `,
    moduleId: ModulesSeed[70].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Introduction to React Context API',
    overview:
      'Learn about the React Context API for managing global state in React applications.',
    content: `
      <h2>Introduction to React Context API</h2>
      <p>The React Context API provides a way to pass data through the component tree without having to pass props manually at every level. Key concepts include:</p>
      <ul>
        <li><strong>Creating Context:</strong> Defining a context object to share data.</li>
        <li><strong>Using Context Provider:</strong> Providing data to components in the tree.</li>
        <li><strong>Consuming Context:</strong> Accessing data from context within components.</li>
      </ul>
      <p>Understanding React Context simplifies state management in large React applications.</p>
    `,
    moduleId: ModulesSeed[71].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Advanced React Context Patterns',
    overview:
      'Explore advanced patterns and techniques for using React Context in real-world applications.',
    content: `
      <h2>Advanced React Context Patterns</h2>
      <p>Advanced React Context patterns allow for more flexible and efficient state management in React applications. Key concepts include:</p>
      <ul>
        <li><strong>Optimizing Context Consumers:</strong> Preventing unnecessary re-renders with memoization.</li>
        <li><strong>Combining Contexts:</strong> Using multiple context providers to manage related state.</li>
        <li><strong>Context with Hooks:</strong> Leveraging useContext and useReducer for cleaner code.</li>
      </ul>
      <p>Mastering advanced React Context patterns helps improve the scalability and performance of your applications.</p>
    `,
    moduleId: ModulesSeed[71].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
