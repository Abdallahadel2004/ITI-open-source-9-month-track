import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';

@Module({
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
