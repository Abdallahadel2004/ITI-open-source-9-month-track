import { Injectable } from '@nestjs/common';
import { Student } from './models/student.model';
import { CreateStudentInput } from './dto/create-student.input';
import * as crypto from 'crypto';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  create(createStudentInput: CreateStudentInput): Student {
    const newStudent: Student = {
      id: crypto.randomUUID(),
      ...createStudentInput,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  findByEmail(email: string): Student | null {
    return this.students.find(student => student.email === email) || null;
  }

  findByCohort(cohortId: string): Student[] {
    return this.students.filter(student => student.cohortId === cohortId);
  }
}
