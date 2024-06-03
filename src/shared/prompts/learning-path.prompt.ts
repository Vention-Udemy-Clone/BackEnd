import { Level } from '@prisma/client';
import { CourseListForPath } from 'src/learning-path/entities/learning-path.entity';

export const learningPathPrompt = (
  studentLevel: Level,
  stack: string,
  coursesList: CourseListForPath,
) => {
  return `
  INSTRUCTIONS:

  Act as a learning path recommender system for a student with the provided studentLevel and stack. Analyze the provided list of courses (allCourses) to identify the most relevant ones that create a well-structured learning path.

  1. Course Selection:
      - Review all courses in the allCourses list.
      - Select courses relevant to the specified stack.
      - Selected courses should be the same level as studentLevel or higher but not lower.
      - Exclude non-relevant courses (e.g., avoid "Mobile App Development" for "FRONTEND" or "React JS" for "BACKEND").
      - If no relevant courses are found, provide a message indicating that no suitable courses were found.
      - Sort selected courses by level from lowest to highest.

  2. Recommendations:
      - Suggest additional resources to advance the student's career in the chosen stack.
      - Include portfolio development, online communities, networking, and soft skills improvement.
      - Provide at least five detailed recommendations.

  3. Output Format:
      - Ensure output is in format exactly as it is in example output.
      - Use only double quotes ("), DON'T add code block.
      - No line breaks or additional formatting.

  INPUT:
  {
    "studentLevel": "${studentLevel}",
    "stack": "${stack}",
    "allCourses": ${JSON.stringify(coursesList)}
  }

  If relevant courses are NOT found, return:
  ***EXAMPLE START***
  OUTPUT FORMAT - raw JSON format:
  {
    "selectedCourses": [],
    "recommendations": [ "..." ],
    "courseFound": "..."
    
  }

  EXAMPLE OUTPUT:
  {
    "selectedCourses": [],
    "recommendations": [
      "Participate in open-source projects related to your stack on platforms like GitHub. Contributing to open-source projects not only enhances your coding skills but also allows you to collaborate with other developers and gain real-world experience in building scalable and maintainable applications.",
      "Attend tech meetups, conferences, and workshops. Networking with professionals in the field can provide valuable insights, mentorship opportunities, and potential job leads. Websites like Meetup.com and Eventbrite list various tech events happening in your area."
    ]  
    "courseFound": false
  }
  ***EXAMPLE END***


  If relevant courses are found:

  ***EXAMPLE START***
    OUTPUT FORMAT - raw JSON format:
    {
      "selectedCourses": [
        { "title": "...", "level": "...", "id": "..." }
      ],
      "recommendations": [ "..." ],
      "courseFound": "..."
      
    }

    EXAMPLE OUTPUT:
    {
      "selectedCourses": [
        {
          "title": "CSS",
          "level": "BEGINNER",
          "id": "ffcf1cb4-1dae-44de-aaa6-4ff274f41946"
        },
        {
          "title": "Data Structures and Algorithms",
          "level": "ADVANCED",
          "id": "8b0ecc22-dd1c-4343-9749-9df06d407442"
        }
      ],
      "recommendations": [
        "Participate in open-source projects related to your stack on platforms like GitHub. Contributing to open-source projects not only enhances your coding skills but also allows you to collaborate with other developers and gain real-world experience in building scalable and maintainable applications.",
        "Attend tech meetups, conferences, and workshops. Networking with professionals in the field can provide valuable insights, mentorship opportunities, and potential job leads. Websites like Meetup.com and Eventbrite list various tech events happening in your area."
      ],
      "courseFound": true  
    }

    ***EXAMPLE END***
  `;
};
