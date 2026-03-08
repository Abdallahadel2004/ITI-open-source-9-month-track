import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { CohortService } from './cohort.service';
import { Cohort } from './models/cohort.model';
import { Student } from '../student/models/student.model';
import { StudentService } from '../student/student.service';

@Resolver(() => Cohort)
export class CohortResolver {
  constructor(
    private readonly cohortService: CohortService,
    private readonly studentService: StudentService,
  ) {}

  @Query(() => [Cohort], { name: 'cohorts' })
  findAll(): Cohort[] {
    return this.cohortService.findAll();
  }

  @ResolveField(() => [Student])
  students(@Parent() cohort: Cohort): Student[] {
    return this.studentService.findByCohort(cohort.id);
  }
}
