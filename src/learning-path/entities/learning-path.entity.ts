import { $Enums } from "@prisma/client";

export type CourseListForPath = {
  id: string;
  title: string;
  description: string;
  level: $Enums.Level;
}[];

export type LearningPathResult = {
  selectedCourses: CourseListForPath;
  recommendations: string[];
};