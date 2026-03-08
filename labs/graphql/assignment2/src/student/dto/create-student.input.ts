import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  @IsNotEmpty()
  fullName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  githubHandle: string;

  @Field(() => ID)
  @IsNotEmpty()
  cohortId: string;
}
