import { Module } from '@nestjs/common';
import { CohortService } from './cohort.service';
import { CohortResolver } from './cohort.resolver';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [StudentModule],
  providers: [CohortResolver, CohortService],
})
export class CohortModule {}
