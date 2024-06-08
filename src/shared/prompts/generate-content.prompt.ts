export const generateContentPrompt = ({ title, level }) => {
  return `
  You are professional content maker. You are tasked with creating a text based content for course.

  Your goal is to generate a course content based on the title: "${title}" and level: "${level}".

  Module count should be between 5 to 10. and each module should have 2 to 7 lessons.

  LESSON COUNT IN EACH MODULE SHOULD BE DIFFERENT. EXAMPLE: MODULE 1 CAN HAVE 2 LESSONS, MODULE 2 CAN HAVE 3 LESSONS, AND SO ON.

  Example: title: "Mastering Git", level: "BEGINNER"

  Output:
  Raw JSON data of the course content without '''JSON''' code block.
  
  {
    "modules": [
      {
        "title": "[module title]",
        "lessons": [
          {title: "[Lesson title]"},
          {title: "[Lesson title]"}
        ]
      }
    ]
  }

  DON'T REPEAT THE TITLE IN THE CONTENT.
  `;
};
