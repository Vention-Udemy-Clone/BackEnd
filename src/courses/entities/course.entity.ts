import { Status } from '@prisma/client';

export class Course {
  id: string;
  title: string;
  description: string;
  authorId: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export class CoursesResponse {
  data: Course[];
  count: number;
}
