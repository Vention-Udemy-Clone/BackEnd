import { Level, Status } from '@prisma/client';

export class Course {
  id: string;
  title: string;
  description: string;
  status: Status;
  level: Level;
  author: {
    id: string;
    email: string;
    fullName: string;
    avatarUrl: string;
  };
  createdAt: Date;
  updatedAt: Date;
  bgImageUrl: string;
}
export class CourseResponse {
  data: Course[];
  count: number;
}

export class CoursesResponse {
  data: Course[];
  count: number;
}

export class GeneratedCourseResponse {
  title: string;
  description: string;
  modules: {
    title: string;
    lessons: {
      title: string;
    }[];
  }[];
}
