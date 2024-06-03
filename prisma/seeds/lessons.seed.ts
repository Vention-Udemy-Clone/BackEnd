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
    moduleId: ModulesSeed[38].id,
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
    moduleId: ModulesSeed[38].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    title: 'Understanding Kubernetes Architecture',
    overview:
      'Learn about the architecture of Kubernetes and its components for orchestrating containerized applications.',
    content:
      'This lesson provides an overview of Kubernetes architecture, including master nodes, worker nodes, API server, etcd, scheduler, controller manager, and kubelet.',
    moduleId: ModulesSeed[39].id,
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
    moduleId: ModulesSeed[39].id,
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
    moduleId: ModulesSeed[40].id,
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
    moduleId: ModulesSeed[40].id,
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
    moduleId: ModulesSeed[41].id,
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
    moduleId: ModulesSeed[41].id,
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
    moduleId: ModulesSeed[42].id,
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
    moduleId: ModulesSeed[42].id,
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
    moduleId: ModulesSeed[43].id,
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
    moduleId: ModulesSeed[43].id,
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
    moduleId: ModulesSeed[44].id,
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
    moduleId: ModulesSeed[44].id,
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
    moduleId: ModulesSeed[44].id,
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
    moduleId: ModulesSeed[45].id,
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
    moduleId: ModulesSeed[45].id,
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
    moduleId: ModulesSeed[45].id,
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
    moduleId: ModulesSeed[46].id,
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
    moduleId: ModulesSeed[46].id,
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
    moduleId: ModulesSeed[46].id,
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
    moduleId: ModulesSeed[47].id,
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
    moduleId: ModulesSeed[47].id,
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
];
