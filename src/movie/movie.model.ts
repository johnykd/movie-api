import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Movie {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  year?: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;
}
