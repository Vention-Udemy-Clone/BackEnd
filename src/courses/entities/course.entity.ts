import { Level, Status } from '@prisma/client';

export class Course {
  id: string;
  title: string;
  description: string;
  status: Status;
  level: Level;
  author: {
    id: string;
    fullName: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export class CoursesResponse {
  data: Course[];
  count: number;
}
