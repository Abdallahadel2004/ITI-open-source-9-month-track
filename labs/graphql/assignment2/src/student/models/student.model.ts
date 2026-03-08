import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  githubHandle: string;

  @Field(() => ID)
  cohortId: string;
}
