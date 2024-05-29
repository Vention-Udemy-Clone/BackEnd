import { Level } from "@prisma/client";
import { Stack } from "../enums/stack.enum";
import { CourseListForPath } from "src/learning-path/entities/learning-path.entity";

export const learningPathPrompt = (
  studentLevel: Level,
  stack: Stack,
  coursesList: CourseListForPath,
) => {
  return `
  INPUT:
  {
    "studentLevel": "${studentLevel}",
    "stack": "${stack}",
    "allCourses": ${JSON.stringify(coursesList)}
  }

  OUTPUT FORMAT - raw JSON format:
  {
    "selectedCourses": [
      { "title": "...", "level": "...", "id": "..." }
    ],
    "recommendations": [ "..." ]
  }

  EXAMPLE OUTPUT:
  {
    "selectedCourses": [
      {
        "title": "Network Security",
        "level": "ADVANCED",
        "id": "ffcf1cb4-1dae-44de-aaa6-4ff274f41946"
      },
      {
        "title": "Data Structures and Algorithms",
        "level": "ADVANCED",
        "id": "8b0ecc22-dd1c-4343-9749-9df06d407442"
      }
    ],
    "recommendations": [
      [
        "Participate in open-source projects related to your stack on platforms like GitHub. Contributing to open-source projects not only enhances your coding skills but also allows you to collaborate with other developers and gain real-world experience in building scalable and maintainable applications.",
        "Attend tech meetups, conferences, and workshops. Networking with professionals in the field can provide valuable insights, mentorship opportunities, and potential job leads. Websites like Meetup.com and Eventbrite list various tech events happening in your area.",
      ]
    ]
  }

  INSTRUCTIONS:

  Act as a learning path recommender system for a student with the provided studentLevel and stack. Analyze the provided list of courses (allCourses) to identify the most relevant ones that create a well-structured learning path.

  1. Course Selection:
      - Review all courses in the allCourses list.
      - Select courses relevant to the specified stack.
      - Prioritize courses matching the student's studentLevel.
      - Exclude non-relevant courses (e.g., avoid "Mobile App Development" for "FRONTEND" or "React JS" for "BACKEND").

  2. Learning Sequence:
      - Order selected courses for gradual skill progression.

  3. Recommendations:
      - Suggest additional resources to advance the student's career in the chosen stack.
      - Include portfolio development, online communities, networking, and soft skills improvement.
      - Provide at least seven detailed recommendations.

  4. Output Format:
      - Ensure output is in format exactly as it is in example output.
      - Use only double quotes (").
      - No line breaks or additional formatting.
  `;
};
