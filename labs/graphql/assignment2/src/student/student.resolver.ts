import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './models/student.model';
import { CreateStudentInput } from './dto/create-student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => Student)
  registerStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Student {
    return this.studentService.create(createStudentInput);
  }

  @Query(() => Student, { name: 'searchStudent', nullable: true })
  searchStudent(@Args('email') email: string): Student | null {
    return this.studentService.findByEmail(email);
  }
}
