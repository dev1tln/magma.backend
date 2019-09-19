import { IsNotEmpty } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class ArticleInventaireInput {
  @Field(() => ID)
  @IsNotEmpty()
  article: string;

  @Field(() => ID)
  @IsNotEmpty()
  detention: string;
}
