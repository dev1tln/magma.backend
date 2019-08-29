import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    articles: <T = Array<Article | null>>(args: { where?: ArticleWhereInput | null, orderBy?: ArticleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    unites: <T = Array<Unite | null>>(args: { where?: UniteWhereInput | null, orderBy?: UniteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inventaires: <T = Array<Inventaire | null>>(args: { where?: InventaireWhereInput | null, orderBy?: InventaireOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    detentions: <T = Array<Detention | null>>(args: { where?: DetentionWhereInput | null, orderBy?: DetentionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    article: <T = Article | null>(args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    unite: <T = Unite | null>(args: { where: UniteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    inventaire: <T = Inventaire | null>(args: { where: InventaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    detention: <T = Detention | null>(args: { where: DetentionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    articlesConnection: <T = ArticleConnection>(args: { where?: ArticleWhereInput | null, orderBy?: ArticleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    unitesConnection: <T = UniteConnection>(args: { where?: UniteWhereInput | null, orderBy?: UniteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inventairesConnection: <T = InventaireConnection>(args: { where?: InventaireWhereInput | null, orderBy?: InventaireOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    detentionsConnection: <T = DetentionConnection>(args: { where?: DetentionWhereInput | null, orderBy?: DetentionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createArticle: <T = Article>(args: { data: ArticleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUnite: <T = Unite>(args: { data: UniteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInventaire: <T = Inventaire>(args: { data: InventaireCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDetention: <T = Detention>(args: { data: DetentionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateArticle: <T = Article | null>(args: { data: ArticleUpdateInput, where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUnite: <T = Unite | null>(args: { data: UniteUpdateInput, where: UniteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateInventaire: <T = Inventaire | null>(args: { data: InventaireUpdateInput, where: InventaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDetention: <T = Detention | null>(args: { data: DetentionUpdateInput, where: DetentionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteArticle: <T = Article | null>(args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUnite: <T = Unite | null>(args: { where: UniteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteInventaire: <T = Inventaire | null>(args: { where: InventaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDetention: <T = Detention | null>(args: { where: DetentionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertArticle: <T = Article>(args: { where: ArticleWhereUniqueInput, create: ArticleCreateInput, update: ArticleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUnite: <T = Unite>(args: { where: UniteWhereUniqueInput, create: UniteCreateInput, update: UniteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInventaire: <T = Inventaire>(args: { where: InventaireWhereUniqueInput, create: InventaireCreateInput, update: InventaireUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDetention: <T = Detention>(args: { where: DetentionWhereUniqueInput, create: DetentionCreateInput, update: DetentionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyArticles: <T = BatchPayload>(args: { data: ArticleUpdateManyMutationInput, where?: ArticleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUnites: <T = BatchPayload>(args: { data: UniteUpdateManyMutationInput, where?: UniteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInventaires: <T = BatchPayload>(args: { data: InventaireUpdateManyMutationInput, where?: InventaireWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDetentions: <T = BatchPayload>(args: { data: DetentionUpdateManyMutationInput, where?: DetentionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyArticles: <T = BatchPayload>(args: { where?: ArticleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUnites: <T = BatchPayload>(args: { where?: UniteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInventaires: <T = BatchPayload>(args: { where?: InventaireWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDetentions: <T = BatchPayload>(args: { where?: DetentionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    article: <T = ArticleSubscriptionPayload | null>(args: { where?: ArticleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    unite: <T = UniteSubscriptionPayload | null>(args: { where?: UniteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    inventaire: <T = InventaireSubscriptionPayload | null>(args: { where?: InventaireSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    detention: <T = DetentionSubscriptionPayload | null>(args: { where?: DetentionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Article: (where?: ArticleWhereInput) => Promise<boolean>
  Unite: (where?: UniteWhereInput) => Promise<boolean>
  Inventaire: (where?: InventaireWhereInput) => Promise<boolean>
  Detention: (where?: DetentionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateArticle {
  count: Int!
}

type AggregateDetention {
  count: Int!
}

type AggregateInventaire {
  count: Int!
}

type AggregateUnite {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Article implements Node {
  id: ID!
  createdAt: DateTime
  numref: String!
  nno: String!
  lib: String!
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
  detention: Detention
}

"""A connection to a list of items."""
type ArticleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  id: ID
  numref: String!
  nno: String!
  lib: String!
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
  detention: DetentionCreateOneInput
}

"""An edge in a connection."""
type ArticleEdge {
  """The item at the end of the edge."""
  node: Article!

  """A cursor for use in pagination."""
  cursor: String!
}

type ArticleEmbedded {
  article_id: ID!
  nno: String!
  numref: String!
  lib: String!
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
  detention: Detention!
}

input ArticleEmbeddedCreateInput {
  article_id: ID!
  nno: String!
  numref: String!
  lib: String!
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
  detention: DetentionCreateOneInput!
}

input ArticleEmbeddedCreateManyInput {
  create: [ArticleEmbeddedCreateInput!]
}

input ArticleEmbeddedRestrictedWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleEmbeddedRestrictedWhereInput!]
  article_id: ID

  """All values that are not equal to given value."""
  article_id_not: ID

  """All values that are contained in given list."""
  article_id_in: [ID!]

  """All values that are not contained in given list."""
  article_id_not_in: [ID!]

  """All values less than the given value."""
  article_id_lt: ID

  """All values less than or equal the given value."""
  article_id_lte: ID

  """All values greater than the given value."""
  article_id_gt: ID

  """All values greater than or equal the given value."""
  article_id_gte: ID

  """All values containing the given string."""
  article_id_contains: ID

  """All values not containing the given string."""
  article_id_not_contains: ID

  """All values starting with the given string."""
  article_id_starts_with: ID

  """All values not starting with the given string."""
  article_id_not_starts_with: ID

  """All values ending with the given string."""
  article_id_ends_with: ID

  """All values not ending with the given string."""
  article_id_not_ends_with: ID
  nno: String

  """All values that are not equal to given value."""
  nno_not: String

  """All values that are contained in given list."""
  nno_in: [String!]

  """All values that are not contained in given list."""
  nno_not_in: [String!]

  """All values less than the given value."""
  nno_lt: String

  """All values less than or equal the given value."""
  nno_lte: String

  """All values greater than the given value."""
  nno_gt: String

  """All values greater than or equal the given value."""
  nno_gte: String

  """All values containing the given string."""
  nno_contains: String

  """All values not containing the given string."""
  nno_not_contains: String

  """All values starting with the given string."""
  nno_starts_with: String

  """All values not starting with the given string."""
  nno_not_starts_with: String

  """All values ending with the given string."""
  nno_ends_with: String

  """All values not ending with the given string."""
  nno_not_ends_with: String
  numref: String

  """All values that are not equal to given value."""
  numref_not: String

  """All values that are contained in given list."""
  numref_in: [String!]

  """All values that are not contained in given list."""
  numref_not_in: [String!]

  """All values less than the given value."""
  numref_lt: String

  """All values less than or equal the given value."""
  numref_lte: String

  """All values greater than the given value."""
  numref_gt: String

  """All values greater than or equal the given value."""
  numref_gte: String

  """All values containing the given string."""
  numref_contains: String

  """All values not containing the given string."""
  numref_not_contains: String

  """All values starting with the given string."""
  numref_starts_with: String

  """All values not starting with the given string."""
  numref_not_starts_with: String

  """All values ending with the given string."""
  numref_ends_with: String

  """All values not ending with the given string."""
  numref_not_ends_with: String
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  untcpt: Int

  """All values that are not equal to given value."""
  untcpt_not: Int

  """All values that are contained in given list."""
  untcpt_in: [Int!]

  """All values that are not contained in given list."""
  untcpt_not_in: [Int!]

  """All values less than the given value."""
  untcpt_lt: Int

  """All values less than or equal the given value."""
  untcpt_lte: Int

  """All values greater than the given value."""
  untcpt_gt: Int

  """All values greater than or equal the given value."""
  untcpt_gte: Int
  untprx: Float

  """All values that are not equal to given value."""
  untprx_not: Float

  """All values that are contained in given list."""
  untprx_in: [Float!]

  """All values that are not contained in given list."""
  untprx_not_in: [Float!]

  """All values less than the given value."""
  untprx_lt: Float

  """All values less than or equal the given value."""
  untprx_lte: Float

  """All values greater than the given value."""
  untprx_gt: Float

  """All values greater than or equal the given value."""
  untprx_gte: Float
  cdeapr: String

  """All values that are not equal to given value."""
  cdeapr_not: String

  """All values that are contained in given list."""
  cdeapr_in: [String!]

  """All values that are not contained in given list."""
  cdeapr_not_in: [String!]

  """All values less than the given value."""
  cdeapr_lt: String

  """All values less than or equal the given value."""
  cdeapr_lte: String

  """All values greater than the given value."""
  cdeapr_gt: String

  """All values greater than or equal the given value."""
  cdeapr_gte: String

  """All values containing the given string."""
  cdeapr_contains: String

  """All values not containing the given string."""
  cdeapr_not_contains: String

  """All values starting with the given string."""
  cdeapr_starts_with: String

  """All values not starting with the given string."""
  cdeapr_not_starts_with: String

  """All values ending with the given string."""
  cdeapr_ends_with: String

  """All values not ending with the given string."""
  cdeapr_not_ends_with: String
  srvpou: String

  """All values that are not equal to given value."""
  srvpou_not: String

  """All values that are contained in given list."""
  srvpou_in: [String!]

  """All values that are not contained in given list."""
  srvpou_not_in: [String!]

  """All values less than the given value."""
  srvpou_lt: String

  """All values less than or equal the given value."""
  srvpou_lte: String

  """All values greater than the given value."""
  srvpou_gt: String

  """All values greater than or equal the given value."""
  srvpou_gte: String

  """All values containing the given string."""
  srvpou_contains: String

  """All values not containing the given string."""
  srvpou_not_contains: String

  """All values starting with the given string."""
  srvpou_starts_with: String

  """All values not starting with the given string."""
  srvpou_not_starts_with: String

  """All values ending with the given string."""
  srvpou_ends_with: String

  """All values not ending with the given string."""
  srvpou_not_ends_with: String
  typart: String

  """All values that are not equal to given value."""
  typart_not: String

  """All values that are contained in given list."""
  typart_in: [String!]

  """All values that are not contained in given list."""
  typart_not_in: [String!]

  """All values less than the given value."""
  typart_lt: String

  """All values less than or equal the given value."""
  typart_lte: String

  """All values greater than the given value."""
  typart_gt: String

  """All values greater than or equal the given value."""
  typart_gte: String

  """All values containing the given string."""
  typart_contains: String

  """All values not containing the given string."""
  typart_not_contains: String

  """All values starting with the given string."""
  typart_starts_with: String

  """All values not starting with the given string."""
  typart_not_starts_with: String

  """All values ending with the given string."""
  typart_ends_with: String

  """All values not ending with the given string."""
  typart_not_ends_with: String
  numser: String

  """All values that are not equal to given value."""
  numser_not: String

  """All values that are contained in given list."""
  numser_in: [String!]

  """All values that are not contained in given list."""
  numser_not_in: [String!]

  """All values less than the given value."""
  numser_lt: String

  """All values less than or equal the given value."""
  numser_lte: String

  """All values greater than the given value."""
  numser_gt: String

  """All values greater than or equal the given value."""
  numser_gte: String

  """All values containing the given string."""
  numser_contains: String

  """All values not containing the given string."""
  numser_not_contains: String

  """All values starting with the given string."""
  numser_starts_with: String

  """All values not starting with the given string."""
  numser_not_starts_with: String

  """All values ending with the given string."""
  numser_ends_with: String

  """All values not ending with the given string."""
  numser_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
}

input ArticleEmbeddedScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleEmbeddedScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArticleEmbeddedScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArticleEmbeddedScalarWhereInput!]
  article_id: ID

  """All values that are not equal to given value."""
  article_id_not: ID

  """All values that are contained in given list."""
  article_id_in: [ID!]

  """All values that are not contained in given list."""
  article_id_not_in: [ID!]

  """All values less than the given value."""
  article_id_lt: ID

  """All values less than or equal the given value."""
  article_id_lte: ID

  """All values greater than the given value."""
  article_id_gt: ID

  """All values greater than or equal the given value."""
  article_id_gte: ID

  """All values containing the given string."""
  article_id_contains: ID

  """All values not containing the given string."""
  article_id_not_contains: ID

  """All values starting with the given string."""
  article_id_starts_with: ID

  """All values not starting with the given string."""
  article_id_not_starts_with: ID

  """All values ending with the given string."""
  article_id_ends_with: ID

  """All values not ending with the given string."""
  article_id_not_ends_with: ID
  nno: String

  """All values that are not equal to given value."""
  nno_not: String

  """All values that are contained in given list."""
  nno_in: [String!]

  """All values that are not contained in given list."""
  nno_not_in: [String!]

  """All values less than the given value."""
  nno_lt: String

  """All values less than or equal the given value."""
  nno_lte: String

  """All values greater than the given value."""
  nno_gt: String

  """All values greater than or equal the given value."""
  nno_gte: String

  """All values containing the given string."""
  nno_contains: String

  """All values not containing the given string."""
  nno_not_contains: String

  """All values starting with the given string."""
  nno_starts_with: String

  """All values not starting with the given string."""
  nno_not_starts_with: String

  """All values ending with the given string."""
  nno_ends_with: String

  """All values not ending with the given string."""
  nno_not_ends_with: String
  numref: String

  """All values that are not equal to given value."""
  numref_not: String

  """All values that are contained in given list."""
  numref_in: [String!]

  """All values that are not contained in given list."""
  numref_not_in: [String!]

  """All values less than the given value."""
  numref_lt: String

  """All values less than or equal the given value."""
  numref_lte: String

  """All values greater than the given value."""
  numref_gt: String

  """All values greater than or equal the given value."""
  numref_gte: String

  """All values containing the given string."""
  numref_contains: String

  """All values not containing the given string."""
  numref_not_contains: String

  """All values starting with the given string."""
  numref_starts_with: String

  """All values not starting with the given string."""
  numref_not_starts_with: String

  """All values ending with the given string."""
  numref_ends_with: String

  """All values not ending with the given string."""
  numref_not_ends_with: String
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  untcpt: Int

  """All values that are not equal to given value."""
  untcpt_not: Int

  """All values that are contained in given list."""
  untcpt_in: [Int!]

  """All values that are not contained in given list."""
  untcpt_not_in: [Int!]

  """All values less than the given value."""
  untcpt_lt: Int

  """All values less than or equal the given value."""
  untcpt_lte: Int

  """All values greater than the given value."""
  untcpt_gt: Int

  """All values greater than or equal the given value."""
  untcpt_gte: Int
  untprx: Float

  """All values that are not equal to given value."""
  untprx_not: Float

  """All values that are contained in given list."""
  untprx_in: [Float!]

  """All values that are not contained in given list."""
  untprx_not_in: [Float!]

  """All values less than the given value."""
  untprx_lt: Float

  """All values less than or equal the given value."""
  untprx_lte: Float

  """All values greater than the given value."""
  untprx_gt: Float

  """All values greater than or equal the given value."""
  untprx_gte: Float
  cdeapr: String

  """All values that are not equal to given value."""
  cdeapr_not: String

  """All values that are contained in given list."""
  cdeapr_in: [String!]

  """All values that are not contained in given list."""
  cdeapr_not_in: [String!]

  """All values less than the given value."""
  cdeapr_lt: String

  """All values less than or equal the given value."""
  cdeapr_lte: String

  """All values greater than the given value."""
  cdeapr_gt: String

  """All values greater than or equal the given value."""
  cdeapr_gte: String

  """All values containing the given string."""
  cdeapr_contains: String

  """All values not containing the given string."""
  cdeapr_not_contains: String

  """All values starting with the given string."""
  cdeapr_starts_with: String

  """All values not starting with the given string."""
  cdeapr_not_starts_with: String

  """All values ending with the given string."""
  cdeapr_ends_with: String

  """All values not ending with the given string."""
  cdeapr_not_ends_with: String
  srvpou: String

  """All values that are not equal to given value."""
  srvpou_not: String

  """All values that are contained in given list."""
  srvpou_in: [String!]

  """All values that are not contained in given list."""
  srvpou_not_in: [String!]

  """All values less than the given value."""
  srvpou_lt: String

  """All values less than or equal the given value."""
  srvpou_lte: String

  """All values greater than the given value."""
  srvpou_gt: String

  """All values greater than or equal the given value."""
  srvpou_gte: String

  """All values containing the given string."""
  srvpou_contains: String

  """All values not containing the given string."""
  srvpou_not_contains: String

  """All values starting with the given string."""
  srvpou_starts_with: String

  """All values not starting with the given string."""
  srvpou_not_starts_with: String

  """All values ending with the given string."""
  srvpou_ends_with: String

  """All values not ending with the given string."""
  srvpou_not_ends_with: String
  typart: String

  """All values that are not equal to given value."""
  typart_not: String

  """All values that are contained in given list."""
  typart_in: [String!]

  """All values that are not contained in given list."""
  typart_not_in: [String!]

  """All values less than the given value."""
  typart_lt: String

  """All values less than or equal the given value."""
  typart_lte: String

  """All values greater than the given value."""
  typart_gt: String

  """All values greater than or equal the given value."""
  typart_gte: String

  """All values containing the given string."""
  typart_contains: String

  """All values not containing the given string."""
  typart_not_contains: String

  """All values starting with the given string."""
  typart_starts_with: String

  """All values not starting with the given string."""
  typart_not_starts_with: String

  """All values ending with the given string."""
  typart_ends_with: String

  """All values not ending with the given string."""
  typart_not_ends_with: String
  numser: String

  """All values that are not equal to given value."""
  numser_not: String

  """All values that are contained in given list."""
  numser_in: [String!]

  """All values that are not contained in given list."""
  numser_not_in: [String!]

  """All values less than the given value."""
  numser_lt: String

  """All values less than or equal the given value."""
  numser_lte: String

  """All values greater than the given value."""
  numser_gt: String

  """All values greater than or equal the given value."""
  numser_gte: String

  """All values containing the given string."""
  numser_contains: String

  """All values not containing the given string."""
  numser_not_contains: String

  """All values starting with the given string."""
  numser_starts_with: String

  """All values not starting with the given string."""
  numser_not_starts_with: String

  """All values ending with the given string."""
  numser_ends_with: String

  """All values not ending with the given string."""
  numser_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
}

input ArticleEmbeddedUpdateManyDataInput {
  article_id: ID
  nno: String
  numref: String
  lib: String
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
}

input ArticleEmbeddedUpdateManyInput {
  create: [ArticleEmbeddedCreateInput!]
  updateMany: [ArticleEmbeddedUpdateManyWithWhereNestedInput!]
  deleteMany: [ArticleEmbeddedScalarWhereInput!]
}

input ArticleEmbeddedUpdateManyWithWhereNestedInput {
  where: ArticleEmbeddedScalarWhereInput!
  data: ArticleEmbeddedUpdateManyDataInput!
}

input ArticleEmbeddedWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleEmbeddedWhereInput!]
  article_id: ID

  """All values that are not equal to given value."""
  article_id_not: ID

  """All values that are contained in given list."""
  article_id_in: [ID!]

  """All values that are not contained in given list."""
  article_id_not_in: [ID!]

  """All values less than the given value."""
  article_id_lt: ID

  """All values less than or equal the given value."""
  article_id_lte: ID

  """All values greater than the given value."""
  article_id_gt: ID

  """All values greater than or equal the given value."""
  article_id_gte: ID

  """All values containing the given string."""
  article_id_contains: ID

  """All values not containing the given string."""
  article_id_not_contains: ID

  """All values starting with the given string."""
  article_id_starts_with: ID

  """All values not starting with the given string."""
  article_id_not_starts_with: ID

  """All values ending with the given string."""
  article_id_ends_with: ID

  """All values not ending with the given string."""
  article_id_not_ends_with: ID
  nno: String

  """All values that are not equal to given value."""
  nno_not: String

  """All values that are contained in given list."""
  nno_in: [String!]

  """All values that are not contained in given list."""
  nno_not_in: [String!]

  """All values less than the given value."""
  nno_lt: String

  """All values less than or equal the given value."""
  nno_lte: String

  """All values greater than the given value."""
  nno_gt: String

  """All values greater than or equal the given value."""
  nno_gte: String

  """All values containing the given string."""
  nno_contains: String

  """All values not containing the given string."""
  nno_not_contains: String

  """All values starting with the given string."""
  nno_starts_with: String

  """All values not starting with the given string."""
  nno_not_starts_with: String

  """All values ending with the given string."""
  nno_ends_with: String

  """All values not ending with the given string."""
  nno_not_ends_with: String
  numref: String

  """All values that are not equal to given value."""
  numref_not: String

  """All values that are contained in given list."""
  numref_in: [String!]

  """All values that are not contained in given list."""
  numref_not_in: [String!]

  """All values less than the given value."""
  numref_lt: String

  """All values less than or equal the given value."""
  numref_lte: String

  """All values greater than the given value."""
  numref_gt: String

  """All values greater than or equal the given value."""
  numref_gte: String

  """All values containing the given string."""
  numref_contains: String

  """All values not containing the given string."""
  numref_not_contains: String

  """All values starting with the given string."""
  numref_starts_with: String

  """All values not starting with the given string."""
  numref_not_starts_with: String

  """All values ending with the given string."""
  numref_ends_with: String

  """All values not ending with the given string."""
  numref_not_ends_with: String
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  untcpt: Int

  """All values that are not equal to given value."""
  untcpt_not: Int

  """All values that are contained in given list."""
  untcpt_in: [Int!]

  """All values that are not contained in given list."""
  untcpt_not_in: [Int!]

  """All values less than the given value."""
  untcpt_lt: Int

  """All values less than or equal the given value."""
  untcpt_lte: Int

  """All values greater than the given value."""
  untcpt_gt: Int

  """All values greater than or equal the given value."""
  untcpt_gte: Int
  untprx: Float

  """All values that are not equal to given value."""
  untprx_not: Float

  """All values that are contained in given list."""
  untprx_in: [Float!]

  """All values that are not contained in given list."""
  untprx_not_in: [Float!]

  """All values less than the given value."""
  untprx_lt: Float

  """All values less than or equal the given value."""
  untprx_lte: Float

  """All values greater than the given value."""
  untprx_gt: Float

  """All values greater than or equal the given value."""
  untprx_gte: Float
  cdeapr: String

  """All values that are not equal to given value."""
  cdeapr_not: String

  """All values that are contained in given list."""
  cdeapr_in: [String!]

  """All values that are not contained in given list."""
  cdeapr_not_in: [String!]

  """All values less than the given value."""
  cdeapr_lt: String

  """All values less than or equal the given value."""
  cdeapr_lte: String

  """All values greater than the given value."""
  cdeapr_gt: String

  """All values greater than or equal the given value."""
  cdeapr_gte: String

  """All values containing the given string."""
  cdeapr_contains: String

  """All values not containing the given string."""
  cdeapr_not_contains: String

  """All values starting with the given string."""
  cdeapr_starts_with: String

  """All values not starting with the given string."""
  cdeapr_not_starts_with: String

  """All values ending with the given string."""
  cdeapr_ends_with: String

  """All values not ending with the given string."""
  cdeapr_not_ends_with: String
  srvpou: String

  """All values that are not equal to given value."""
  srvpou_not: String

  """All values that are contained in given list."""
  srvpou_in: [String!]

  """All values that are not contained in given list."""
  srvpou_not_in: [String!]

  """All values less than the given value."""
  srvpou_lt: String

  """All values less than or equal the given value."""
  srvpou_lte: String

  """All values greater than the given value."""
  srvpou_gt: String

  """All values greater than or equal the given value."""
  srvpou_gte: String

  """All values containing the given string."""
  srvpou_contains: String

  """All values not containing the given string."""
  srvpou_not_contains: String

  """All values starting with the given string."""
  srvpou_starts_with: String

  """All values not starting with the given string."""
  srvpou_not_starts_with: String

  """All values ending with the given string."""
  srvpou_ends_with: String

  """All values not ending with the given string."""
  srvpou_not_ends_with: String
  typart: String

  """All values that are not equal to given value."""
  typart_not: String

  """All values that are contained in given list."""
  typart_in: [String!]

  """All values that are not contained in given list."""
  typart_not_in: [String!]

  """All values less than the given value."""
  typart_lt: String

  """All values less than or equal the given value."""
  typart_lte: String

  """All values greater than the given value."""
  typart_gt: String

  """All values greater than or equal the given value."""
  typart_gte: String

  """All values containing the given string."""
  typart_contains: String

  """All values not containing the given string."""
  typart_not_contains: String

  """All values starting with the given string."""
  typart_starts_with: String

  """All values not starting with the given string."""
  typart_not_starts_with: String

  """All values ending with the given string."""
  typart_ends_with: String

  """All values not ending with the given string."""
  typart_not_ends_with: String
  numser: String

  """All values that are not equal to given value."""
  numser_not: String

  """All values that are contained in given list."""
  numser_in: [String!]

  """All values that are not contained in given list."""
  numser_not_in: [String!]

  """All values less than the given value."""
  numser_lt: String

  """All values less than or equal the given value."""
  numser_lte: String

  """All values greater than the given value."""
  numser_gt: String

  """All values greater than or equal the given value."""
  numser_gte: String

  """All values containing the given string."""
  numser_contains: String

  """All values not containing the given string."""
  numser_not_contains: String

  """All values starting with the given string."""
  numser_starts_with: String

  """All values not starting with the given string."""
  numser_not_starts_with: String

  """All values ending with the given string."""
  numser_ends_with: String

  """All values not ending with the given string."""
  numser_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
  detention: DetentionWhereInput
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  numref_ASC
  numref_DESC
  nno_ASC
  nno_DESC
  lib_ASC
  lib_DESC
  untcpt_ASC
  untcpt_DESC
  untprx_ASC
  untprx_DESC
  cdeapr_ASC
  cdeapr_DESC
  srvpou_ASC
  srvpou_DESC
  typart_ASC
  typart_DESC
  numser_ASC
  numser_DESC
  pictureUrl_ASC
  pictureUrl_DESC
}

type ArticlePreviousValues {
  id: ID!
  createdAt: DateTime
  numref: String!
  nno: String!
  lib: String!
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
}

input ArticleUpdateInput {
  numref: String
  nno: String
  lib: String
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
  detention: DetentionUpdateOneInput
}

input ArticleUpdateManyMutationInput {
  numref: String
  nno: String
  lib: String
  untcpt: Int
  untprx: Float
  cdeapr: String
  srvpou: String
  typart: String
  numser: String
  pictureUrl: String
}

input ArticleWhereInput {
  """Logical AND on all given filters."""
  AND: [ArticleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  numref: String

  """All values that are not equal to given value."""
  numref_not: String

  """All values that are contained in given list."""
  numref_in: [String!]

  """All values that are not contained in given list."""
  numref_not_in: [String!]

  """All values less than the given value."""
  numref_lt: String

  """All values less than or equal the given value."""
  numref_lte: String

  """All values greater than the given value."""
  numref_gt: String

  """All values greater than or equal the given value."""
  numref_gte: String

  """All values containing the given string."""
  numref_contains: String

  """All values not containing the given string."""
  numref_not_contains: String

  """All values starting with the given string."""
  numref_starts_with: String

  """All values not starting with the given string."""
  numref_not_starts_with: String

  """All values ending with the given string."""
  numref_ends_with: String

  """All values not ending with the given string."""
  numref_not_ends_with: String
  nno: String

  """All values that are not equal to given value."""
  nno_not: String

  """All values that are contained in given list."""
  nno_in: [String!]

  """All values that are not contained in given list."""
  nno_not_in: [String!]

  """All values less than the given value."""
  nno_lt: String

  """All values less than or equal the given value."""
  nno_lte: String

  """All values greater than the given value."""
  nno_gt: String

  """All values greater than or equal the given value."""
  nno_gte: String

  """All values containing the given string."""
  nno_contains: String

  """All values not containing the given string."""
  nno_not_contains: String

  """All values starting with the given string."""
  nno_starts_with: String

  """All values not starting with the given string."""
  nno_not_starts_with: String

  """All values ending with the given string."""
  nno_ends_with: String

  """All values not ending with the given string."""
  nno_not_ends_with: String
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  untcpt: Int

  """All values that are not equal to given value."""
  untcpt_not: Int

  """All values that are contained in given list."""
  untcpt_in: [Int!]

  """All values that are not contained in given list."""
  untcpt_not_in: [Int!]

  """All values less than the given value."""
  untcpt_lt: Int

  """All values less than or equal the given value."""
  untcpt_lte: Int

  """All values greater than the given value."""
  untcpt_gt: Int

  """All values greater than or equal the given value."""
  untcpt_gte: Int
  untprx: Float

  """All values that are not equal to given value."""
  untprx_not: Float

  """All values that are contained in given list."""
  untprx_in: [Float!]

  """All values that are not contained in given list."""
  untprx_not_in: [Float!]

  """All values less than the given value."""
  untprx_lt: Float

  """All values less than or equal the given value."""
  untprx_lte: Float

  """All values greater than the given value."""
  untprx_gt: Float

  """All values greater than or equal the given value."""
  untprx_gte: Float
  cdeapr: String

  """All values that are not equal to given value."""
  cdeapr_not: String

  """All values that are contained in given list."""
  cdeapr_in: [String!]

  """All values that are not contained in given list."""
  cdeapr_not_in: [String!]

  """All values less than the given value."""
  cdeapr_lt: String

  """All values less than or equal the given value."""
  cdeapr_lte: String

  """All values greater than the given value."""
  cdeapr_gt: String

  """All values greater than or equal the given value."""
  cdeapr_gte: String

  """All values containing the given string."""
  cdeapr_contains: String

  """All values not containing the given string."""
  cdeapr_not_contains: String

  """All values starting with the given string."""
  cdeapr_starts_with: String

  """All values not starting with the given string."""
  cdeapr_not_starts_with: String

  """All values ending with the given string."""
  cdeapr_ends_with: String

  """All values not ending with the given string."""
  cdeapr_not_ends_with: String
  srvpou: String

  """All values that are not equal to given value."""
  srvpou_not: String

  """All values that are contained in given list."""
  srvpou_in: [String!]

  """All values that are not contained in given list."""
  srvpou_not_in: [String!]

  """All values less than the given value."""
  srvpou_lt: String

  """All values less than or equal the given value."""
  srvpou_lte: String

  """All values greater than the given value."""
  srvpou_gt: String

  """All values greater than or equal the given value."""
  srvpou_gte: String

  """All values containing the given string."""
  srvpou_contains: String

  """All values not containing the given string."""
  srvpou_not_contains: String

  """All values starting with the given string."""
  srvpou_starts_with: String

  """All values not starting with the given string."""
  srvpou_not_starts_with: String

  """All values ending with the given string."""
  srvpou_ends_with: String

  """All values not ending with the given string."""
  srvpou_not_ends_with: String
  typart: String

  """All values that are not equal to given value."""
  typart_not: String

  """All values that are contained in given list."""
  typart_in: [String!]

  """All values that are not contained in given list."""
  typart_not_in: [String!]

  """All values less than the given value."""
  typart_lt: String

  """All values less than or equal the given value."""
  typart_lte: String

  """All values greater than the given value."""
  typart_gt: String

  """All values greater than or equal the given value."""
  typart_gte: String

  """All values containing the given string."""
  typart_contains: String

  """All values not containing the given string."""
  typart_not_contains: String

  """All values starting with the given string."""
  typart_starts_with: String

  """All values not starting with the given string."""
  typart_not_starts_with: String

  """All values ending with the given string."""
  typart_ends_with: String

  """All values not ending with the given string."""
  typart_not_ends_with: String
  numser: String

  """All values that are not equal to given value."""
  numser_not: String

  """All values that are contained in given list."""
  numser_in: [String!]

  """All values that are not contained in given list."""
  numser_not_in: [String!]

  """All values less than the given value."""
  numser_lt: String

  """All values less than or equal the given value."""
  numser_lte: String

  """All values greater than the given value."""
  numser_gt: String

  """All values greater than or equal the given value."""
  numser_gte: String

  """All values containing the given string."""
  numser_contains: String

  """All values not containing the given string."""
  numser_not_contains: String

  """All values starting with the given string."""
  numser_starts_with: String

  """All values not starting with the given string."""
  numser_not_starts_with: String

  """All values ending with the given string."""
  numser_ends_with: String

  """All values not ending with the given string."""
  numser_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
  detention: DetentionWhereInput
}

input ArticleWhereUniqueInput {
  id: ID
  numref: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Detention implements Node {
  id: ID!
  lib: String!
  unite: Unite!
  inventaire(where: InventaireWhereInput, orderBy: InventaireOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inventaire!]
}

"""A connection to a list of items."""
type DetentionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DetentionEdge]!
  aggregate: AggregateDetention!
}

input DetentionCreateInput {
  id: ID
  lib: String!
  unite: UniteCreateOneWithoutDetentionsInput!
  inventaire: InventaireCreateManyWithoutDetentionInput
}

input DetentionCreateManyWithoutUniteInput {
  create: [DetentionCreateWithoutUniteInput!]
  connect: [DetentionWhereUniqueInput!]
}

input DetentionCreateOneInput {
  create: DetentionCreateInput
  connect: DetentionWhereUniqueInput
}

input DetentionCreateOneWithoutInventaireInput {
  create: DetentionCreateWithoutInventaireInput
  connect: DetentionWhereUniqueInput
}

input DetentionCreateWithoutInventaireInput {
  id: ID
  lib: String!
  unite: UniteCreateOneWithoutDetentionsInput!
}

input DetentionCreateWithoutUniteInput {
  id: ID
  lib: String!
  inventaire: InventaireCreateManyWithoutDetentionInput
}

"""An edge in a connection."""
type DetentionEdge {
  """The item at the end of the edge."""
  node: Detention!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DetentionOrderByInput {
  id_ASC
  id_DESC
  lib_ASC
  lib_DESC
}

type DetentionPreviousValues {
  id: ID!
  lib: String!
}

input DetentionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [DetentionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [DetentionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DetentionScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
}

type DetentionSubscriptionPayload {
  mutation: MutationType!
  node: Detention
  updatedFields: [String!]
  previousValues: DetentionPreviousValues
}

input DetentionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DetentionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DetentionWhereInput
}

input DetentionUpdateDataInput {
  lib: String
  unite: UniteUpdateOneRequiredWithoutDetentionsInput
  inventaire: InventaireUpdateManyWithoutDetentionInput
}

input DetentionUpdateInput {
  lib: String
  unite: UniteUpdateOneRequiredWithoutDetentionsInput
  inventaire: InventaireUpdateManyWithoutDetentionInput
}

input DetentionUpdateManyDataInput {
  lib: String
}

input DetentionUpdateManyMutationInput {
  lib: String
}

input DetentionUpdateManyWithoutUniteInput {
  create: [DetentionCreateWithoutUniteInput!]
  connect: [DetentionWhereUniqueInput!]
  set: [DetentionWhereUniqueInput!]
  disconnect: [DetentionWhereUniqueInput!]
  delete: [DetentionWhereUniqueInput!]
  update: [DetentionUpdateWithWhereUniqueWithoutUniteInput!]
  updateMany: [DetentionUpdateManyWithWhereNestedInput!]
  deleteMany: [DetentionScalarWhereInput!]
  upsert: [DetentionUpsertWithWhereUniqueWithoutUniteInput!]
}

input DetentionUpdateManyWithWhereNestedInput {
  where: DetentionScalarWhereInput!
  data: DetentionUpdateManyDataInput!
}

input DetentionUpdateOneInput {
  create: DetentionCreateInput
  connect: DetentionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DetentionUpdateDataInput
  upsert: DetentionUpsertNestedInput
}

input DetentionUpdateOneWithoutInventaireInput {
  create: DetentionCreateWithoutInventaireInput
  connect: DetentionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DetentionUpdateWithoutInventaireDataInput
  upsert: DetentionUpsertWithoutInventaireInput
}

input DetentionUpdateWithoutInventaireDataInput {
  lib: String
  unite: UniteUpdateOneRequiredWithoutDetentionsInput
}

input DetentionUpdateWithoutUniteDataInput {
  lib: String
  inventaire: InventaireUpdateManyWithoutDetentionInput
}

input DetentionUpdateWithWhereUniqueWithoutUniteInput {
  where: DetentionWhereUniqueInput!
  data: DetentionUpdateWithoutUniteDataInput!
}

input DetentionUpsertNestedInput {
  update: DetentionUpdateDataInput!
  create: DetentionCreateInput!
}

input DetentionUpsertWithoutInventaireInput {
  update: DetentionUpdateWithoutInventaireDataInput!
  create: DetentionCreateWithoutInventaireInput!
}

input DetentionUpsertWithWhereUniqueWithoutUniteInput {
  where: DetentionWhereUniqueInput!
  update: DetentionUpdateWithoutUniteDataInput!
  create: DetentionCreateWithoutUniteInput!
}

input DetentionWhereInput {
  """Logical AND on all given filters."""
  AND: [DetentionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  unite: UniteWhereInput
  inventaire_some: InventaireWhereInput
}

input DetentionWhereUniqueInput {
  id: ID
}

type Inventaire implements Node {
  id: ID!
  lib: String!
  dtever: DateTime
  exideb: String
  dtecre: DateTime
  cdevrf: String
  obs: String
  articles: [ArticleEmbedded!]
  detention: Detention
}

"""A connection to a list of items."""
type InventaireConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InventaireEdge]!
  aggregate: AggregateInventaire!
}

input InventaireCreateInput {
  id: ID
  lib: String!
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
  articles: ArticleEmbeddedCreateManyInput
  detention: DetentionCreateOneWithoutInventaireInput
}

input InventaireCreateManyWithoutDetentionInput {
  create: [InventaireCreateWithoutDetentionInput!]
  connect: [InventaireWhereUniqueInput!]
}

input InventaireCreateWithoutDetentionInput {
  id: ID
  lib: String!
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
  articles: ArticleEmbeddedCreateManyInput
}

"""An edge in a connection."""
type InventaireEdge {
  """The item at the end of the edge."""
  node: Inventaire!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InventaireOrderByInput {
  id_ASC
  id_DESC
  lib_ASC
  lib_DESC
  dtever_ASC
  dtever_DESC
  exideb_ASC
  exideb_DESC
  dtecre_ASC
  dtecre_DESC
  cdevrf_ASC
  cdevrf_DESC
  obs_ASC
  obs_DESC
}

type InventairePreviousValues {
  id: ID!
  lib: String!
  dtever: DateTime
  exideb: String
  dtecre: DateTime
  cdevrf: String
  obs: String
}

input InventaireScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [InventaireScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [InventaireScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InventaireScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  dtever: DateTime

  """All values that are not equal to given value."""
  dtever_not: DateTime

  """All values that are contained in given list."""
  dtever_in: [DateTime!]

  """All values that are not contained in given list."""
  dtever_not_in: [DateTime!]

  """All values less than the given value."""
  dtever_lt: DateTime

  """All values less than or equal the given value."""
  dtever_lte: DateTime

  """All values greater than the given value."""
  dtever_gt: DateTime

  """All values greater than or equal the given value."""
  dtever_gte: DateTime
  exideb: String

  """All values that are not equal to given value."""
  exideb_not: String

  """All values that are contained in given list."""
  exideb_in: [String!]

  """All values that are not contained in given list."""
  exideb_not_in: [String!]

  """All values less than the given value."""
  exideb_lt: String

  """All values less than or equal the given value."""
  exideb_lte: String

  """All values greater than the given value."""
  exideb_gt: String

  """All values greater than or equal the given value."""
  exideb_gte: String

  """All values containing the given string."""
  exideb_contains: String

  """All values not containing the given string."""
  exideb_not_contains: String

  """All values starting with the given string."""
  exideb_starts_with: String

  """All values not starting with the given string."""
  exideb_not_starts_with: String

  """All values ending with the given string."""
  exideb_ends_with: String

  """All values not ending with the given string."""
  exideb_not_ends_with: String
  dtecre: DateTime

  """All values that are not equal to given value."""
  dtecre_not: DateTime

  """All values that are contained in given list."""
  dtecre_in: [DateTime!]

  """All values that are not contained in given list."""
  dtecre_not_in: [DateTime!]

  """All values less than the given value."""
  dtecre_lt: DateTime

  """All values less than or equal the given value."""
  dtecre_lte: DateTime

  """All values greater than the given value."""
  dtecre_gt: DateTime

  """All values greater than or equal the given value."""
  dtecre_gte: DateTime
  cdevrf: String

  """All values that are not equal to given value."""
  cdevrf_not: String

  """All values that are contained in given list."""
  cdevrf_in: [String!]

  """All values that are not contained in given list."""
  cdevrf_not_in: [String!]

  """All values less than the given value."""
  cdevrf_lt: String

  """All values less than or equal the given value."""
  cdevrf_lte: String

  """All values greater than the given value."""
  cdevrf_gt: String

  """All values greater than or equal the given value."""
  cdevrf_gte: String

  """All values containing the given string."""
  cdevrf_contains: String

  """All values not containing the given string."""
  cdevrf_not_contains: String

  """All values starting with the given string."""
  cdevrf_starts_with: String

  """All values not starting with the given string."""
  cdevrf_not_starts_with: String

  """All values ending with the given string."""
  cdevrf_ends_with: String

  """All values not ending with the given string."""
  cdevrf_not_ends_with: String
  obs: String

  """All values that are not equal to given value."""
  obs_not: String

  """All values that are contained in given list."""
  obs_in: [String!]

  """All values that are not contained in given list."""
  obs_not_in: [String!]

  """All values less than the given value."""
  obs_lt: String

  """All values less than or equal the given value."""
  obs_lte: String

  """All values greater than the given value."""
  obs_gt: String

  """All values greater than or equal the given value."""
  obs_gte: String

  """All values containing the given string."""
  obs_contains: String

  """All values not containing the given string."""
  obs_not_contains: String

  """All values starting with the given string."""
  obs_starts_with: String

  """All values not starting with the given string."""
  obs_not_starts_with: String

  """All values ending with the given string."""
  obs_ends_with: String

  """All values not ending with the given string."""
  obs_not_ends_with: String
}

type InventaireSubscriptionPayload {
  mutation: MutationType!
  node: Inventaire
  updatedFields: [String!]
  previousValues: InventairePreviousValues
}

input InventaireSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InventaireSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InventaireWhereInput
}

input InventaireUpdateInput {
  lib: String
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
  articles: ArticleEmbeddedUpdateManyInput
  detention: DetentionUpdateOneWithoutInventaireInput
}

input InventaireUpdateManyDataInput {
  lib: String
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
}

input InventaireUpdateManyMutationInput {
  lib: String
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
}

input InventaireUpdateManyWithoutDetentionInput {
  create: [InventaireCreateWithoutDetentionInput!]
  connect: [InventaireWhereUniqueInput!]
  set: [InventaireWhereUniqueInput!]
  disconnect: [InventaireWhereUniqueInput!]
  delete: [InventaireWhereUniqueInput!]
  update: [InventaireUpdateWithWhereUniqueWithoutDetentionInput!]
  updateMany: [InventaireUpdateManyWithWhereNestedInput!]
  deleteMany: [InventaireScalarWhereInput!]
  upsert: [InventaireUpsertWithWhereUniqueWithoutDetentionInput!]
}

input InventaireUpdateManyWithWhereNestedInput {
  where: InventaireScalarWhereInput!
  data: InventaireUpdateManyDataInput!
}

input InventaireUpdateWithoutDetentionDataInput {
  lib: String
  dtever: DateTime
  exideb: String
  cdevrf: String
  obs: String
  articles: ArticleEmbeddedUpdateManyInput
}

input InventaireUpdateWithWhereUniqueWithoutDetentionInput {
  where: InventaireWhereUniqueInput!
  data: InventaireUpdateWithoutDetentionDataInput!
}

input InventaireUpsertWithWhereUniqueWithoutDetentionInput {
  where: InventaireWhereUniqueInput!
  update: InventaireUpdateWithoutDetentionDataInput!
  create: InventaireCreateWithoutDetentionInput!
}

input InventaireWhereInput {
  """Logical AND on all given filters."""
  AND: [InventaireWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lib: String

  """All values that are not equal to given value."""
  lib_not: String

  """All values that are contained in given list."""
  lib_in: [String!]

  """All values that are not contained in given list."""
  lib_not_in: [String!]

  """All values less than the given value."""
  lib_lt: String

  """All values less than or equal the given value."""
  lib_lte: String

  """All values greater than the given value."""
  lib_gt: String

  """All values greater than or equal the given value."""
  lib_gte: String

  """All values containing the given string."""
  lib_contains: String

  """All values not containing the given string."""
  lib_not_contains: String

  """All values starting with the given string."""
  lib_starts_with: String

  """All values not starting with the given string."""
  lib_not_starts_with: String

  """All values ending with the given string."""
  lib_ends_with: String

  """All values not ending with the given string."""
  lib_not_ends_with: String
  dtever: DateTime

  """All values that are not equal to given value."""
  dtever_not: DateTime

  """All values that are contained in given list."""
  dtever_in: [DateTime!]

  """All values that are not contained in given list."""
  dtever_not_in: [DateTime!]

  """All values less than the given value."""
  dtever_lt: DateTime

  """All values less than or equal the given value."""
  dtever_lte: DateTime

  """All values greater than the given value."""
  dtever_gt: DateTime

  """All values greater than or equal the given value."""
  dtever_gte: DateTime
  exideb: String

  """All values that are not equal to given value."""
  exideb_not: String

  """All values that are contained in given list."""
  exideb_in: [String!]

  """All values that are not contained in given list."""
  exideb_not_in: [String!]

  """All values less than the given value."""
  exideb_lt: String

  """All values less than or equal the given value."""
  exideb_lte: String

  """All values greater than the given value."""
  exideb_gt: String

  """All values greater than or equal the given value."""
  exideb_gte: String

  """All values containing the given string."""
  exideb_contains: String

  """All values not containing the given string."""
  exideb_not_contains: String

  """All values starting with the given string."""
  exideb_starts_with: String

  """All values not starting with the given string."""
  exideb_not_starts_with: String

  """All values ending with the given string."""
  exideb_ends_with: String

  """All values not ending with the given string."""
  exideb_not_ends_with: String
  dtecre: DateTime

  """All values that are not equal to given value."""
  dtecre_not: DateTime

  """All values that are contained in given list."""
  dtecre_in: [DateTime!]

  """All values that are not contained in given list."""
  dtecre_not_in: [DateTime!]

  """All values less than the given value."""
  dtecre_lt: DateTime

  """All values less than or equal the given value."""
  dtecre_lte: DateTime

  """All values greater than the given value."""
  dtecre_gt: DateTime

  """All values greater than or equal the given value."""
  dtecre_gte: DateTime
  cdevrf: String

  """All values that are not equal to given value."""
  cdevrf_not: String

  """All values that are contained in given list."""
  cdevrf_in: [String!]

  """All values that are not contained in given list."""
  cdevrf_not_in: [String!]

  """All values less than the given value."""
  cdevrf_lt: String

  """All values less than or equal the given value."""
  cdevrf_lte: String

  """All values greater than the given value."""
  cdevrf_gt: String

  """All values greater than or equal the given value."""
  cdevrf_gte: String

  """All values containing the given string."""
  cdevrf_contains: String

  """All values not containing the given string."""
  cdevrf_not_contains: String

  """All values starting with the given string."""
  cdevrf_starts_with: String

  """All values not starting with the given string."""
  cdevrf_not_starts_with: String

  """All values ending with the given string."""
  cdevrf_ends_with: String

  """All values not ending with the given string."""
  cdevrf_not_ends_with: String
  obs: String

  """All values that are not equal to given value."""
  obs_not: String

  """All values that are contained in given list."""
  obs_in: [String!]

  """All values that are not contained in given list."""
  obs_not_in: [String!]

  """All values less than the given value."""
  obs_lt: String

  """All values less than or equal the given value."""
  obs_lte: String

  """All values greater than the given value."""
  obs_gt: String

  """All values greater than or equal the given value."""
  obs_gte: String

  """All values containing the given string."""
  obs_contains: String

  """All values not containing the given string."""
  obs_not_contains: String

  """All values starting with the given string."""
  obs_starts_with: String

  """All values not starting with the given string."""
  obs_not_starts_with: String

  """All values ending with the given string."""
  obs_ends_with: String

  """All values not ending with the given string."""
  obs_not_ends_with: String
  articles_some: ArticleEmbeddedWhereInput
  articles_every: ArticleEmbeddedRestrictedWhereInput
  articles_none: ArticleEmbeddedRestrictedWhereInput
  detention: DetentionWhereInput
}

input InventaireWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createArticle(data: ArticleCreateInput!): Article!
  createUnite(data: UniteCreateInput!): Unite!
  createInventaire(data: InventaireCreateInput!): Inventaire!
  createDetention(data: DetentionCreateInput!): Detention!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateUnite(data: UniteUpdateInput!, where: UniteWhereUniqueInput!): Unite
  updateInventaire(data: InventaireUpdateInput!, where: InventaireWhereUniqueInput!): Inventaire
  updateDetention(data: DetentionUpdateInput!, where: DetentionWhereUniqueInput!): Detention
  deleteUser(where: UserWhereUniqueInput!): User
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteUnite(where: UniteWhereUniqueInput!): Unite
  deleteInventaire(where: InventaireWhereUniqueInput!): Inventaire
  deleteDetention(where: DetentionWhereUniqueInput!): Detention
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  upsertUnite(where: UniteWhereUniqueInput!, create: UniteCreateInput!, update: UniteUpdateInput!): Unite!
  upsertInventaire(where: InventaireWhereUniqueInput!, create: InventaireCreateInput!, update: InventaireUpdateInput!): Inventaire!
  upsertDetention(where: DetentionWhereUniqueInput!, create: DetentionCreateInput!, update: DetentionUpdateInput!): Detention!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyArticles(data: ArticleUpdateManyMutationInput!, where: ArticleWhereInput): BatchPayload!
  updateManyUnites(data: UniteUpdateManyMutationInput!, where: UniteWhereInput): BatchPayload!
  updateManyInventaires(data: InventaireUpdateManyMutationInput!, where: InventaireWhereInput): BatchPayload!
  updateManyDetentions(data: DetentionUpdateManyMutationInput!, where: DetentionWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
  deleteManyUnites(where: UniteWhereInput): BatchPayload!
  deleteManyInventaires(where: InventaireWhereInput): BatchPayload!
  deleteManyDetentions(where: DetentionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  unites(where: UniteWhereInput, orderBy: UniteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Unite]!
  inventaires(where: InventaireWhereInput, orderBy: InventaireOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inventaire]!
  detentions(where: DetentionWhereInput, orderBy: DetentionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Detention]!
  user(where: UserWhereUniqueInput!): User
  article(where: ArticleWhereUniqueInput!): Article
  unite(where: UniteWhereUniqueInput!): Unite
  inventaire(where: InventaireWhereUniqueInput!): Inventaire
  detention(where: DetentionWhereUniqueInput!): Detention
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  unitesConnection(where: UniteWhereInput, orderBy: UniteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UniteConnection!
  inventairesConnection(where: InventaireWhereInput, orderBy: InventaireOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InventaireConnection!
  detentionsConnection(where: DetentionWhereInput, orderBy: DetentionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DetentionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  unite(where: UniteSubscriptionWhereInput): UniteSubscriptionPayload
  inventaire(where: InventaireSubscriptionWhereInput): InventaireSubscriptionPayload
  detention(where: DetentionSubscriptionWhereInput): DetentionSubscriptionPayload
}

type Unite implements Node {
  id: ID!
  cdeunt: String!
  dtepjc: DateTime
  libunt: String!
  typuni: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  detentions(where: DetentionWhereInput, orderBy: DetentionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Detention!]
}

"""A connection to a list of items."""
type UniteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UniteEdge]!
  aggregate: AggregateUnite!
}

input UniteCreateInput {
  id: ID
  cdeunt: String!
  dtepjc: DateTime
  libunt: String!
  typuni: String
  users: UserCreateManyWithoutUnitesInput
  detentions: DetentionCreateManyWithoutUniteInput
}

input UniteCreateManyWithoutUsersInput {
  create: [UniteCreateWithoutUsersInput!]
  connect: [UniteWhereUniqueInput!]
}

input UniteCreateOneWithoutDetentionsInput {
  create: UniteCreateWithoutDetentionsInput
  connect: UniteWhereUniqueInput
}

input UniteCreateWithoutDetentionsInput {
  id: ID
  cdeunt: String!
  dtepjc: DateTime
  libunt: String!
  typuni: String
  users: UserCreateManyWithoutUnitesInput
}

input UniteCreateWithoutUsersInput {
  id: ID
  cdeunt: String!
  dtepjc: DateTime
  libunt: String!
  typuni: String
  detentions: DetentionCreateManyWithoutUniteInput
}

"""An edge in a connection."""
type UniteEdge {
  """The item at the end of the edge."""
  node: Unite!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UniteOrderByInput {
  id_ASC
  id_DESC
  cdeunt_ASC
  cdeunt_DESC
  dtepjc_ASC
  dtepjc_DESC
  libunt_ASC
  libunt_DESC
  typuni_ASC
  typuni_DESC
}

type UnitePreviousValues {
  id: ID!
  cdeunt: String!
  dtepjc: DateTime
  libunt: String!
  typuni: String
}

input UniteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UniteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UniteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UniteScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cdeunt: String

  """All values that are not equal to given value."""
  cdeunt_not: String

  """All values that are contained in given list."""
  cdeunt_in: [String!]

  """All values that are not contained in given list."""
  cdeunt_not_in: [String!]

  """All values less than the given value."""
  cdeunt_lt: String

  """All values less than or equal the given value."""
  cdeunt_lte: String

  """All values greater than the given value."""
  cdeunt_gt: String

  """All values greater than or equal the given value."""
  cdeunt_gte: String

  """All values containing the given string."""
  cdeunt_contains: String

  """All values not containing the given string."""
  cdeunt_not_contains: String

  """All values starting with the given string."""
  cdeunt_starts_with: String

  """All values not starting with the given string."""
  cdeunt_not_starts_with: String

  """All values ending with the given string."""
  cdeunt_ends_with: String

  """All values not ending with the given string."""
  cdeunt_not_ends_with: String
  dtepjc: DateTime

  """All values that are not equal to given value."""
  dtepjc_not: DateTime

  """All values that are contained in given list."""
  dtepjc_in: [DateTime!]

  """All values that are not contained in given list."""
  dtepjc_not_in: [DateTime!]

  """All values less than the given value."""
  dtepjc_lt: DateTime

  """All values less than or equal the given value."""
  dtepjc_lte: DateTime

  """All values greater than the given value."""
  dtepjc_gt: DateTime

  """All values greater than or equal the given value."""
  dtepjc_gte: DateTime
  libunt: String

  """All values that are not equal to given value."""
  libunt_not: String

  """All values that are contained in given list."""
  libunt_in: [String!]

  """All values that are not contained in given list."""
  libunt_not_in: [String!]

  """All values less than the given value."""
  libunt_lt: String

  """All values less than or equal the given value."""
  libunt_lte: String

  """All values greater than the given value."""
  libunt_gt: String

  """All values greater than or equal the given value."""
  libunt_gte: String

  """All values containing the given string."""
  libunt_contains: String

  """All values not containing the given string."""
  libunt_not_contains: String

  """All values starting with the given string."""
  libunt_starts_with: String

  """All values not starting with the given string."""
  libunt_not_starts_with: String

  """All values ending with the given string."""
  libunt_ends_with: String

  """All values not ending with the given string."""
  libunt_not_ends_with: String
  typuni: String

  """All values that are not equal to given value."""
  typuni_not: String

  """All values that are contained in given list."""
  typuni_in: [String!]

  """All values that are not contained in given list."""
  typuni_not_in: [String!]

  """All values less than the given value."""
  typuni_lt: String

  """All values less than or equal the given value."""
  typuni_lte: String

  """All values greater than the given value."""
  typuni_gt: String

  """All values greater than or equal the given value."""
  typuni_gte: String

  """All values containing the given string."""
  typuni_contains: String

  """All values not containing the given string."""
  typuni_not_contains: String

  """All values starting with the given string."""
  typuni_starts_with: String

  """All values not starting with the given string."""
  typuni_not_starts_with: String

  """All values ending with the given string."""
  typuni_ends_with: String

  """All values not ending with the given string."""
  typuni_not_ends_with: String
}

type UniteSubscriptionPayload {
  mutation: MutationType!
  node: Unite
  updatedFields: [String!]
  previousValues: UnitePreviousValues
}

input UniteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UniteSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UniteWhereInput
}

input UniteUpdateInput {
  cdeunt: String
  dtepjc: DateTime
  libunt: String
  typuni: String
  users: UserUpdateManyWithoutUnitesInput
  detentions: DetentionUpdateManyWithoutUniteInput
}

input UniteUpdateManyDataInput {
  cdeunt: String
  dtepjc: DateTime
  libunt: String
  typuni: String
}

input UniteUpdateManyMutationInput {
  cdeunt: String
  dtepjc: DateTime
  libunt: String
  typuni: String
}

input UniteUpdateManyWithoutUsersInput {
  create: [UniteCreateWithoutUsersInput!]
  connect: [UniteWhereUniqueInput!]
  set: [UniteWhereUniqueInput!]
  disconnect: [UniteWhereUniqueInput!]
  delete: [UniteWhereUniqueInput!]
  update: [UniteUpdateWithWhereUniqueWithoutUsersInput!]
  updateMany: [UniteUpdateManyWithWhereNestedInput!]
  deleteMany: [UniteScalarWhereInput!]
  upsert: [UniteUpsertWithWhereUniqueWithoutUsersInput!]
}

input UniteUpdateManyWithWhereNestedInput {
  where: UniteScalarWhereInput!
  data: UniteUpdateManyDataInput!
}

input UniteUpdateOneRequiredWithoutDetentionsInput {
  create: UniteCreateWithoutDetentionsInput
  connect: UniteWhereUniqueInput
  update: UniteUpdateWithoutDetentionsDataInput
  upsert: UniteUpsertWithoutDetentionsInput
}

input UniteUpdateWithoutDetentionsDataInput {
  cdeunt: String
  dtepjc: DateTime
  libunt: String
  typuni: String
  users: UserUpdateManyWithoutUnitesInput
}

input UniteUpdateWithoutUsersDataInput {
  cdeunt: String
  dtepjc: DateTime
  libunt: String
  typuni: String
  detentions: DetentionUpdateManyWithoutUniteInput
}

input UniteUpdateWithWhereUniqueWithoutUsersInput {
  where: UniteWhereUniqueInput!
  data: UniteUpdateWithoutUsersDataInput!
}

input UniteUpsertWithoutDetentionsInput {
  update: UniteUpdateWithoutDetentionsDataInput!
  create: UniteCreateWithoutDetentionsInput!
}

input UniteUpsertWithWhereUniqueWithoutUsersInput {
  where: UniteWhereUniqueInput!
  update: UniteUpdateWithoutUsersDataInput!
  create: UniteCreateWithoutUsersInput!
}

input UniteWhereInput {
  """Logical AND on all given filters."""
  AND: [UniteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cdeunt: String

  """All values that are not equal to given value."""
  cdeunt_not: String

  """All values that are contained in given list."""
  cdeunt_in: [String!]

  """All values that are not contained in given list."""
  cdeunt_not_in: [String!]

  """All values less than the given value."""
  cdeunt_lt: String

  """All values less than or equal the given value."""
  cdeunt_lte: String

  """All values greater than the given value."""
  cdeunt_gt: String

  """All values greater than or equal the given value."""
  cdeunt_gte: String

  """All values containing the given string."""
  cdeunt_contains: String

  """All values not containing the given string."""
  cdeunt_not_contains: String

  """All values starting with the given string."""
  cdeunt_starts_with: String

  """All values not starting with the given string."""
  cdeunt_not_starts_with: String

  """All values ending with the given string."""
  cdeunt_ends_with: String

  """All values not ending with the given string."""
  cdeunt_not_ends_with: String
  dtepjc: DateTime

  """All values that are not equal to given value."""
  dtepjc_not: DateTime

  """All values that are contained in given list."""
  dtepjc_in: [DateTime!]

  """All values that are not contained in given list."""
  dtepjc_not_in: [DateTime!]

  """All values less than the given value."""
  dtepjc_lt: DateTime

  """All values less than or equal the given value."""
  dtepjc_lte: DateTime

  """All values greater than the given value."""
  dtepjc_gt: DateTime

  """All values greater than or equal the given value."""
  dtepjc_gte: DateTime
  libunt: String

  """All values that are not equal to given value."""
  libunt_not: String

  """All values that are contained in given list."""
  libunt_in: [String!]

  """All values that are not contained in given list."""
  libunt_not_in: [String!]

  """All values less than the given value."""
  libunt_lt: String

  """All values less than or equal the given value."""
  libunt_lte: String

  """All values greater than the given value."""
  libunt_gt: String

  """All values greater than or equal the given value."""
  libunt_gte: String

  """All values containing the given string."""
  libunt_contains: String

  """All values not containing the given string."""
  libunt_not_contains: String

  """All values starting with the given string."""
  libunt_starts_with: String

  """All values not starting with the given string."""
  libunt_not_starts_with: String

  """All values ending with the given string."""
  libunt_ends_with: String

  """All values not ending with the given string."""
  libunt_not_ends_with: String
  typuni: String

  """All values that are not equal to given value."""
  typuni_not: String

  """All values that are contained in given list."""
  typuni_in: [String!]

  """All values that are not contained in given list."""
  typuni_not_in: [String!]

  """All values less than the given value."""
  typuni_lt: String

  """All values less than or equal the given value."""
  typuni_lte: String

  """All values greater than the given value."""
  typuni_gt: String

  """All values greater than or equal the given value."""
  typuni_gte: String

  """All values containing the given string."""
  typuni_contains: String

  """All values not containing the given string."""
  typuni_not_contains: String

  """All values starting with the given string."""
  typuni_starts_with: String

  """All values not starting with the given string."""
  typuni_not_starts_with: String

  """All values ending with the given string."""
  typuni_ends_with: String

  """All values not ending with the given string."""
  typuni_not_ends_with: String
  users_some: UserWhereInput
  detentions_some: DetentionWhereInput
}

input UniteWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  dtecre: DateTime
  identifiant: String!
  password: String!
  nom: String
  prenom: String
  role: UserRole
  unites(where: UniteWhereInput, orderBy: UniteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Unite!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  identifiant: String!
  password: String!
  nom: String
  prenom: String
  role: UserRole
  unites: UniteCreateManyWithoutUsersInput
}

input UserCreateManyWithoutUnitesInput {
  create: [UserCreateWithoutUnitesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutUnitesInput {
  id: ID
  identifiant: String!
  password: String!
  nom: String
  prenom: String
  role: UserRole
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  dtecre_ASC
  dtecre_DESC
  identifiant_ASC
  identifiant_DESC
  password_ASC
  password_DESC
  nom_ASC
  nom_DESC
  prenom_ASC
  prenom_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  dtecre: DateTime
  identifiant: String!
  password: String!
  nom: String
  prenom: String
  role: UserRole
}

enum UserRole {
  UTI
  DET
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  dtecre: DateTime

  """All values that are not equal to given value."""
  dtecre_not: DateTime

  """All values that are contained in given list."""
  dtecre_in: [DateTime!]

  """All values that are not contained in given list."""
  dtecre_not_in: [DateTime!]

  """All values less than the given value."""
  dtecre_lt: DateTime

  """All values less than or equal the given value."""
  dtecre_lte: DateTime

  """All values greater than the given value."""
  dtecre_gt: DateTime

  """All values greater than or equal the given value."""
  dtecre_gte: DateTime
  identifiant: String

  """All values that are not equal to given value."""
  identifiant_not: String

  """All values that are contained in given list."""
  identifiant_in: [String!]

  """All values that are not contained in given list."""
  identifiant_not_in: [String!]

  """All values less than the given value."""
  identifiant_lt: String

  """All values less than or equal the given value."""
  identifiant_lte: String

  """All values greater than the given value."""
  identifiant_gt: String

  """All values greater than or equal the given value."""
  identifiant_gte: String

  """All values containing the given string."""
  identifiant_contains: String

  """All values not containing the given string."""
  identifiant_not_contains: String

  """All values starting with the given string."""
  identifiant_starts_with: String

  """All values not starting with the given string."""
  identifiant_not_starts_with: String

  """All values ending with the given string."""
  identifiant_ends_with: String

  """All values not ending with the given string."""
  identifiant_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  nom: String

  """All values that are not equal to given value."""
  nom_not: String

  """All values that are contained in given list."""
  nom_in: [String!]

  """All values that are not contained in given list."""
  nom_not_in: [String!]

  """All values less than the given value."""
  nom_lt: String

  """All values less than or equal the given value."""
  nom_lte: String

  """All values greater than the given value."""
  nom_gt: String

  """All values greater than or equal the given value."""
  nom_gte: String

  """All values containing the given string."""
  nom_contains: String

  """All values not containing the given string."""
  nom_not_contains: String

  """All values starting with the given string."""
  nom_starts_with: String

  """All values not starting with the given string."""
  nom_not_starts_with: String

  """All values ending with the given string."""
  nom_ends_with: String

  """All values not ending with the given string."""
  nom_not_ends_with: String
  prenom: String

  """All values that are not equal to given value."""
  prenom_not: String

  """All values that are contained in given list."""
  prenom_in: [String!]

  """All values that are not contained in given list."""
  prenom_not_in: [String!]

  """All values less than the given value."""
  prenom_lt: String

  """All values less than or equal the given value."""
  prenom_lte: String

  """All values greater than the given value."""
  prenom_gt: String

  """All values greater than or equal the given value."""
  prenom_gte: String

  """All values containing the given string."""
  prenom_contains: String

  """All values not containing the given string."""
  prenom_not_contains: String

  """All values starting with the given string."""
  prenom_starts_with: String

  """All values not starting with the given string."""
  prenom_not_starts_with: String

  """All values ending with the given string."""
  prenom_ends_with: String

  """All values not ending with the given string."""
  prenom_not_ends_with: String
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  identifiant: String
  password: String
  nom: String
  prenom: String
  role: UserRole
  unites: UniteUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  identifiant: String
  password: String
  nom: String
  prenom: String
  role: UserRole
}

input UserUpdateManyMutationInput {
  identifiant: String
  password: String
  nom: String
  prenom: String
  role: UserRole
}

input UserUpdateManyWithoutUnitesInput {
  create: [UserCreateWithoutUnitesInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutUnitesInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutUnitesInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithoutUnitesDataInput {
  identifiant: String
  password: String
  nom: String
  prenom: String
  role: UserRole
}

input UserUpdateWithWhereUniqueWithoutUnitesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutUnitesDataInput!
}

input UserUpsertWithWhereUniqueWithoutUnitesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutUnitesDataInput!
  create: UserCreateWithoutUnitesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  dtecre: DateTime

  """All values that are not equal to given value."""
  dtecre_not: DateTime

  """All values that are contained in given list."""
  dtecre_in: [DateTime!]

  """All values that are not contained in given list."""
  dtecre_not_in: [DateTime!]

  """All values less than the given value."""
  dtecre_lt: DateTime

  """All values less than or equal the given value."""
  dtecre_lte: DateTime

  """All values greater than the given value."""
  dtecre_gt: DateTime

  """All values greater than or equal the given value."""
  dtecre_gte: DateTime
  identifiant: String

  """All values that are not equal to given value."""
  identifiant_not: String

  """All values that are contained in given list."""
  identifiant_in: [String!]

  """All values that are not contained in given list."""
  identifiant_not_in: [String!]

  """All values less than the given value."""
  identifiant_lt: String

  """All values less than or equal the given value."""
  identifiant_lte: String

  """All values greater than the given value."""
  identifiant_gt: String

  """All values greater than or equal the given value."""
  identifiant_gte: String

  """All values containing the given string."""
  identifiant_contains: String

  """All values not containing the given string."""
  identifiant_not_contains: String

  """All values starting with the given string."""
  identifiant_starts_with: String

  """All values not starting with the given string."""
  identifiant_not_starts_with: String

  """All values ending with the given string."""
  identifiant_ends_with: String

  """All values not ending with the given string."""
  identifiant_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  nom: String

  """All values that are not equal to given value."""
  nom_not: String

  """All values that are contained in given list."""
  nom_in: [String!]

  """All values that are not contained in given list."""
  nom_not_in: [String!]

  """All values less than the given value."""
  nom_lt: String

  """All values less than or equal the given value."""
  nom_lte: String

  """All values greater than the given value."""
  nom_gt: String

  """All values greater than or equal the given value."""
  nom_gte: String

  """All values containing the given string."""
  nom_contains: String

  """All values not containing the given string."""
  nom_not_contains: String

  """All values starting with the given string."""
  nom_starts_with: String

  """All values not starting with the given string."""
  nom_not_starts_with: String

  """All values ending with the given string."""
  nom_ends_with: String

  """All values not ending with the given string."""
  nom_not_ends_with: String
  prenom: String

  """All values that are not equal to given value."""
  prenom_not: String

  """All values that are contained in given list."""
  prenom_in: [String!]

  """All values that are not contained in given list."""
  prenom_not_in: [String!]

  """All values less than the given value."""
  prenom_lt: String

  """All values less than or equal the given value."""
  prenom_lte: String

  """All values greater than the given value."""
  prenom_gt: String

  """All values greater than or equal the given value."""
  prenom_gte: String

  """All values containing the given string."""
  prenom_contains: String

  """All values not containing the given string."""
  prenom_not_contains: String

  """All values starting with the given string."""
  prenom_starts_with: String

  """All values not starting with the given string."""
  prenom_not_starts_with: String

  """All values ending with the given string."""
  prenom_ends_with: String

  """All values not ending with the given string."""
  prenom_not_ends_with: String
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
  unites_some: UniteWhereInput
}

input UserWhereUniqueInput {
  id: ID
  identifiant: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ArticleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'numref_ASC' |
  'numref_DESC' |
  'nno_ASC' |
  'nno_DESC' |
  'lib_ASC' |
  'lib_DESC' |
  'untcpt_ASC' |
  'untcpt_DESC' |
  'untprx_ASC' |
  'untprx_DESC' |
  'cdeapr_ASC' |
  'cdeapr_DESC' |
  'srvpou_ASC' |
  'srvpou_DESC' |
  'typart_ASC' |
  'typart_DESC' |
  'numser_ASC' |
  'numser_DESC' |
  'pictureUrl_ASC' |
  'pictureUrl_DESC'

export type DetentionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lib_ASC' |
  'lib_DESC'

export type InventaireOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lib_ASC' |
  'lib_DESC' |
  'dtever_ASC' |
  'dtever_DESC' |
  'exideb_ASC' |
  'exideb_DESC' |
  'dtecre_ASC' |
  'dtecre_DESC' |
  'cdevrf_ASC' |
  'cdevrf_DESC' |
  'obs_ASC' |
  'obs_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UniteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'cdeunt_ASC' |
  'cdeunt_DESC' |
  'dtepjc_ASC' |
  'dtepjc_DESC' |
  'libunt_ASC' |
  'libunt_DESC' |
  'typuni_ASC' |
  'typuni_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dtecre_ASC' |
  'dtecre_DESC' |
  'identifiant_ASC' |
  'identifiant_DESC' |
  'password_ASC' |
  'password_DESC' |
  'nom_ASC' |
  'nom_DESC' |
  'prenom_ASC' |
  'prenom_DESC' |
  'role_ASC' |
  'role_DESC'

export type UserRole =   'UTI' |
  'DET'

export interface ArticleCreateInput {
  id?: ID_Input | null
  numref: String
  nno: String
  lib: String
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
  detention?: DetentionCreateOneInput | null
}

export interface ArticleEmbeddedCreateInput {
  article_id: ID_Output
  nno: String
  numref: String
  lib: String
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
  detention: DetentionCreateOneInput
}

export interface ArticleEmbeddedCreateManyInput {
  create?: ArticleEmbeddedCreateInput[] | ArticleEmbeddedCreateInput | null
}

export interface ArticleEmbeddedRestrictedWhereInput {
  AND?: ArticleEmbeddedRestrictedWhereInput[] | ArticleEmbeddedRestrictedWhereInput | null
  article_id?: ID_Input | null
  article_id_not?: ID_Input | null
  article_id_in?: ID_Output[] | ID_Output | null
  article_id_not_in?: ID_Output[] | ID_Output | null
  article_id_lt?: ID_Input | null
  article_id_lte?: ID_Input | null
  article_id_gt?: ID_Input | null
  article_id_gte?: ID_Input | null
  article_id_contains?: ID_Input | null
  article_id_not_contains?: ID_Input | null
  article_id_starts_with?: ID_Input | null
  article_id_not_starts_with?: ID_Input | null
  article_id_ends_with?: ID_Input | null
  article_id_not_ends_with?: ID_Input | null
  nno?: String | null
  nno_not?: String | null
  nno_in?: String[] | String | null
  nno_not_in?: String[] | String | null
  nno_lt?: String | null
  nno_lte?: String | null
  nno_gt?: String | null
  nno_gte?: String | null
  nno_contains?: String | null
  nno_not_contains?: String | null
  nno_starts_with?: String | null
  nno_not_starts_with?: String | null
  nno_ends_with?: String | null
  nno_not_ends_with?: String | null
  numref?: String | null
  numref_not?: String | null
  numref_in?: String[] | String | null
  numref_not_in?: String[] | String | null
  numref_lt?: String | null
  numref_lte?: String | null
  numref_gt?: String | null
  numref_gte?: String | null
  numref_contains?: String | null
  numref_not_contains?: String | null
  numref_starts_with?: String | null
  numref_not_starts_with?: String | null
  numref_ends_with?: String | null
  numref_not_ends_with?: String | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  untcpt?: Int | null
  untcpt_not?: Int | null
  untcpt_in?: Int[] | Int | null
  untcpt_not_in?: Int[] | Int | null
  untcpt_lt?: Int | null
  untcpt_lte?: Int | null
  untcpt_gt?: Int | null
  untcpt_gte?: Int | null
  untprx?: Float | null
  untprx_not?: Float | null
  untprx_in?: Float[] | Float | null
  untprx_not_in?: Float[] | Float | null
  untprx_lt?: Float | null
  untprx_lte?: Float | null
  untprx_gt?: Float | null
  untprx_gte?: Float | null
  cdeapr?: String | null
  cdeapr_not?: String | null
  cdeapr_in?: String[] | String | null
  cdeapr_not_in?: String[] | String | null
  cdeapr_lt?: String | null
  cdeapr_lte?: String | null
  cdeapr_gt?: String | null
  cdeapr_gte?: String | null
  cdeapr_contains?: String | null
  cdeapr_not_contains?: String | null
  cdeapr_starts_with?: String | null
  cdeapr_not_starts_with?: String | null
  cdeapr_ends_with?: String | null
  cdeapr_not_ends_with?: String | null
  srvpou?: String | null
  srvpou_not?: String | null
  srvpou_in?: String[] | String | null
  srvpou_not_in?: String[] | String | null
  srvpou_lt?: String | null
  srvpou_lte?: String | null
  srvpou_gt?: String | null
  srvpou_gte?: String | null
  srvpou_contains?: String | null
  srvpou_not_contains?: String | null
  srvpou_starts_with?: String | null
  srvpou_not_starts_with?: String | null
  srvpou_ends_with?: String | null
  srvpou_not_ends_with?: String | null
  typart?: String | null
  typart_not?: String | null
  typart_in?: String[] | String | null
  typart_not_in?: String[] | String | null
  typart_lt?: String | null
  typart_lte?: String | null
  typart_gt?: String | null
  typart_gte?: String | null
  typart_contains?: String | null
  typart_not_contains?: String | null
  typart_starts_with?: String | null
  typart_not_starts_with?: String | null
  typart_ends_with?: String | null
  typart_not_ends_with?: String | null
  numser?: String | null
  numser_not?: String | null
  numser_in?: String[] | String | null
  numser_not_in?: String[] | String | null
  numser_lt?: String | null
  numser_lte?: String | null
  numser_gt?: String | null
  numser_gte?: String | null
  numser_contains?: String | null
  numser_not_contains?: String | null
  numser_starts_with?: String | null
  numser_not_starts_with?: String | null
  numser_ends_with?: String | null
  numser_not_ends_with?: String | null
  pictureUrl?: String | null
  pictureUrl_not?: String | null
  pictureUrl_in?: String[] | String | null
  pictureUrl_not_in?: String[] | String | null
  pictureUrl_lt?: String | null
  pictureUrl_lte?: String | null
  pictureUrl_gt?: String | null
  pictureUrl_gte?: String | null
  pictureUrl_contains?: String | null
  pictureUrl_not_contains?: String | null
  pictureUrl_starts_with?: String | null
  pictureUrl_not_starts_with?: String | null
  pictureUrl_ends_with?: String | null
  pictureUrl_not_ends_with?: String | null
}

export interface ArticleEmbeddedScalarWhereInput {
  AND?: ArticleEmbeddedScalarWhereInput[] | ArticleEmbeddedScalarWhereInput | null
  OR?: ArticleEmbeddedScalarWhereInput[] | ArticleEmbeddedScalarWhereInput | null
  NOT?: ArticleEmbeddedScalarWhereInput[] | ArticleEmbeddedScalarWhereInput | null
  article_id?: ID_Input | null
  article_id_not?: ID_Input | null
  article_id_in?: ID_Output[] | ID_Output | null
  article_id_not_in?: ID_Output[] | ID_Output | null
  article_id_lt?: ID_Input | null
  article_id_lte?: ID_Input | null
  article_id_gt?: ID_Input | null
  article_id_gte?: ID_Input | null
  article_id_contains?: ID_Input | null
  article_id_not_contains?: ID_Input | null
  article_id_starts_with?: ID_Input | null
  article_id_not_starts_with?: ID_Input | null
  article_id_ends_with?: ID_Input | null
  article_id_not_ends_with?: ID_Input | null
  nno?: String | null
  nno_not?: String | null
  nno_in?: String[] | String | null
  nno_not_in?: String[] | String | null
  nno_lt?: String | null
  nno_lte?: String | null
  nno_gt?: String | null
  nno_gte?: String | null
  nno_contains?: String | null
  nno_not_contains?: String | null
  nno_starts_with?: String | null
  nno_not_starts_with?: String | null
  nno_ends_with?: String | null
  nno_not_ends_with?: String | null
  numref?: String | null
  numref_not?: String | null
  numref_in?: String[] | String | null
  numref_not_in?: String[] | String | null
  numref_lt?: String | null
  numref_lte?: String | null
  numref_gt?: String | null
  numref_gte?: String | null
  numref_contains?: String | null
  numref_not_contains?: String | null
  numref_starts_with?: String | null
  numref_not_starts_with?: String | null
  numref_ends_with?: String | null
  numref_not_ends_with?: String | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  untcpt?: Int | null
  untcpt_not?: Int | null
  untcpt_in?: Int[] | Int | null
  untcpt_not_in?: Int[] | Int | null
  untcpt_lt?: Int | null
  untcpt_lte?: Int | null
  untcpt_gt?: Int | null
  untcpt_gte?: Int | null
  untprx?: Float | null
  untprx_not?: Float | null
  untprx_in?: Float[] | Float | null
  untprx_not_in?: Float[] | Float | null
  untprx_lt?: Float | null
  untprx_lte?: Float | null
  untprx_gt?: Float | null
  untprx_gte?: Float | null
  cdeapr?: String | null
  cdeapr_not?: String | null
  cdeapr_in?: String[] | String | null
  cdeapr_not_in?: String[] | String | null
  cdeapr_lt?: String | null
  cdeapr_lte?: String | null
  cdeapr_gt?: String | null
  cdeapr_gte?: String | null
  cdeapr_contains?: String | null
  cdeapr_not_contains?: String | null
  cdeapr_starts_with?: String | null
  cdeapr_not_starts_with?: String | null
  cdeapr_ends_with?: String | null
  cdeapr_not_ends_with?: String | null
  srvpou?: String | null
  srvpou_not?: String | null
  srvpou_in?: String[] | String | null
  srvpou_not_in?: String[] | String | null
  srvpou_lt?: String | null
  srvpou_lte?: String | null
  srvpou_gt?: String | null
  srvpou_gte?: String | null
  srvpou_contains?: String | null
  srvpou_not_contains?: String | null
  srvpou_starts_with?: String | null
  srvpou_not_starts_with?: String | null
  srvpou_ends_with?: String | null
  srvpou_not_ends_with?: String | null
  typart?: String | null
  typart_not?: String | null
  typart_in?: String[] | String | null
  typart_not_in?: String[] | String | null
  typart_lt?: String | null
  typart_lte?: String | null
  typart_gt?: String | null
  typart_gte?: String | null
  typart_contains?: String | null
  typart_not_contains?: String | null
  typart_starts_with?: String | null
  typart_not_starts_with?: String | null
  typart_ends_with?: String | null
  typart_not_ends_with?: String | null
  numser?: String | null
  numser_not?: String | null
  numser_in?: String[] | String | null
  numser_not_in?: String[] | String | null
  numser_lt?: String | null
  numser_lte?: String | null
  numser_gt?: String | null
  numser_gte?: String | null
  numser_contains?: String | null
  numser_not_contains?: String | null
  numser_starts_with?: String | null
  numser_not_starts_with?: String | null
  numser_ends_with?: String | null
  numser_not_ends_with?: String | null
  pictureUrl?: String | null
  pictureUrl_not?: String | null
  pictureUrl_in?: String[] | String | null
  pictureUrl_not_in?: String[] | String | null
  pictureUrl_lt?: String | null
  pictureUrl_lte?: String | null
  pictureUrl_gt?: String | null
  pictureUrl_gte?: String | null
  pictureUrl_contains?: String | null
  pictureUrl_not_contains?: String | null
  pictureUrl_starts_with?: String | null
  pictureUrl_not_starts_with?: String | null
  pictureUrl_ends_with?: String | null
  pictureUrl_not_ends_with?: String | null
}

export interface ArticleEmbeddedUpdateManyDataInput {
  article_id?: ID_Input | null
  nno?: String | null
  numref?: String | null
  lib?: String | null
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
}

export interface ArticleEmbeddedUpdateManyInput {
  create?: ArticleEmbeddedCreateInput[] | ArticleEmbeddedCreateInput | null
  updateMany?: ArticleEmbeddedUpdateManyWithWhereNestedInput[] | ArticleEmbeddedUpdateManyWithWhereNestedInput | null
  deleteMany?: ArticleEmbeddedScalarWhereInput[] | ArticleEmbeddedScalarWhereInput | null
}

export interface ArticleEmbeddedUpdateManyWithWhereNestedInput {
  where: ArticleEmbeddedScalarWhereInput
  data: ArticleEmbeddedUpdateManyDataInput
}

export interface ArticleEmbeddedWhereInput {
  AND?: ArticleEmbeddedWhereInput[] | ArticleEmbeddedWhereInput | null
  article_id?: ID_Input | null
  article_id_not?: ID_Input | null
  article_id_in?: ID_Output[] | ID_Output | null
  article_id_not_in?: ID_Output[] | ID_Output | null
  article_id_lt?: ID_Input | null
  article_id_lte?: ID_Input | null
  article_id_gt?: ID_Input | null
  article_id_gte?: ID_Input | null
  article_id_contains?: ID_Input | null
  article_id_not_contains?: ID_Input | null
  article_id_starts_with?: ID_Input | null
  article_id_not_starts_with?: ID_Input | null
  article_id_ends_with?: ID_Input | null
  article_id_not_ends_with?: ID_Input | null
  nno?: String | null
  nno_not?: String | null
  nno_in?: String[] | String | null
  nno_not_in?: String[] | String | null
  nno_lt?: String | null
  nno_lte?: String | null
  nno_gt?: String | null
  nno_gte?: String | null
  nno_contains?: String | null
  nno_not_contains?: String | null
  nno_starts_with?: String | null
  nno_not_starts_with?: String | null
  nno_ends_with?: String | null
  nno_not_ends_with?: String | null
  numref?: String | null
  numref_not?: String | null
  numref_in?: String[] | String | null
  numref_not_in?: String[] | String | null
  numref_lt?: String | null
  numref_lte?: String | null
  numref_gt?: String | null
  numref_gte?: String | null
  numref_contains?: String | null
  numref_not_contains?: String | null
  numref_starts_with?: String | null
  numref_not_starts_with?: String | null
  numref_ends_with?: String | null
  numref_not_ends_with?: String | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  untcpt?: Int | null
  untcpt_not?: Int | null
  untcpt_in?: Int[] | Int | null
  untcpt_not_in?: Int[] | Int | null
  untcpt_lt?: Int | null
  untcpt_lte?: Int | null
  untcpt_gt?: Int | null
  untcpt_gte?: Int | null
  untprx?: Float | null
  untprx_not?: Float | null
  untprx_in?: Float[] | Float | null
  untprx_not_in?: Float[] | Float | null
  untprx_lt?: Float | null
  untprx_lte?: Float | null
  untprx_gt?: Float | null
  untprx_gte?: Float | null
  cdeapr?: String | null
  cdeapr_not?: String | null
  cdeapr_in?: String[] | String | null
  cdeapr_not_in?: String[] | String | null
  cdeapr_lt?: String | null
  cdeapr_lte?: String | null
  cdeapr_gt?: String | null
  cdeapr_gte?: String | null
  cdeapr_contains?: String | null
  cdeapr_not_contains?: String | null
  cdeapr_starts_with?: String | null
  cdeapr_not_starts_with?: String | null
  cdeapr_ends_with?: String | null
  cdeapr_not_ends_with?: String | null
  srvpou?: String | null
  srvpou_not?: String | null
  srvpou_in?: String[] | String | null
  srvpou_not_in?: String[] | String | null
  srvpou_lt?: String | null
  srvpou_lte?: String | null
  srvpou_gt?: String | null
  srvpou_gte?: String | null
  srvpou_contains?: String | null
  srvpou_not_contains?: String | null
  srvpou_starts_with?: String | null
  srvpou_not_starts_with?: String | null
  srvpou_ends_with?: String | null
  srvpou_not_ends_with?: String | null
  typart?: String | null
  typart_not?: String | null
  typart_in?: String[] | String | null
  typart_not_in?: String[] | String | null
  typart_lt?: String | null
  typart_lte?: String | null
  typart_gt?: String | null
  typart_gte?: String | null
  typart_contains?: String | null
  typart_not_contains?: String | null
  typart_starts_with?: String | null
  typart_not_starts_with?: String | null
  typart_ends_with?: String | null
  typart_not_ends_with?: String | null
  numser?: String | null
  numser_not?: String | null
  numser_in?: String[] | String | null
  numser_not_in?: String[] | String | null
  numser_lt?: String | null
  numser_lte?: String | null
  numser_gt?: String | null
  numser_gte?: String | null
  numser_contains?: String | null
  numser_not_contains?: String | null
  numser_starts_with?: String | null
  numser_not_starts_with?: String | null
  numser_ends_with?: String | null
  numser_not_ends_with?: String | null
  pictureUrl?: String | null
  pictureUrl_not?: String | null
  pictureUrl_in?: String[] | String | null
  pictureUrl_not_in?: String[] | String | null
  pictureUrl_lt?: String | null
  pictureUrl_lte?: String | null
  pictureUrl_gt?: String | null
  pictureUrl_gte?: String | null
  pictureUrl_contains?: String | null
  pictureUrl_not_contains?: String | null
  pictureUrl_starts_with?: String | null
  pictureUrl_not_starts_with?: String | null
  pictureUrl_ends_with?: String | null
  pictureUrl_not_ends_with?: String | null
  detention?: DetentionWhereInput | null
}

export interface ArticleSubscriptionWhereInput {
  AND?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ArticleWhereInput | null
}

export interface ArticleUpdateInput {
  numref?: String | null
  nno?: String | null
  lib?: String | null
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
  detention?: DetentionUpdateOneInput | null
}

export interface ArticleUpdateManyMutationInput {
  numref?: String | null
  nno?: String | null
  lib?: String | null
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
}

export interface ArticleWhereInput {
  AND?: ArticleWhereInput[] | ArticleWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  numref?: String | null
  numref_not?: String | null
  numref_in?: String[] | String | null
  numref_not_in?: String[] | String | null
  numref_lt?: String | null
  numref_lte?: String | null
  numref_gt?: String | null
  numref_gte?: String | null
  numref_contains?: String | null
  numref_not_contains?: String | null
  numref_starts_with?: String | null
  numref_not_starts_with?: String | null
  numref_ends_with?: String | null
  numref_not_ends_with?: String | null
  nno?: String | null
  nno_not?: String | null
  nno_in?: String[] | String | null
  nno_not_in?: String[] | String | null
  nno_lt?: String | null
  nno_lte?: String | null
  nno_gt?: String | null
  nno_gte?: String | null
  nno_contains?: String | null
  nno_not_contains?: String | null
  nno_starts_with?: String | null
  nno_not_starts_with?: String | null
  nno_ends_with?: String | null
  nno_not_ends_with?: String | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  untcpt?: Int | null
  untcpt_not?: Int | null
  untcpt_in?: Int[] | Int | null
  untcpt_not_in?: Int[] | Int | null
  untcpt_lt?: Int | null
  untcpt_lte?: Int | null
  untcpt_gt?: Int | null
  untcpt_gte?: Int | null
  untprx?: Float | null
  untprx_not?: Float | null
  untprx_in?: Float[] | Float | null
  untprx_not_in?: Float[] | Float | null
  untprx_lt?: Float | null
  untprx_lte?: Float | null
  untprx_gt?: Float | null
  untprx_gte?: Float | null
  cdeapr?: String | null
  cdeapr_not?: String | null
  cdeapr_in?: String[] | String | null
  cdeapr_not_in?: String[] | String | null
  cdeapr_lt?: String | null
  cdeapr_lte?: String | null
  cdeapr_gt?: String | null
  cdeapr_gte?: String | null
  cdeapr_contains?: String | null
  cdeapr_not_contains?: String | null
  cdeapr_starts_with?: String | null
  cdeapr_not_starts_with?: String | null
  cdeapr_ends_with?: String | null
  cdeapr_not_ends_with?: String | null
  srvpou?: String | null
  srvpou_not?: String | null
  srvpou_in?: String[] | String | null
  srvpou_not_in?: String[] | String | null
  srvpou_lt?: String | null
  srvpou_lte?: String | null
  srvpou_gt?: String | null
  srvpou_gte?: String | null
  srvpou_contains?: String | null
  srvpou_not_contains?: String | null
  srvpou_starts_with?: String | null
  srvpou_not_starts_with?: String | null
  srvpou_ends_with?: String | null
  srvpou_not_ends_with?: String | null
  typart?: String | null
  typart_not?: String | null
  typart_in?: String[] | String | null
  typart_not_in?: String[] | String | null
  typart_lt?: String | null
  typart_lte?: String | null
  typart_gt?: String | null
  typart_gte?: String | null
  typart_contains?: String | null
  typart_not_contains?: String | null
  typart_starts_with?: String | null
  typart_not_starts_with?: String | null
  typart_ends_with?: String | null
  typart_not_ends_with?: String | null
  numser?: String | null
  numser_not?: String | null
  numser_in?: String[] | String | null
  numser_not_in?: String[] | String | null
  numser_lt?: String | null
  numser_lte?: String | null
  numser_gt?: String | null
  numser_gte?: String | null
  numser_contains?: String | null
  numser_not_contains?: String | null
  numser_starts_with?: String | null
  numser_not_starts_with?: String | null
  numser_ends_with?: String | null
  numser_not_ends_with?: String | null
  pictureUrl?: String | null
  pictureUrl_not?: String | null
  pictureUrl_in?: String[] | String | null
  pictureUrl_not_in?: String[] | String | null
  pictureUrl_lt?: String | null
  pictureUrl_lte?: String | null
  pictureUrl_gt?: String | null
  pictureUrl_gte?: String | null
  pictureUrl_contains?: String | null
  pictureUrl_not_contains?: String | null
  pictureUrl_starts_with?: String | null
  pictureUrl_not_starts_with?: String | null
  pictureUrl_ends_with?: String | null
  pictureUrl_not_ends_with?: String | null
  detention?: DetentionWhereInput | null
}

export interface ArticleWhereUniqueInput {
  id?: ID_Input | null
  numref?: String | null
}

export interface DetentionCreateInput {
  id?: ID_Input | null
  lib: String
  unite: UniteCreateOneWithoutDetentionsInput
  inventaire?: InventaireCreateManyWithoutDetentionInput | null
}

export interface DetentionCreateManyWithoutUniteInput {
  create?: DetentionCreateWithoutUniteInput[] | DetentionCreateWithoutUniteInput | null
  connect?: DetentionWhereUniqueInput[] | DetentionWhereUniqueInput | null
}

export interface DetentionCreateOneInput {
  create?: DetentionCreateInput | null
  connect?: DetentionWhereUniqueInput | null
}

export interface DetentionCreateOneWithoutInventaireInput {
  create?: DetentionCreateWithoutInventaireInput | null
  connect?: DetentionWhereUniqueInput | null
}

export interface DetentionCreateWithoutInventaireInput {
  id?: ID_Input | null
  lib: String
  unite: UniteCreateOneWithoutDetentionsInput
}

export interface DetentionCreateWithoutUniteInput {
  id?: ID_Input | null
  lib: String
  inventaire?: InventaireCreateManyWithoutDetentionInput | null
}

export interface DetentionScalarWhereInput {
  AND?: DetentionScalarWhereInput[] | DetentionScalarWhereInput | null
  OR?: DetentionScalarWhereInput[] | DetentionScalarWhereInput | null
  NOT?: DetentionScalarWhereInput[] | DetentionScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
}

export interface DetentionSubscriptionWhereInput {
  AND?: DetentionSubscriptionWhereInput[] | DetentionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DetentionWhereInput | null
}

export interface DetentionUpdateDataInput {
  lib?: String | null
  unite?: UniteUpdateOneRequiredWithoutDetentionsInput | null
  inventaire?: InventaireUpdateManyWithoutDetentionInput | null
}

export interface DetentionUpdateInput {
  lib?: String | null
  unite?: UniteUpdateOneRequiredWithoutDetentionsInput | null
  inventaire?: InventaireUpdateManyWithoutDetentionInput | null
}

export interface DetentionUpdateManyDataInput {
  lib?: String | null
}

export interface DetentionUpdateManyMutationInput {
  lib?: String | null
}

export interface DetentionUpdateManyWithoutUniteInput {
  create?: DetentionCreateWithoutUniteInput[] | DetentionCreateWithoutUniteInput | null
  connect?: DetentionWhereUniqueInput[] | DetentionWhereUniqueInput | null
  set?: DetentionWhereUniqueInput[] | DetentionWhereUniqueInput | null
  disconnect?: DetentionWhereUniqueInput[] | DetentionWhereUniqueInput | null
  delete?: DetentionWhereUniqueInput[] | DetentionWhereUniqueInput | null
  update?: DetentionUpdateWithWhereUniqueWithoutUniteInput[] | DetentionUpdateWithWhereUniqueWithoutUniteInput | null
  updateMany?: DetentionUpdateManyWithWhereNestedInput[] | DetentionUpdateManyWithWhereNestedInput | null
  deleteMany?: DetentionScalarWhereInput[] | DetentionScalarWhereInput | null
  upsert?: DetentionUpsertWithWhereUniqueWithoutUniteInput[] | DetentionUpsertWithWhereUniqueWithoutUniteInput | null
}

export interface DetentionUpdateManyWithWhereNestedInput {
  where: DetentionScalarWhereInput
  data: DetentionUpdateManyDataInput
}

export interface DetentionUpdateOneInput {
  create?: DetentionCreateInput | null
  connect?: DetentionWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DetentionUpdateDataInput | null
  upsert?: DetentionUpsertNestedInput | null
}

export interface DetentionUpdateOneWithoutInventaireInput {
  create?: DetentionCreateWithoutInventaireInput | null
  connect?: DetentionWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DetentionUpdateWithoutInventaireDataInput | null
  upsert?: DetentionUpsertWithoutInventaireInput | null
}

export interface DetentionUpdateWithoutInventaireDataInput {
  lib?: String | null
  unite?: UniteUpdateOneRequiredWithoutDetentionsInput | null
}

export interface DetentionUpdateWithoutUniteDataInput {
  lib?: String | null
  inventaire?: InventaireUpdateManyWithoutDetentionInput | null
}

export interface DetentionUpdateWithWhereUniqueWithoutUniteInput {
  where: DetentionWhereUniqueInput
  data: DetentionUpdateWithoutUniteDataInput
}

export interface DetentionUpsertNestedInput {
  update: DetentionUpdateDataInput
  create: DetentionCreateInput
}

export interface DetentionUpsertWithoutInventaireInput {
  update: DetentionUpdateWithoutInventaireDataInput
  create: DetentionCreateWithoutInventaireInput
}

export interface DetentionUpsertWithWhereUniqueWithoutUniteInput {
  where: DetentionWhereUniqueInput
  update: DetentionUpdateWithoutUniteDataInput
  create: DetentionCreateWithoutUniteInput
}

export interface DetentionWhereInput {
  AND?: DetentionWhereInput[] | DetentionWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  unite?: UniteWhereInput | null
  inventaire_some?: InventaireWhereInput | null
}

export interface DetentionWhereUniqueInput {
  id?: ID_Input | null
}

export interface InventaireCreateInput {
  id?: ID_Input | null
  lib: String
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
  articles?: ArticleEmbeddedCreateManyInput | null
  detention?: DetentionCreateOneWithoutInventaireInput | null
}

export interface InventaireCreateManyWithoutDetentionInput {
  create?: InventaireCreateWithoutDetentionInput[] | InventaireCreateWithoutDetentionInput | null
  connect?: InventaireWhereUniqueInput[] | InventaireWhereUniqueInput | null
}

export interface InventaireCreateWithoutDetentionInput {
  id?: ID_Input | null
  lib: String
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
  articles?: ArticleEmbeddedCreateManyInput | null
}

export interface InventaireScalarWhereInput {
  AND?: InventaireScalarWhereInput[] | InventaireScalarWhereInput | null
  OR?: InventaireScalarWhereInput[] | InventaireScalarWhereInput | null
  NOT?: InventaireScalarWhereInput[] | InventaireScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  dtever?: DateTime | null
  dtever_not?: DateTime | null
  dtever_in?: DateTime[] | DateTime | null
  dtever_not_in?: DateTime[] | DateTime | null
  dtever_lt?: DateTime | null
  dtever_lte?: DateTime | null
  dtever_gt?: DateTime | null
  dtever_gte?: DateTime | null
  exideb?: String | null
  exideb_not?: String | null
  exideb_in?: String[] | String | null
  exideb_not_in?: String[] | String | null
  exideb_lt?: String | null
  exideb_lte?: String | null
  exideb_gt?: String | null
  exideb_gte?: String | null
  exideb_contains?: String | null
  exideb_not_contains?: String | null
  exideb_starts_with?: String | null
  exideb_not_starts_with?: String | null
  exideb_ends_with?: String | null
  exideb_not_ends_with?: String | null
  dtecre?: DateTime | null
  dtecre_not?: DateTime | null
  dtecre_in?: DateTime[] | DateTime | null
  dtecre_not_in?: DateTime[] | DateTime | null
  dtecre_lt?: DateTime | null
  dtecre_lte?: DateTime | null
  dtecre_gt?: DateTime | null
  dtecre_gte?: DateTime | null
  cdevrf?: String | null
  cdevrf_not?: String | null
  cdevrf_in?: String[] | String | null
  cdevrf_not_in?: String[] | String | null
  cdevrf_lt?: String | null
  cdevrf_lte?: String | null
  cdevrf_gt?: String | null
  cdevrf_gte?: String | null
  cdevrf_contains?: String | null
  cdevrf_not_contains?: String | null
  cdevrf_starts_with?: String | null
  cdevrf_not_starts_with?: String | null
  cdevrf_ends_with?: String | null
  cdevrf_not_ends_with?: String | null
  obs?: String | null
  obs_not?: String | null
  obs_in?: String[] | String | null
  obs_not_in?: String[] | String | null
  obs_lt?: String | null
  obs_lte?: String | null
  obs_gt?: String | null
  obs_gte?: String | null
  obs_contains?: String | null
  obs_not_contains?: String | null
  obs_starts_with?: String | null
  obs_not_starts_with?: String | null
  obs_ends_with?: String | null
  obs_not_ends_with?: String | null
}

export interface InventaireSubscriptionWhereInput {
  AND?: InventaireSubscriptionWhereInput[] | InventaireSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: InventaireWhereInput | null
}

export interface InventaireUpdateInput {
  lib?: String | null
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
  articles?: ArticleEmbeddedUpdateManyInput | null
  detention?: DetentionUpdateOneWithoutInventaireInput | null
}

export interface InventaireUpdateManyDataInput {
  lib?: String | null
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
}

export interface InventaireUpdateManyMutationInput {
  lib?: String | null
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
}

export interface InventaireUpdateManyWithoutDetentionInput {
  create?: InventaireCreateWithoutDetentionInput[] | InventaireCreateWithoutDetentionInput | null
  connect?: InventaireWhereUniqueInput[] | InventaireWhereUniqueInput | null
  set?: InventaireWhereUniqueInput[] | InventaireWhereUniqueInput | null
  disconnect?: InventaireWhereUniqueInput[] | InventaireWhereUniqueInput | null
  delete?: InventaireWhereUniqueInput[] | InventaireWhereUniqueInput | null
  update?: InventaireUpdateWithWhereUniqueWithoutDetentionInput[] | InventaireUpdateWithWhereUniqueWithoutDetentionInput | null
  updateMany?: InventaireUpdateManyWithWhereNestedInput[] | InventaireUpdateManyWithWhereNestedInput | null
  deleteMany?: InventaireScalarWhereInput[] | InventaireScalarWhereInput | null
  upsert?: InventaireUpsertWithWhereUniqueWithoutDetentionInput[] | InventaireUpsertWithWhereUniqueWithoutDetentionInput | null
}

export interface InventaireUpdateManyWithWhereNestedInput {
  where: InventaireScalarWhereInput
  data: InventaireUpdateManyDataInput
}

export interface InventaireUpdateWithoutDetentionDataInput {
  lib?: String | null
  dtever?: DateTime | null
  exideb?: String | null
  cdevrf?: String | null
  obs?: String | null
  articles?: ArticleEmbeddedUpdateManyInput | null
}

export interface InventaireUpdateWithWhereUniqueWithoutDetentionInput {
  where: InventaireWhereUniqueInput
  data: InventaireUpdateWithoutDetentionDataInput
}

export interface InventaireUpsertWithWhereUniqueWithoutDetentionInput {
  where: InventaireWhereUniqueInput
  update: InventaireUpdateWithoutDetentionDataInput
  create: InventaireCreateWithoutDetentionInput
}

export interface InventaireWhereInput {
  AND?: InventaireWhereInput[] | InventaireWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lib?: String | null
  lib_not?: String | null
  lib_in?: String[] | String | null
  lib_not_in?: String[] | String | null
  lib_lt?: String | null
  lib_lte?: String | null
  lib_gt?: String | null
  lib_gte?: String | null
  lib_contains?: String | null
  lib_not_contains?: String | null
  lib_starts_with?: String | null
  lib_not_starts_with?: String | null
  lib_ends_with?: String | null
  lib_not_ends_with?: String | null
  dtever?: DateTime | null
  dtever_not?: DateTime | null
  dtever_in?: DateTime[] | DateTime | null
  dtever_not_in?: DateTime[] | DateTime | null
  dtever_lt?: DateTime | null
  dtever_lte?: DateTime | null
  dtever_gt?: DateTime | null
  dtever_gte?: DateTime | null
  exideb?: String | null
  exideb_not?: String | null
  exideb_in?: String[] | String | null
  exideb_not_in?: String[] | String | null
  exideb_lt?: String | null
  exideb_lte?: String | null
  exideb_gt?: String | null
  exideb_gte?: String | null
  exideb_contains?: String | null
  exideb_not_contains?: String | null
  exideb_starts_with?: String | null
  exideb_not_starts_with?: String | null
  exideb_ends_with?: String | null
  exideb_not_ends_with?: String | null
  dtecre?: DateTime | null
  dtecre_not?: DateTime | null
  dtecre_in?: DateTime[] | DateTime | null
  dtecre_not_in?: DateTime[] | DateTime | null
  dtecre_lt?: DateTime | null
  dtecre_lte?: DateTime | null
  dtecre_gt?: DateTime | null
  dtecre_gte?: DateTime | null
  cdevrf?: String | null
  cdevrf_not?: String | null
  cdevrf_in?: String[] | String | null
  cdevrf_not_in?: String[] | String | null
  cdevrf_lt?: String | null
  cdevrf_lte?: String | null
  cdevrf_gt?: String | null
  cdevrf_gte?: String | null
  cdevrf_contains?: String | null
  cdevrf_not_contains?: String | null
  cdevrf_starts_with?: String | null
  cdevrf_not_starts_with?: String | null
  cdevrf_ends_with?: String | null
  cdevrf_not_ends_with?: String | null
  obs?: String | null
  obs_not?: String | null
  obs_in?: String[] | String | null
  obs_not_in?: String[] | String | null
  obs_lt?: String | null
  obs_lte?: String | null
  obs_gt?: String | null
  obs_gte?: String | null
  obs_contains?: String | null
  obs_not_contains?: String | null
  obs_starts_with?: String | null
  obs_not_starts_with?: String | null
  obs_ends_with?: String | null
  obs_not_ends_with?: String | null
  articles_some?: ArticleEmbeddedWhereInput | null
  articles_every?: ArticleEmbeddedRestrictedWhereInput | null
  articles_none?: ArticleEmbeddedRestrictedWhereInput | null
  detention?: DetentionWhereInput | null
}

export interface InventaireWhereUniqueInput {
  id?: ID_Input | null
}

export interface UniteCreateInput {
  id?: ID_Input | null
  cdeunt: String
  dtepjc?: DateTime | null
  libunt: String
  typuni?: String | null
  users?: UserCreateManyWithoutUnitesInput | null
  detentions?: DetentionCreateManyWithoutUniteInput | null
}

export interface UniteCreateManyWithoutUsersInput {
  create?: UniteCreateWithoutUsersInput[] | UniteCreateWithoutUsersInput | null
  connect?: UniteWhereUniqueInput[] | UniteWhereUniqueInput | null
}

export interface UniteCreateOneWithoutDetentionsInput {
  create?: UniteCreateWithoutDetentionsInput | null
  connect?: UniteWhereUniqueInput | null
}

export interface UniteCreateWithoutDetentionsInput {
  id?: ID_Input | null
  cdeunt: String
  dtepjc?: DateTime | null
  libunt: String
  typuni?: String | null
  users?: UserCreateManyWithoutUnitesInput | null
}

export interface UniteCreateWithoutUsersInput {
  id?: ID_Input | null
  cdeunt: String
  dtepjc?: DateTime | null
  libunt: String
  typuni?: String | null
  detentions?: DetentionCreateManyWithoutUniteInput | null
}

export interface UniteScalarWhereInput {
  AND?: UniteScalarWhereInput[] | UniteScalarWhereInput | null
  OR?: UniteScalarWhereInput[] | UniteScalarWhereInput | null
  NOT?: UniteScalarWhereInput[] | UniteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  cdeunt?: String | null
  cdeunt_not?: String | null
  cdeunt_in?: String[] | String | null
  cdeunt_not_in?: String[] | String | null
  cdeunt_lt?: String | null
  cdeunt_lte?: String | null
  cdeunt_gt?: String | null
  cdeunt_gte?: String | null
  cdeunt_contains?: String | null
  cdeunt_not_contains?: String | null
  cdeunt_starts_with?: String | null
  cdeunt_not_starts_with?: String | null
  cdeunt_ends_with?: String | null
  cdeunt_not_ends_with?: String | null
  dtepjc?: DateTime | null
  dtepjc_not?: DateTime | null
  dtepjc_in?: DateTime[] | DateTime | null
  dtepjc_not_in?: DateTime[] | DateTime | null
  dtepjc_lt?: DateTime | null
  dtepjc_lte?: DateTime | null
  dtepjc_gt?: DateTime | null
  dtepjc_gte?: DateTime | null
  libunt?: String | null
  libunt_not?: String | null
  libunt_in?: String[] | String | null
  libunt_not_in?: String[] | String | null
  libunt_lt?: String | null
  libunt_lte?: String | null
  libunt_gt?: String | null
  libunt_gte?: String | null
  libunt_contains?: String | null
  libunt_not_contains?: String | null
  libunt_starts_with?: String | null
  libunt_not_starts_with?: String | null
  libunt_ends_with?: String | null
  libunt_not_ends_with?: String | null
  typuni?: String | null
  typuni_not?: String | null
  typuni_in?: String[] | String | null
  typuni_not_in?: String[] | String | null
  typuni_lt?: String | null
  typuni_lte?: String | null
  typuni_gt?: String | null
  typuni_gte?: String | null
  typuni_contains?: String | null
  typuni_not_contains?: String | null
  typuni_starts_with?: String | null
  typuni_not_starts_with?: String | null
  typuni_ends_with?: String | null
  typuni_not_ends_with?: String | null
}

export interface UniteSubscriptionWhereInput {
  AND?: UniteSubscriptionWhereInput[] | UniteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UniteWhereInput | null
}

export interface UniteUpdateInput {
  cdeunt?: String | null
  dtepjc?: DateTime | null
  libunt?: String | null
  typuni?: String | null
  users?: UserUpdateManyWithoutUnitesInput | null
  detentions?: DetentionUpdateManyWithoutUniteInput | null
}

export interface UniteUpdateManyDataInput {
  cdeunt?: String | null
  dtepjc?: DateTime | null
  libunt?: String | null
  typuni?: String | null
}

export interface UniteUpdateManyMutationInput {
  cdeunt?: String | null
  dtepjc?: DateTime | null
  libunt?: String | null
  typuni?: String | null
}

export interface UniteUpdateManyWithoutUsersInput {
  create?: UniteCreateWithoutUsersInput[] | UniteCreateWithoutUsersInput | null
  connect?: UniteWhereUniqueInput[] | UniteWhereUniqueInput | null
  set?: UniteWhereUniqueInput[] | UniteWhereUniqueInput | null
  disconnect?: UniteWhereUniqueInput[] | UniteWhereUniqueInput | null
  delete?: UniteWhereUniqueInput[] | UniteWhereUniqueInput | null
  update?: UniteUpdateWithWhereUniqueWithoutUsersInput[] | UniteUpdateWithWhereUniqueWithoutUsersInput | null
  updateMany?: UniteUpdateManyWithWhereNestedInput[] | UniteUpdateManyWithWhereNestedInput | null
  deleteMany?: UniteScalarWhereInput[] | UniteScalarWhereInput | null
  upsert?: UniteUpsertWithWhereUniqueWithoutUsersInput[] | UniteUpsertWithWhereUniqueWithoutUsersInput | null
}

export interface UniteUpdateManyWithWhereNestedInput {
  where: UniteScalarWhereInput
  data: UniteUpdateManyDataInput
}

export interface UniteUpdateOneRequiredWithoutDetentionsInput {
  create?: UniteCreateWithoutDetentionsInput | null
  connect?: UniteWhereUniqueInput | null
  update?: UniteUpdateWithoutDetentionsDataInput | null
  upsert?: UniteUpsertWithoutDetentionsInput | null
}

export interface UniteUpdateWithoutDetentionsDataInput {
  cdeunt?: String | null
  dtepjc?: DateTime | null
  libunt?: String | null
  typuni?: String | null
  users?: UserUpdateManyWithoutUnitesInput | null
}

export interface UniteUpdateWithoutUsersDataInput {
  cdeunt?: String | null
  dtepjc?: DateTime | null
  libunt?: String | null
  typuni?: String | null
  detentions?: DetentionUpdateManyWithoutUniteInput | null
}

export interface UniteUpdateWithWhereUniqueWithoutUsersInput {
  where: UniteWhereUniqueInput
  data: UniteUpdateWithoutUsersDataInput
}

export interface UniteUpsertWithoutDetentionsInput {
  update: UniteUpdateWithoutDetentionsDataInput
  create: UniteCreateWithoutDetentionsInput
}

export interface UniteUpsertWithWhereUniqueWithoutUsersInput {
  where: UniteWhereUniqueInput
  update: UniteUpdateWithoutUsersDataInput
  create: UniteCreateWithoutUsersInput
}

export interface UniteWhereInput {
  AND?: UniteWhereInput[] | UniteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  cdeunt?: String | null
  cdeunt_not?: String | null
  cdeunt_in?: String[] | String | null
  cdeunt_not_in?: String[] | String | null
  cdeunt_lt?: String | null
  cdeunt_lte?: String | null
  cdeunt_gt?: String | null
  cdeunt_gte?: String | null
  cdeunt_contains?: String | null
  cdeunt_not_contains?: String | null
  cdeunt_starts_with?: String | null
  cdeunt_not_starts_with?: String | null
  cdeunt_ends_with?: String | null
  cdeunt_not_ends_with?: String | null
  dtepjc?: DateTime | null
  dtepjc_not?: DateTime | null
  dtepjc_in?: DateTime[] | DateTime | null
  dtepjc_not_in?: DateTime[] | DateTime | null
  dtepjc_lt?: DateTime | null
  dtepjc_lte?: DateTime | null
  dtepjc_gt?: DateTime | null
  dtepjc_gte?: DateTime | null
  libunt?: String | null
  libunt_not?: String | null
  libunt_in?: String[] | String | null
  libunt_not_in?: String[] | String | null
  libunt_lt?: String | null
  libunt_lte?: String | null
  libunt_gt?: String | null
  libunt_gte?: String | null
  libunt_contains?: String | null
  libunt_not_contains?: String | null
  libunt_starts_with?: String | null
  libunt_not_starts_with?: String | null
  libunt_ends_with?: String | null
  libunt_not_ends_with?: String | null
  typuni?: String | null
  typuni_not?: String | null
  typuni_in?: String[] | String | null
  typuni_not_in?: String[] | String | null
  typuni_lt?: String | null
  typuni_lte?: String | null
  typuni_gt?: String | null
  typuni_gte?: String | null
  typuni_contains?: String | null
  typuni_not_contains?: String | null
  typuni_starts_with?: String | null
  typuni_not_starts_with?: String | null
  typuni_ends_with?: String | null
  typuni_not_ends_with?: String | null
  users_some?: UserWhereInput | null
  detentions_some?: DetentionWhereInput | null
}

export interface UniteWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  identifiant: String
  password: String
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
  unites?: UniteCreateManyWithoutUsersInput | null
}

export interface UserCreateManyWithoutUnitesInput {
  create?: UserCreateWithoutUnitesInput[] | UserCreateWithoutUnitesInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateWithoutUnitesInput {
  id?: ID_Input | null
  identifiant: String
  password: String
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  dtecre?: DateTime | null
  dtecre_not?: DateTime | null
  dtecre_in?: DateTime[] | DateTime | null
  dtecre_not_in?: DateTime[] | DateTime | null
  dtecre_lt?: DateTime | null
  dtecre_lte?: DateTime | null
  dtecre_gt?: DateTime | null
  dtecre_gte?: DateTime | null
  identifiant?: String | null
  identifiant_not?: String | null
  identifiant_in?: String[] | String | null
  identifiant_not_in?: String[] | String | null
  identifiant_lt?: String | null
  identifiant_lte?: String | null
  identifiant_gt?: String | null
  identifiant_gte?: String | null
  identifiant_contains?: String | null
  identifiant_not_contains?: String | null
  identifiant_starts_with?: String | null
  identifiant_not_starts_with?: String | null
  identifiant_ends_with?: String | null
  identifiant_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  nom?: String | null
  nom_not?: String | null
  nom_in?: String[] | String | null
  nom_not_in?: String[] | String | null
  nom_lt?: String | null
  nom_lte?: String | null
  nom_gt?: String | null
  nom_gte?: String | null
  nom_contains?: String | null
  nom_not_contains?: String | null
  nom_starts_with?: String | null
  nom_not_starts_with?: String | null
  nom_ends_with?: String | null
  nom_not_ends_with?: String | null
  prenom?: String | null
  prenom_not?: String | null
  prenom_in?: String[] | String | null
  prenom_not_in?: String[] | String | null
  prenom_lt?: String | null
  prenom_lte?: String | null
  prenom_gt?: String | null
  prenom_gte?: String | null
  prenom_contains?: String | null
  prenom_not_contains?: String | null
  prenom_starts_with?: String | null
  prenom_not_starts_with?: String | null
  prenom_ends_with?: String | null
  prenom_not_ends_with?: String | null
  role?: UserRole | null
  role_not?: UserRole | null
  role_in?: UserRole[] | UserRole | null
  role_not_in?: UserRole[] | UserRole | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  identifiant?: String | null
  password?: String | null
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
  unites?: UniteUpdateManyWithoutUsersInput | null
}

export interface UserUpdateManyDataInput {
  identifiant?: String | null
  password?: String | null
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
}

export interface UserUpdateManyMutationInput {
  identifiant?: String | null
  password?: String | null
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
}

export interface UserUpdateManyWithoutUnitesInput {
  create?: UserCreateWithoutUnitesInput[] | UserCreateWithoutUnitesInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutUnitesInput[] | UserUpdateWithWhereUniqueWithoutUnitesInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutUnitesInput[] | UserUpsertWithWhereUniqueWithoutUnitesInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateWithoutUnitesDataInput {
  identifiant?: String | null
  password?: String | null
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
}

export interface UserUpdateWithWhereUniqueWithoutUnitesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutUnitesDataInput
}

export interface UserUpsertWithWhereUniqueWithoutUnitesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutUnitesDataInput
  create: UserCreateWithoutUnitesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  dtecre?: DateTime | null
  dtecre_not?: DateTime | null
  dtecre_in?: DateTime[] | DateTime | null
  dtecre_not_in?: DateTime[] | DateTime | null
  dtecre_lt?: DateTime | null
  dtecre_lte?: DateTime | null
  dtecre_gt?: DateTime | null
  dtecre_gte?: DateTime | null
  identifiant?: String | null
  identifiant_not?: String | null
  identifiant_in?: String[] | String | null
  identifiant_not_in?: String[] | String | null
  identifiant_lt?: String | null
  identifiant_lte?: String | null
  identifiant_gt?: String | null
  identifiant_gte?: String | null
  identifiant_contains?: String | null
  identifiant_not_contains?: String | null
  identifiant_starts_with?: String | null
  identifiant_not_starts_with?: String | null
  identifiant_ends_with?: String | null
  identifiant_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  nom?: String | null
  nom_not?: String | null
  nom_in?: String[] | String | null
  nom_not_in?: String[] | String | null
  nom_lt?: String | null
  nom_lte?: String | null
  nom_gt?: String | null
  nom_gte?: String | null
  nom_contains?: String | null
  nom_not_contains?: String | null
  nom_starts_with?: String | null
  nom_not_starts_with?: String | null
  nom_ends_with?: String | null
  nom_not_ends_with?: String | null
  prenom?: String | null
  prenom_not?: String | null
  prenom_in?: String[] | String | null
  prenom_not_in?: String[] | String | null
  prenom_lt?: String | null
  prenom_lte?: String | null
  prenom_gt?: String | null
  prenom_gte?: String | null
  prenom_contains?: String | null
  prenom_not_contains?: String | null
  prenom_starts_with?: String | null
  prenom_not_starts_with?: String | null
  prenom_ends_with?: String | null
  prenom_not_ends_with?: String | null
  role?: UserRole | null
  role_not?: UserRole | null
  role_in?: UserRole[] | UserRole | null
  role_not_in?: UserRole[] | UserRole | null
  unites_some?: UniteWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  identifiant?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateArticle {
  count: Int
}

export interface AggregateDetention {
  count: Int
}

export interface AggregateInventaire {
  count: Int
}

export interface AggregateUnite {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface Article extends Node {
  id: ID_Output
  createdAt?: DateTime | null
  numref: String
  nno: String
  lib: String
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
  detention?: Detention | null
}

/*
 * A connection to a list of items.

 */
export interface ArticleConnection {
  pageInfo: PageInfo
  edges: Array<ArticleEdge | null>
  aggregate: AggregateArticle
}

/*
 * An edge in a connection.

 */
export interface ArticleEdge {
  node: Article
  cursor: String
}

export interface ArticleEmbedded {
  article_id: ID_Output
  nno: String
  numref: String
  lib: String
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
  detention: Detention
}

export interface ArticlePreviousValues {
  id: ID_Output
  createdAt?: DateTime | null
  numref: String
  nno: String
  lib: String
  untcpt?: Int | null
  untprx?: Float | null
  cdeapr?: String | null
  srvpou?: String | null
  typart?: String | null
  numser?: String | null
  pictureUrl?: String | null
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType
  node?: Article | null
  updatedFields?: Array<String> | null
  previousValues?: ArticlePreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Detention extends Node {
  id: ID_Output
  lib: String
  unite: Unite
  inventaire?: Array<Inventaire> | null
}

/*
 * A connection to a list of items.

 */
export interface DetentionConnection {
  pageInfo: PageInfo
  edges: Array<DetentionEdge | null>
  aggregate: AggregateDetention
}

/*
 * An edge in a connection.

 */
export interface DetentionEdge {
  node: Detention
  cursor: String
}

export interface DetentionPreviousValues {
  id: ID_Output
  lib: String
}

export interface DetentionSubscriptionPayload {
  mutation: MutationType
  node?: Detention | null
  updatedFields?: Array<String> | null
  previousValues?: DetentionPreviousValues | null
}

export interface Inventaire extends Node {
  id: ID_Output
  lib: String
  dtever?: DateTime | null
  exideb?: String | null
  dtecre?: DateTime | null
  cdevrf?: String | null
  obs?: String | null
  articles?: Array<ArticleEmbedded> | null
  detention?: Detention | null
}

/*
 * A connection to a list of items.

 */
export interface InventaireConnection {
  pageInfo: PageInfo
  edges: Array<InventaireEdge | null>
  aggregate: AggregateInventaire
}

/*
 * An edge in a connection.

 */
export interface InventaireEdge {
  node: Inventaire
  cursor: String
}

export interface InventairePreviousValues {
  id: ID_Output
  lib: String
  dtever?: DateTime | null
  exideb?: String | null
  dtecre?: DateTime | null
  cdevrf?: String | null
  obs?: String | null
}

export interface InventaireSubscriptionPayload {
  mutation: MutationType
  node?: Inventaire | null
  updatedFields?: Array<String> | null
  previousValues?: InventairePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Unite extends Node {
  id: ID_Output
  cdeunt: String
  dtepjc?: DateTime | null
  libunt: String
  typuni?: String | null
  users?: Array<User> | null
  detentions?: Array<Detention> | null
}

/*
 * A connection to a list of items.

 */
export interface UniteConnection {
  pageInfo: PageInfo
  edges: Array<UniteEdge | null>
  aggregate: AggregateUnite
}

/*
 * An edge in a connection.

 */
export interface UniteEdge {
  node: Unite
  cursor: String
}

export interface UnitePreviousValues {
  id: ID_Output
  cdeunt: String
  dtepjc?: DateTime | null
  libunt: String
  typuni?: String | null
}

export interface UniteSubscriptionPayload {
  mutation: MutationType
  node?: Unite | null
  updatedFields?: Array<String> | null
  previousValues?: UnitePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  dtecre?: DateTime | null
  identifiant: String
  password: String
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
  unites?: Array<Unite> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  dtecre?: DateTime | null
  identifiant: String
  password: String
  nom?: String | null
  prenom?: String | null
  role?: UserRole | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string