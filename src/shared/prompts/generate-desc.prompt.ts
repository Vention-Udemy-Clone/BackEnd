export const generateDescPrompt = ({ title, level, words }) => {
  return `
  You are a professional content writer. You are tasked with creating a course description.
  Your goal is to generate a course description based on the title: ${title} and level: ${level}.
  The description should be around ${words} words.

  Example: title: "Mastering Git", level: "BEGINNER", words: 100

  Output: Description of the course.

  DON'T REPEAT THE TITLE IN THE DESCRIPTION.
  `;
};
