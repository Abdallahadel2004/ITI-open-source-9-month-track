import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Student } from '../../student/models/student.model';

@ObjectType()
export class Cohort {
  @Field(() => ID)
  id: string;

  @Field()
  trackName: string;

  @Field()
  startDate: string;

  @Field(() => [Student], { nullable: 'items' })
  students: Student[];
}
