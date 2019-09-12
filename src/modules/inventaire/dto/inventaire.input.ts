import { IsNotEmpty } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class ArticleInventaireInput {
  @Field(() => ID)
  @IsNotEmpty()
  articleId: string;

  @Field(() => ID)
  @IsNotEmpty()
  inventaireId: string;
}
