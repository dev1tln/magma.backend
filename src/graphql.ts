
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum ArticleOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    numref_ASC = "numref_ASC",
    numref_DESC = "numref_DESC",
    nno_ASC = "nno_ASC",
    nno_DESC = "nno_DESC",
    lib_ASC = "lib_ASC",
    lib_DESC = "lib_DESC",
    untcpt_ASC = "untcpt_ASC",
    untcpt_DESC = "untcpt_DESC",
    untprx_ASC = "untprx_ASC",
    untprx_DESC = "untprx_DESC",
    cdeapr_ASC = "cdeapr_ASC",
    cdeapr_DESC = "cdeapr_DESC",
    srvpou_ASC = "srvpou_ASC",
    srvpou_DESC = "srvpou_DESC",
    typart_ASC = "typart_ASC",
    typart_DESC = "typart_DESC",
    numser_ASC = "numser_ASC",
    numser_DESC = "numser_DESC",
    pictureUrl_ASC = "pictureUrl_ASC",
    pictureUrl_DESC = "pictureUrl_DESC"
}

export enum DetentionOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    lib_ASC = "lib_ASC",
    lib_DESC = "lib_DESC"
}

export enum InventaireOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    lib_ASC = "lib_ASC",
    lib_DESC = "lib_DESC",
    dtever_ASC = "dtever_ASC",
    dtever_DESC = "dtever_DESC",
    exideb_ASC = "exideb_ASC",
    exideb_DESC = "exideb_DESC",
    dtecre_ASC = "dtecre_ASC",
    dtecre_DESC = "dtecre_DESC",
    cdevrf_ASC = "cdevrf_ASC",
    cdevrf_DESC = "cdevrf_DESC",
    obs_ASC = "obs_ASC",
    obs_DESC = "obs_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum UniteOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    cdeunt_ASC = "cdeunt_ASC",
    cdeunt_DESC = "cdeunt_DESC",
    dtepjc_ASC = "dtepjc_ASC",
    dtepjc_DESC = "dtepjc_DESC",
    libunt_ASC = "libunt_ASC",
    libunt_DESC = "libunt_DESC",
    typuni_ASC = "typuni_ASC",
    typuni_DESC = "typuni_DESC"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    dtecre_ASC = "dtecre_ASC",
    dtecre_DESC = "dtecre_DESC",
    identifiant_ASC = "identifiant_ASC",
    identifiant_DESC = "identifiant_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    nom_ASC = "nom_ASC",
    nom_DESC = "nom_DESC",
    prenom_ASC = "prenom_ASC",
    prenom_DESC = "prenom_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC"
}

export enum UserRole {
    UTI = "UTI",
    DET = "DET"
}

export class ArticleCreateInput {
    id?: string;
    nno: string;
    lib: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    picture?: Upload;
    detention?: DetentionCreateOneInput;
}

export class ArticleEmbeddedCreateInput {
    article_id: string;
    nno: string;
    numref: string;
    lib: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
    detention: DetentionCreateOneInput;
}

export class ArticleEmbeddedCreateManyInput {
    create?: ArticleEmbeddedCreateInput[];
}

export class ArticleEmbeddedRestrictedWhereInput {
    AND?: ArticleEmbeddedRestrictedWhereInput[];
    article_id?: string;
    article_id_not?: string;
    article_id_in?: string[];
    article_id_not_in?: string[];
    article_id_lt?: string;
    article_id_lte?: string;
    article_id_gt?: string;
    article_id_gte?: string;
    article_id_contains?: string;
    article_id_not_contains?: string;
    article_id_starts_with?: string;
    article_id_not_starts_with?: string;
    article_id_ends_with?: string;
    article_id_not_ends_with?: string;
    nno?: string;
    nno_not?: string;
    nno_in?: string[];
    nno_not_in?: string[];
    nno_lt?: string;
    nno_lte?: string;
    nno_gt?: string;
    nno_gte?: string;
    nno_contains?: string;
    nno_not_contains?: string;
    nno_starts_with?: string;
    nno_not_starts_with?: string;
    nno_ends_with?: string;
    nno_not_ends_with?: string;
    numref?: string;
    numref_not?: string;
    numref_in?: string[];
    numref_not_in?: string[];
    numref_lt?: string;
    numref_lte?: string;
    numref_gt?: string;
    numref_gte?: string;
    numref_contains?: string;
    numref_not_contains?: string;
    numref_starts_with?: string;
    numref_not_starts_with?: string;
    numref_ends_with?: string;
    numref_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    untcpt?: number;
    untcpt_not?: number;
    untcpt_in?: number[];
    untcpt_not_in?: number[];
    untcpt_lt?: number;
    untcpt_lte?: number;
    untcpt_gt?: number;
    untcpt_gte?: number;
    untprx?: number;
    untprx_not?: number;
    untprx_in?: number[];
    untprx_not_in?: number[];
    untprx_lt?: number;
    untprx_lte?: number;
    untprx_gt?: number;
    untprx_gte?: number;
    cdeapr?: string;
    cdeapr_not?: string;
    cdeapr_in?: string[];
    cdeapr_not_in?: string[];
    cdeapr_lt?: string;
    cdeapr_lte?: string;
    cdeapr_gt?: string;
    cdeapr_gte?: string;
    cdeapr_contains?: string;
    cdeapr_not_contains?: string;
    cdeapr_starts_with?: string;
    cdeapr_not_starts_with?: string;
    cdeapr_ends_with?: string;
    cdeapr_not_ends_with?: string;
    srvpou?: string;
    srvpou_not?: string;
    srvpou_in?: string[];
    srvpou_not_in?: string[];
    srvpou_lt?: string;
    srvpou_lte?: string;
    srvpou_gt?: string;
    srvpou_gte?: string;
    srvpou_contains?: string;
    srvpou_not_contains?: string;
    srvpou_starts_with?: string;
    srvpou_not_starts_with?: string;
    srvpou_ends_with?: string;
    srvpou_not_ends_with?: string;
    typart?: string;
    typart_not?: string;
    typart_in?: string[];
    typart_not_in?: string[];
    typart_lt?: string;
    typart_lte?: string;
    typart_gt?: string;
    typart_gte?: string;
    typart_contains?: string;
    typart_not_contains?: string;
    typart_starts_with?: string;
    typart_not_starts_with?: string;
    typart_ends_with?: string;
    typart_not_ends_with?: string;
    numser?: string;
    numser_not?: string;
    numser_in?: string[];
    numser_not_in?: string[];
    numser_lt?: string;
    numser_lte?: string;
    numser_gt?: string;
    numser_gte?: string;
    numser_contains?: string;
    numser_not_contains?: string;
    numser_starts_with?: string;
    numser_not_starts_with?: string;
    numser_ends_with?: string;
    numser_not_ends_with?: string;
    pictureUrl?: string;
    pictureUrl_not?: string;
    pictureUrl_in?: string[];
    pictureUrl_not_in?: string[];
    pictureUrl_lt?: string;
    pictureUrl_lte?: string;
    pictureUrl_gt?: string;
    pictureUrl_gte?: string;
    pictureUrl_contains?: string;
    pictureUrl_not_contains?: string;
    pictureUrl_starts_with?: string;
    pictureUrl_not_starts_with?: string;
    pictureUrl_ends_with?: string;
    pictureUrl_not_ends_with?: string;
}

export class ArticleEmbeddedScalarWhereInput {
    AND?: ArticleEmbeddedScalarWhereInput[];
    OR?: ArticleEmbeddedScalarWhereInput[];
    NOT?: ArticleEmbeddedScalarWhereInput[];
    article_id?: string;
    article_id_not?: string;
    article_id_in?: string[];
    article_id_not_in?: string[];
    article_id_lt?: string;
    article_id_lte?: string;
    article_id_gt?: string;
    article_id_gte?: string;
    article_id_contains?: string;
    article_id_not_contains?: string;
    article_id_starts_with?: string;
    article_id_not_starts_with?: string;
    article_id_ends_with?: string;
    article_id_not_ends_with?: string;
    nno?: string;
    nno_not?: string;
    nno_in?: string[];
    nno_not_in?: string[];
    nno_lt?: string;
    nno_lte?: string;
    nno_gt?: string;
    nno_gte?: string;
    nno_contains?: string;
    nno_not_contains?: string;
    nno_starts_with?: string;
    nno_not_starts_with?: string;
    nno_ends_with?: string;
    nno_not_ends_with?: string;
    numref?: string;
    numref_not?: string;
    numref_in?: string[];
    numref_not_in?: string[];
    numref_lt?: string;
    numref_lte?: string;
    numref_gt?: string;
    numref_gte?: string;
    numref_contains?: string;
    numref_not_contains?: string;
    numref_starts_with?: string;
    numref_not_starts_with?: string;
    numref_ends_with?: string;
    numref_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    untcpt?: number;
    untcpt_not?: number;
    untcpt_in?: number[];
    untcpt_not_in?: number[];
    untcpt_lt?: number;
    untcpt_lte?: number;
    untcpt_gt?: number;
    untcpt_gte?: number;
    untprx?: number;
    untprx_not?: number;
    untprx_in?: number[];
    untprx_not_in?: number[];
    untprx_lt?: number;
    untprx_lte?: number;
    untprx_gt?: number;
    untprx_gte?: number;
    cdeapr?: string;
    cdeapr_not?: string;
    cdeapr_in?: string[];
    cdeapr_not_in?: string[];
    cdeapr_lt?: string;
    cdeapr_lte?: string;
    cdeapr_gt?: string;
    cdeapr_gte?: string;
    cdeapr_contains?: string;
    cdeapr_not_contains?: string;
    cdeapr_starts_with?: string;
    cdeapr_not_starts_with?: string;
    cdeapr_ends_with?: string;
    cdeapr_not_ends_with?: string;
    srvpou?: string;
    srvpou_not?: string;
    srvpou_in?: string[];
    srvpou_not_in?: string[];
    srvpou_lt?: string;
    srvpou_lte?: string;
    srvpou_gt?: string;
    srvpou_gte?: string;
    srvpou_contains?: string;
    srvpou_not_contains?: string;
    srvpou_starts_with?: string;
    srvpou_not_starts_with?: string;
    srvpou_ends_with?: string;
    srvpou_not_ends_with?: string;
    typart?: string;
    typart_not?: string;
    typart_in?: string[];
    typart_not_in?: string[];
    typart_lt?: string;
    typart_lte?: string;
    typart_gt?: string;
    typart_gte?: string;
    typart_contains?: string;
    typart_not_contains?: string;
    typart_starts_with?: string;
    typart_not_starts_with?: string;
    typart_ends_with?: string;
    typart_not_ends_with?: string;
    numser?: string;
    numser_not?: string;
    numser_in?: string[];
    numser_not_in?: string[];
    numser_lt?: string;
    numser_lte?: string;
    numser_gt?: string;
    numser_gte?: string;
    numser_contains?: string;
    numser_not_contains?: string;
    numser_starts_with?: string;
    numser_not_starts_with?: string;
    numser_ends_with?: string;
    numser_not_ends_with?: string;
    pictureUrl?: string;
    pictureUrl_not?: string;
    pictureUrl_in?: string[];
    pictureUrl_not_in?: string[];
    pictureUrl_lt?: string;
    pictureUrl_lte?: string;
    pictureUrl_gt?: string;
    pictureUrl_gte?: string;
    pictureUrl_contains?: string;
    pictureUrl_not_contains?: string;
    pictureUrl_starts_with?: string;
    pictureUrl_not_starts_with?: string;
    pictureUrl_ends_with?: string;
    pictureUrl_not_ends_with?: string;
}

export class ArticleEmbeddedUpdateManyDataInput {
    article_id?: string;
    nno?: string;
    numref?: string;
    lib?: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
}

export class ArticleEmbeddedUpdateManyInput {
    create?: ArticleEmbeddedCreateInput[];
    updateMany?: ArticleEmbeddedUpdateManyWithWhereNestedInput[];
    deleteMany?: ArticleEmbeddedScalarWhereInput[];
}

export class ArticleEmbeddedUpdateManyWithWhereNestedInput {
    where: ArticleEmbeddedScalarWhereInput;
    data: ArticleEmbeddedUpdateManyDataInput;
}

export class ArticleEmbeddedWhereInput {
    AND?: ArticleEmbeddedWhereInput[];
    article_id?: string;
    article_id_not?: string;
    article_id_in?: string[];
    article_id_not_in?: string[];
    article_id_lt?: string;
    article_id_lte?: string;
    article_id_gt?: string;
    article_id_gte?: string;
    article_id_contains?: string;
    article_id_not_contains?: string;
    article_id_starts_with?: string;
    article_id_not_starts_with?: string;
    article_id_ends_with?: string;
    article_id_not_ends_with?: string;
    nno?: string;
    nno_not?: string;
    nno_in?: string[];
    nno_not_in?: string[];
    nno_lt?: string;
    nno_lte?: string;
    nno_gt?: string;
    nno_gte?: string;
    nno_contains?: string;
    nno_not_contains?: string;
    nno_starts_with?: string;
    nno_not_starts_with?: string;
    nno_ends_with?: string;
    nno_not_ends_with?: string;
    numref?: string;
    numref_not?: string;
    numref_in?: string[];
    numref_not_in?: string[];
    numref_lt?: string;
    numref_lte?: string;
    numref_gt?: string;
    numref_gte?: string;
    numref_contains?: string;
    numref_not_contains?: string;
    numref_starts_with?: string;
    numref_not_starts_with?: string;
    numref_ends_with?: string;
    numref_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    untcpt?: number;
    untcpt_not?: number;
    untcpt_in?: number[];
    untcpt_not_in?: number[];
    untcpt_lt?: number;
    untcpt_lte?: number;
    untcpt_gt?: number;
    untcpt_gte?: number;
    untprx?: number;
    untprx_not?: number;
    untprx_in?: number[];
    untprx_not_in?: number[];
    untprx_lt?: number;
    untprx_lte?: number;
    untprx_gt?: number;
    untprx_gte?: number;
    cdeapr?: string;
    cdeapr_not?: string;
    cdeapr_in?: string[];
    cdeapr_not_in?: string[];
    cdeapr_lt?: string;
    cdeapr_lte?: string;
    cdeapr_gt?: string;
    cdeapr_gte?: string;
    cdeapr_contains?: string;
    cdeapr_not_contains?: string;
    cdeapr_starts_with?: string;
    cdeapr_not_starts_with?: string;
    cdeapr_ends_with?: string;
    cdeapr_not_ends_with?: string;
    srvpou?: string;
    srvpou_not?: string;
    srvpou_in?: string[];
    srvpou_not_in?: string[];
    srvpou_lt?: string;
    srvpou_lte?: string;
    srvpou_gt?: string;
    srvpou_gte?: string;
    srvpou_contains?: string;
    srvpou_not_contains?: string;
    srvpou_starts_with?: string;
    srvpou_not_starts_with?: string;
    srvpou_ends_with?: string;
    srvpou_not_ends_with?: string;
    typart?: string;
    typart_not?: string;
    typart_in?: string[];
    typart_not_in?: string[];
    typart_lt?: string;
    typart_lte?: string;
    typart_gt?: string;
    typart_gte?: string;
    typart_contains?: string;
    typart_not_contains?: string;
    typart_starts_with?: string;
    typart_not_starts_with?: string;
    typart_ends_with?: string;
    typart_not_ends_with?: string;
    numser?: string;
    numser_not?: string;
    numser_in?: string[];
    numser_not_in?: string[];
    numser_lt?: string;
    numser_lte?: string;
    numser_gt?: string;
    numser_gte?: string;
    numser_contains?: string;
    numser_not_contains?: string;
    numser_starts_with?: string;
    numser_not_starts_with?: string;
    numser_ends_with?: string;
    numser_not_ends_with?: string;
    pictureUrl?: string;
    pictureUrl_not?: string;
    pictureUrl_in?: string[];
    pictureUrl_not_in?: string[];
    pictureUrl_lt?: string;
    pictureUrl_lte?: string;
    pictureUrl_gt?: string;
    pictureUrl_gte?: string;
    pictureUrl_contains?: string;
    pictureUrl_not_contains?: string;
    pictureUrl_starts_with?: string;
    pictureUrl_not_starts_with?: string;
    pictureUrl_ends_with?: string;
    pictureUrl_not_ends_with?: string;
    detention?: DetentionWhereInput;
}

export class ArticleSubscriptionWhereInput {
    AND?: ArticleSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: ArticleWhereInput;
}

export class ArticleUpdateInput {
    numref?: string;
    nno?: string;
    lib?: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
    detention?: DetentionUpdateOneInput;
}

export class ArticleUpdateManyMutationInput {
    numref?: string;
    nno?: string;
    lib?: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
}

export class ArticleWhereInput {
    AND?: ArticleWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    numref?: string;
    numref_not?: string;
    numref_in?: string[];
    numref_not_in?: string[];
    numref_lt?: string;
    numref_lte?: string;
    numref_gt?: string;
    numref_gte?: string;
    numref_contains?: string;
    numref_not_contains?: string;
    numref_starts_with?: string;
    numref_not_starts_with?: string;
    numref_ends_with?: string;
    numref_not_ends_with?: string;
    nno?: string;
    nno_not?: string;
    nno_in?: string[];
    nno_not_in?: string[];
    nno_lt?: string;
    nno_lte?: string;
    nno_gt?: string;
    nno_gte?: string;
    nno_contains?: string;
    nno_not_contains?: string;
    nno_starts_with?: string;
    nno_not_starts_with?: string;
    nno_ends_with?: string;
    nno_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    untcpt?: number;
    untcpt_not?: number;
    untcpt_in?: number[];
    untcpt_not_in?: number[];
    untcpt_lt?: number;
    untcpt_lte?: number;
    untcpt_gt?: number;
    untcpt_gte?: number;
    untprx?: number;
    untprx_not?: number;
    untprx_in?: number[];
    untprx_not_in?: number[];
    untprx_lt?: number;
    untprx_lte?: number;
    untprx_gt?: number;
    untprx_gte?: number;
    cdeapr?: string;
    cdeapr_not?: string;
    cdeapr_in?: string[];
    cdeapr_not_in?: string[];
    cdeapr_lt?: string;
    cdeapr_lte?: string;
    cdeapr_gt?: string;
    cdeapr_gte?: string;
    cdeapr_contains?: string;
    cdeapr_not_contains?: string;
    cdeapr_starts_with?: string;
    cdeapr_not_starts_with?: string;
    cdeapr_ends_with?: string;
    cdeapr_not_ends_with?: string;
    srvpou?: string;
    srvpou_not?: string;
    srvpou_in?: string[];
    srvpou_not_in?: string[];
    srvpou_lt?: string;
    srvpou_lte?: string;
    srvpou_gt?: string;
    srvpou_gte?: string;
    srvpou_contains?: string;
    srvpou_not_contains?: string;
    srvpou_starts_with?: string;
    srvpou_not_starts_with?: string;
    srvpou_ends_with?: string;
    srvpou_not_ends_with?: string;
    typart?: string;
    typart_not?: string;
    typart_in?: string[];
    typart_not_in?: string[];
    typart_lt?: string;
    typart_lte?: string;
    typart_gt?: string;
    typart_gte?: string;
    typart_contains?: string;
    typart_not_contains?: string;
    typart_starts_with?: string;
    typart_not_starts_with?: string;
    typart_ends_with?: string;
    typart_not_ends_with?: string;
    numser?: string;
    numser_not?: string;
    numser_in?: string[];
    numser_not_in?: string[];
    numser_lt?: string;
    numser_lte?: string;
    numser_gt?: string;
    numser_gte?: string;
    numser_contains?: string;
    numser_not_contains?: string;
    numser_starts_with?: string;
    numser_not_starts_with?: string;
    numser_ends_with?: string;
    numser_not_ends_with?: string;
    pictureUrl?: string;
    pictureUrl_not?: string;
    pictureUrl_in?: string[];
    pictureUrl_not_in?: string[];
    pictureUrl_lt?: string;
    pictureUrl_lte?: string;
    pictureUrl_gt?: string;
    pictureUrl_gte?: string;
    pictureUrl_contains?: string;
    pictureUrl_not_contains?: string;
    pictureUrl_starts_with?: string;
    pictureUrl_not_starts_with?: string;
    pictureUrl_ends_with?: string;
    pictureUrl_not_ends_with?: string;
    detention?: DetentionWhereInput;
}

export class ArticleWhereUniqueInput {
    id?: string;
    numref?: string;
}

export class DetentionCreateInput {
    id?: string;
    lib: string;
    unite: UniteCreateOneWithoutDetentionsInput;
    inventaire?: InventaireCreateManyWithoutDetentionInput;
}

export class DetentionCreateManyWithoutUniteInput {
    create?: DetentionCreateWithoutUniteInput[];
    connect?: DetentionWhereUniqueInput[];
}

export class DetentionCreateOneInput {
    create?: DetentionCreateInput;
    connect?: DetentionWhereUniqueInput;
}

export class DetentionCreateOneWithoutInventaireInput {
    create?: DetentionCreateWithoutInventaireInput;
    connect?: DetentionWhereUniqueInput;
}

export class DetentionCreateWithoutInventaireInput {
    id?: string;
    lib: string;
    unite: UniteCreateOneWithoutDetentionsInput;
}

export class DetentionCreateWithoutUniteInput {
    id?: string;
    lib: string;
    inventaire?: InventaireCreateManyWithoutDetentionInput;
}

export class DetentionScalarWhereInput {
    AND?: DetentionScalarWhereInput[];
    OR?: DetentionScalarWhereInput[];
    NOT?: DetentionScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
}

export class DetentionSubscriptionWhereInput {
    AND?: DetentionSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: DetentionWhereInput;
}

export class DetentionUpdateDataInput {
    lib?: string;
    unite?: UniteUpdateOneRequiredWithoutDetentionsInput;
    inventaire?: InventaireUpdateManyWithoutDetentionInput;
}

export class DetentionUpdateInput {
    lib?: string;
    unite?: UniteUpdateOneRequiredWithoutDetentionsInput;
    inventaire?: InventaireUpdateManyWithoutDetentionInput;
}

export class DetentionUpdateManyDataInput {
    lib?: string;
}

export class DetentionUpdateManyMutationInput {
    lib?: string;
}

export class DetentionUpdateManyWithoutUniteInput {
    create?: DetentionCreateWithoutUniteInput[];
    connect?: DetentionWhereUniqueInput[];
    set?: DetentionWhereUniqueInput[];
    disconnect?: DetentionWhereUniqueInput[];
    delete?: DetentionWhereUniqueInput[];
    update?: DetentionUpdateWithWhereUniqueWithoutUniteInput[];
    updateMany?: DetentionUpdateManyWithWhereNestedInput[];
    deleteMany?: DetentionScalarWhereInput[];
    upsert?: DetentionUpsertWithWhereUniqueWithoutUniteInput[];
}

export class DetentionUpdateManyWithWhereNestedInput {
    where: DetentionScalarWhereInput;
    data: DetentionUpdateManyDataInput;
}

export class DetentionUpdateOneInput {
    create?: DetentionCreateInput;
    connect?: DetentionWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DetentionUpdateDataInput;
    upsert?: DetentionUpsertNestedInput;
}

export class DetentionUpdateOneWithoutInventaireInput {
    create?: DetentionCreateWithoutInventaireInput;
    connect?: DetentionWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DetentionUpdateWithoutInventaireDataInput;
    upsert?: DetentionUpsertWithoutInventaireInput;
}

export class DetentionUpdateWithoutInventaireDataInput {
    lib?: string;
    unite?: UniteUpdateOneRequiredWithoutDetentionsInput;
}

export class DetentionUpdateWithoutUniteDataInput {
    lib?: string;
    inventaire?: InventaireUpdateManyWithoutDetentionInput;
}

export class DetentionUpdateWithWhereUniqueWithoutUniteInput {
    where: DetentionWhereUniqueInput;
    data: DetentionUpdateWithoutUniteDataInput;
}

export class DetentionUpsertNestedInput {
    update: DetentionUpdateDataInput;
    create: DetentionCreateInput;
}

export class DetentionUpsertWithoutInventaireInput {
    update: DetentionUpdateWithoutInventaireDataInput;
    create: DetentionCreateWithoutInventaireInput;
}

export class DetentionUpsertWithWhereUniqueWithoutUniteInput {
    where: DetentionWhereUniqueInput;
    update: DetentionUpdateWithoutUniteDataInput;
    create: DetentionCreateWithoutUniteInput;
}

export class DetentionWhereInput {
    AND?: DetentionWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    unite?: UniteWhereInput;
    inventaire_some?: InventaireWhereInput;
}

export class DetentionWhereUniqueInput {
    id?: string;
}

export class InventaireCreateInput {
    id?: string;
    lib: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
    articles?: ArticleEmbeddedCreateManyInput;
    detention?: DetentionCreateOneWithoutInventaireInput;
}

export class InventaireCreateManyWithoutDetentionInput {
    create?: InventaireCreateWithoutDetentionInput[];
    connect?: InventaireWhereUniqueInput[];
}

export class InventaireCreateWithoutDetentionInput {
    id?: string;
    lib: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
    articles?: ArticleEmbeddedCreateManyInput;
}

export class InventaireScalarWhereInput {
    AND?: InventaireScalarWhereInput[];
    OR?: InventaireScalarWhereInput[];
    NOT?: InventaireScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    dtever?: DateTime;
    dtever_not?: DateTime;
    dtever_in?: DateTime[];
    dtever_not_in?: DateTime[];
    dtever_lt?: DateTime;
    dtever_lte?: DateTime;
    dtever_gt?: DateTime;
    dtever_gte?: DateTime;
    exideb?: string;
    exideb_not?: string;
    exideb_in?: string[];
    exideb_not_in?: string[];
    exideb_lt?: string;
    exideb_lte?: string;
    exideb_gt?: string;
    exideb_gte?: string;
    exideb_contains?: string;
    exideb_not_contains?: string;
    exideb_starts_with?: string;
    exideb_not_starts_with?: string;
    exideb_ends_with?: string;
    exideb_not_ends_with?: string;
    dtecre?: DateTime;
    dtecre_not?: DateTime;
    dtecre_in?: DateTime[];
    dtecre_not_in?: DateTime[];
    dtecre_lt?: DateTime;
    dtecre_lte?: DateTime;
    dtecre_gt?: DateTime;
    dtecre_gte?: DateTime;
    cdevrf?: string;
    cdevrf_not?: string;
    cdevrf_in?: string[];
    cdevrf_not_in?: string[];
    cdevrf_lt?: string;
    cdevrf_lte?: string;
    cdevrf_gt?: string;
    cdevrf_gte?: string;
    cdevrf_contains?: string;
    cdevrf_not_contains?: string;
    cdevrf_starts_with?: string;
    cdevrf_not_starts_with?: string;
    cdevrf_ends_with?: string;
    cdevrf_not_ends_with?: string;
    obs?: string;
    obs_not?: string;
    obs_in?: string[];
    obs_not_in?: string[];
    obs_lt?: string;
    obs_lte?: string;
    obs_gt?: string;
    obs_gte?: string;
    obs_contains?: string;
    obs_not_contains?: string;
    obs_starts_with?: string;
    obs_not_starts_with?: string;
    obs_ends_with?: string;
    obs_not_ends_with?: string;
}

export class InventaireSubscriptionWhereInput {
    AND?: InventaireSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: InventaireWhereInput;
}

export class InventaireUpdateInput {
    lib?: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
    articles?: ArticleEmbeddedUpdateManyInput;
    detention?: DetentionUpdateOneWithoutInventaireInput;
}

export class InventaireUpdateManyDataInput {
    lib?: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
}

export class InventaireUpdateManyMutationInput {
    lib?: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
}

export class InventaireUpdateManyWithoutDetentionInput {
    create?: InventaireCreateWithoutDetentionInput[];
    connect?: InventaireWhereUniqueInput[];
    set?: InventaireWhereUniqueInput[];
    disconnect?: InventaireWhereUniqueInput[];
    delete?: InventaireWhereUniqueInput[];
    update?: InventaireUpdateWithWhereUniqueWithoutDetentionInput[];
    updateMany?: InventaireUpdateManyWithWhereNestedInput[];
    deleteMany?: InventaireScalarWhereInput[];
    upsert?: InventaireUpsertWithWhereUniqueWithoutDetentionInput[];
}

export class InventaireUpdateManyWithWhereNestedInput {
    where: InventaireScalarWhereInput;
    data: InventaireUpdateManyDataInput;
}

export class InventaireUpdateWithoutDetentionDataInput {
    lib?: string;
    dtever?: DateTime;
    exideb?: string;
    cdevrf?: string;
    obs?: string;
    articles?: ArticleEmbeddedUpdateManyInput;
}

export class InventaireUpdateWithWhereUniqueWithoutDetentionInput {
    where: InventaireWhereUniqueInput;
    data: InventaireUpdateWithoutDetentionDataInput;
}

export class InventaireUpsertWithWhereUniqueWithoutDetentionInput {
    where: InventaireWhereUniqueInput;
    update: InventaireUpdateWithoutDetentionDataInput;
    create: InventaireCreateWithoutDetentionInput;
}

export class InventaireWhereInput {
    AND?: InventaireWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    lib?: string;
    lib_not?: string;
    lib_in?: string[];
    lib_not_in?: string[];
    lib_lt?: string;
    lib_lte?: string;
    lib_gt?: string;
    lib_gte?: string;
    lib_contains?: string;
    lib_not_contains?: string;
    lib_starts_with?: string;
    lib_not_starts_with?: string;
    lib_ends_with?: string;
    lib_not_ends_with?: string;
    dtever?: DateTime;
    dtever_not?: DateTime;
    dtever_in?: DateTime[];
    dtever_not_in?: DateTime[];
    dtever_lt?: DateTime;
    dtever_lte?: DateTime;
    dtever_gt?: DateTime;
    dtever_gte?: DateTime;
    exideb?: string;
    exideb_not?: string;
    exideb_in?: string[];
    exideb_not_in?: string[];
    exideb_lt?: string;
    exideb_lte?: string;
    exideb_gt?: string;
    exideb_gte?: string;
    exideb_contains?: string;
    exideb_not_contains?: string;
    exideb_starts_with?: string;
    exideb_not_starts_with?: string;
    exideb_ends_with?: string;
    exideb_not_ends_with?: string;
    dtecre?: DateTime;
    dtecre_not?: DateTime;
    dtecre_in?: DateTime[];
    dtecre_not_in?: DateTime[];
    dtecre_lt?: DateTime;
    dtecre_lte?: DateTime;
    dtecre_gt?: DateTime;
    dtecre_gte?: DateTime;
    cdevrf?: string;
    cdevrf_not?: string;
    cdevrf_in?: string[];
    cdevrf_not_in?: string[];
    cdevrf_lt?: string;
    cdevrf_lte?: string;
    cdevrf_gt?: string;
    cdevrf_gte?: string;
    cdevrf_contains?: string;
    cdevrf_not_contains?: string;
    cdevrf_starts_with?: string;
    cdevrf_not_starts_with?: string;
    cdevrf_ends_with?: string;
    cdevrf_not_ends_with?: string;
    obs?: string;
    obs_not?: string;
    obs_in?: string[];
    obs_not_in?: string[];
    obs_lt?: string;
    obs_lte?: string;
    obs_gt?: string;
    obs_gte?: string;
    obs_contains?: string;
    obs_not_contains?: string;
    obs_starts_with?: string;
    obs_not_starts_with?: string;
    obs_ends_with?: string;
    obs_not_ends_with?: string;
    articles_some?: ArticleEmbeddedWhereInput;
    articles_every?: ArticleEmbeddedRestrictedWhereInput;
    articles_none?: ArticleEmbeddedRestrictedWhereInput;
    detention?: DetentionWhereInput;
}

export class InventaireWhereUniqueInput {
    id?: string;
}

export class LoginInput {
    username: string;
    password: string;
}

export class UniteCreateInput {
    id?: string;
    cdeunt: string;
    dtepjc?: DateTime;
    libunt: string;
    typuni?: string;
    users?: UserCreateManyWithoutUnitesInput;
    detentions?: DetentionCreateManyWithoutUniteInput;
}

export class UniteCreateManyWithoutUsersInput {
    create?: UniteCreateWithoutUsersInput[];
    connect?: UniteWhereUniqueInput[];
}

export class UniteCreateOneWithoutDetentionsInput {
    create?: UniteCreateWithoutDetentionsInput;
    connect?: UniteWhereUniqueInput;
}

export class UniteCreateWithoutDetentionsInput {
    id?: string;
    cdeunt: string;
    dtepjc?: DateTime;
    libunt: string;
    typuni?: string;
    users?: UserCreateManyWithoutUnitesInput;
}

export class UniteCreateWithoutUsersInput {
    id?: string;
    cdeunt: string;
    dtepjc?: DateTime;
    libunt: string;
    typuni?: string;
    detentions?: DetentionCreateManyWithoutUniteInput;
}

export class UniteScalarWhereInput {
    AND?: UniteScalarWhereInput[];
    OR?: UniteScalarWhereInput[];
    NOT?: UniteScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    cdeunt?: string;
    cdeunt_not?: string;
    cdeunt_in?: string[];
    cdeunt_not_in?: string[];
    cdeunt_lt?: string;
    cdeunt_lte?: string;
    cdeunt_gt?: string;
    cdeunt_gte?: string;
    cdeunt_contains?: string;
    cdeunt_not_contains?: string;
    cdeunt_starts_with?: string;
    cdeunt_not_starts_with?: string;
    cdeunt_ends_with?: string;
    cdeunt_not_ends_with?: string;
    dtepjc?: DateTime;
    dtepjc_not?: DateTime;
    dtepjc_in?: DateTime[];
    dtepjc_not_in?: DateTime[];
    dtepjc_lt?: DateTime;
    dtepjc_lte?: DateTime;
    dtepjc_gt?: DateTime;
    dtepjc_gte?: DateTime;
    libunt?: string;
    libunt_not?: string;
    libunt_in?: string[];
    libunt_not_in?: string[];
    libunt_lt?: string;
    libunt_lte?: string;
    libunt_gt?: string;
    libunt_gte?: string;
    libunt_contains?: string;
    libunt_not_contains?: string;
    libunt_starts_with?: string;
    libunt_not_starts_with?: string;
    libunt_ends_with?: string;
    libunt_not_ends_with?: string;
    typuni?: string;
    typuni_not?: string;
    typuni_in?: string[];
    typuni_not_in?: string[];
    typuni_lt?: string;
    typuni_lte?: string;
    typuni_gt?: string;
    typuni_gte?: string;
    typuni_contains?: string;
    typuni_not_contains?: string;
    typuni_starts_with?: string;
    typuni_not_starts_with?: string;
    typuni_ends_with?: string;
    typuni_not_ends_with?: string;
}

export class UniteSubscriptionWhereInput {
    AND?: UniteSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UniteWhereInput;
}

export class UniteUpdateInput {
    cdeunt?: string;
    dtepjc?: DateTime;
    libunt?: string;
    typuni?: string;
    users?: UserUpdateManyWithoutUnitesInput;
    detentions?: DetentionUpdateManyWithoutUniteInput;
}

export class UniteUpdateManyDataInput {
    cdeunt?: string;
    dtepjc?: DateTime;
    libunt?: string;
    typuni?: string;
}

export class UniteUpdateManyMutationInput {
    cdeunt?: string;
    dtepjc?: DateTime;
    libunt?: string;
    typuni?: string;
}

export class UniteUpdateManyWithoutUsersInput {
    create?: UniteCreateWithoutUsersInput[];
    connect?: UniteWhereUniqueInput[];
    set?: UniteWhereUniqueInput[];
    disconnect?: UniteWhereUniqueInput[];
    delete?: UniteWhereUniqueInput[];
    update?: UniteUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: UniteUpdateManyWithWhereNestedInput[];
    deleteMany?: UniteScalarWhereInput[];
    upsert?: UniteUpsertWithWhereUniqueWithoutUsersInput[];
}

export class UniteUpdateManyWithWhereNestedInput {
    where: UniteScalarWhereInput;
    data: UniteUpdateManyDataInput;
}

export class UniteUpdateOneRequiredWithoutDetentionsInput {
    create?: UniteCreateWithoutDetentionsInput;
    connect?: UniteWhereUniqueInput;
    update?: UniteUpdateWithoutDetentionsDataInput;
    upsert?: UniteUpsertWithoutDetentionsInput;
}

export class UniteUpdateWithoutDetentionsDataInput {
    cdeunt?: string;
    dtepjc?: DateTime;
    libunt?: string;
    typuni?: string;
    users?: UserUpdateManyWithoutUnitesInput;
}

export class UniteUpdateWithoutUsersDataInput {
    cdeunt?: string;
    dtepjc?: DateTime;
    libunt?: string;
    typuni?: string;
    detentions?: DetentionUpdateManyWithoutUniteInput;
}

export class UniteUpdateWithWhereUniqueWithoutUsersInput {
    where: UniteWhereUniqueInput;
    data: UniteUpdateWithoutUsersDataInput;
}

export class UniteUpsertWithoutDetentionsInput {
    update: UniteUpdateWithoutDetentionsDataInput;
    create: UniteCreateWithoutDetentionsInput;
}

export class UniteUpsertWithWhereUniqueWithoutUsersInput {
    where: UniteWhereUniqueInput;
    update: UniteUpdateWithoutUsersDataInput;
    create: UniteCreateWithoutUsersInput;
}

export class UniteWhereInput {
    AND?: UniteWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    cdeunt?: string;
    cdeunt_not?: string;
    cdeunt_in?: string[];
    cdeunt_not_in?: string[];
    cdeunt_lt?: string;
    cdeunt_lte?: string;
    cdeunt_gt?: string;
    cdeunt_gte?: string;
    cdeunt_contains?: string;
    cdeunt_not_contains?: string;
    cdeunt_starts_with?: string;
    cdeunt_not_starts_with?: string;
    cdeunt_ends_with?: string;
    cdeunt_not_ends_with?: string;
    dtepjc?: DateTime;
    dtepjc_not?: DateTime;
    dtepjc_in?: DateTime[];
    dtepjc_not_in?: DateTime[];
    dtepjc_lt?: DateTime;
    dtepjc_lte?: DateTime;
    dtepjc_gt?: DateTime;
    dtepjc_gte?: DateTime;
    libunt?: string;
    libunt_not?: string;
    libunt_in?: string[];
    libunt_not_in?: string[];
    libunt_lt?: string;
    libunt_lte?: string;
    libunt_gt?: string;
    libunt_gte?: string;
    libunt_contains?: string;
    libunt_not_contains?: string;
    libunt_starts_with?: string;
    libunt_not_starts_with?: string;
    libunt_ends_with?: string;
    libunt_not_ends_with?: string;
    typuni?: string;
    typuni_not?: string;
    typuni_in?: string[];
    typuni_not_in?: string[];
    typuni_lt?: string;
    typuni_lte?: string;
    typuni_gt?: string;
    typuni_gte?: string;
    typuni_contains?: string;
    typuni_not_contains?: string;
    typuni_starts_with?: string;
    typuni_not_starts_with?: string;
    typuni_ends_with?: string;
    typuni_not_ends_with?: string;
    users_some?: UserWhereInput;
    detentions_some?: DetentionWhereInput;
}

export class UniteWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    identifiant: string;
    password: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
    unites?: UniteCreateManyWithoutUsersInput;
}

export class UserCreateManyWithoutUnitesInput {
    create?: UserCreateWithoutUnitesInput[];
    connect?: UserWhereUniqueInput[];
}

export class UserCreateWithoutUnitesInput {
    id?: string;
    identifiant: string;
    password: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
}

export class UserScalarWhereInput {
    AND?: UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    dtecre?: DateTime;
    dtecre_not?: DateTime;
    dtecre_in?: DateTime[];
    dtecre_not_in?: DateTime[];
    dtecre_lt?: DateTime;
    dtecre_lte?: DateTime;
    dtecre_gt?: DateTime;
    dtecre_gte?: DateTime;
    identifiant?: string;
    identifiant_not?: string;
    identifiant_in?: string[];
    identifiant_not_in?: string[];
    identifiant_lt?: string;
    identifiant_lte?: string;
    identifiant_gt?: string;
    identifiant_gte?: string;
    identifiant_contains?: string;
    identifiant_not_contains?: string;
    identifiant_starts_with?: string;
    identifiant_not_starts_with?: string;
    identifiant_ends_with?: string;
    identifiant_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    nom?: string;
    nom_not?: string;
    nom_in?: string[];
    nom_not_in?: string[];
    nom_lt?: string;
    nom_lte?: string;
    nom_gt?: string;
    nom_gte?: string;
    nom_contains?: string;
    nom_not_contains?: string;
    nom_starts_with?: string;
    nom_not_starts_with?: string;
    nom_ends_with?: string;
    nom_not_ends_with?: string;
    prenom?: string;
    prenom_not?: string;
    prenom_in?: string[];
    prenom_not_in?: string[];
    prenom_lt?: string;
    prenom_lte?: string;
    prenom_gt?: string;
    prenom_gte?: string;
    prenom_contains?: string;
    prenom_not_contains?: string;
    prenom_starts_with?: string;
    prenom_not_starts_with?: string;
    prenom_ends_with?: string;
    prenom_not_ends_with?: string;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[];
    role_not_in?: UserRole[];
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    identifiant?: string;
    password?: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
    unites?: UniteUpdateManyWithoutUsersInput;
}

export class UserUpdateManyDataInput {
    identifiant?: string;
    password?: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
}

export class UserUpdateManyMutationInput {
    identifiant?: string;
    password?: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
}

export class UserUpdateManyWithoutUnitesInput {
    create?: UserCreateWithoutUnitesInput[];
    connect?: UserWhereUniqueInput[];
    set?: UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput[];
    update?: UserUpdateWithWhereUniqueWithoutUnitesInput[];
    updateMany?: UserUpdateManyWithWhereNestedInput[];
    deleteMany?: UserScalarWhereInput[];
    upsert?: UserUpsertWithWhereUniqueWithoutUnitesInput[];
}

export class UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}

export class UserUpdateWithoutUnitesDataInput {
    identifiant?: string;
    password?: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
}

export class UserUpdateWithWhereUniqueWithoutUnitesInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutUnitesDataInput;
}

export class UserUpsertWithWhereUniqueWithoutUnitesInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutUnitesDataInput;
    create: UserCreateWithoutUnitesInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    dtecre?: DateTime;
    dtecre_not?: DateTime;
    dtecre_in?: DateTime[];
    dtecre_not_in?: DateTime[];
    dtecre_lt?: DateTime;
    dtecre_lte?: DateTime;
    dtecre_gt?: DateTime;
    dtecre_gte?: DateTime;
    identifiant?: string;
    identifiant_not?: string;
    identifiant_in?: string[];
    identifiant_not_in?: string[];
    identifiant_lt?: string;
    identifiant_lte?: string;
    identifiant_gt?: string;
    identifiant_gte?: string;
    identifiant_contains?: string;
    identifiant_not_contains?: string;
    identifiant_starts_with?: string;
    identifiant_not_starts_with?: string;
    identifiant_ends_with?: string;
    identifiant_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    nom?: string;
    nom_not?: string;
    nom_in?: string[];
    nom_not_in?: string[];
    nom_lt?: string;
    nom_lte?: string;
    nom_gt?: string;
    nom_gte?: string;
    nom_contains?: string;
    nom_not_contains?: string;
    nom_starts_with?: string;
    nom_not_starts_with?: string;
    nom_ends_with?: string;
    nom_not_ends_with?: string;
    prenom?: string;
    prenom_not?: string;
    prenom_in?: string[];
    prenom_not_in?: string[];
    prenom_lt?: string;
    prenom_lte?: string;
    prenom_gt?: string;
    prenom_gte?: string;
    prenom_contains?: string;
    prenom_not_contains?: string;
    prenom_starts_with?: string;
    prenom_not_starts_with?: string;
    prenom_ends_with?: string;
    prenom_not_ends_with?: string;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[];
    role_not_in?: UserRole[];
    unites_some?: UniteWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    identifiant?: string;
}

export interface Node {
    id: string;
}

export class AggregateArticle {
    count: number;
}

export class AggregateDetention {
    count: number;
}

export class AggregateInventaire {
    count: number;
}

export class AggregateUnite {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class Article implements Node {
    id: string;
    createdAt?: DateTime;
    numref: string;
    nno: string;
    lib: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
    detention?: Detention;
}

export class ArticleConnection {
    pageInfo: PageInfo;
    edges: ArticleEdge[];
    aggregate: AggregateArticle;
}

export class ArticleEdge {
    node: Article;
    cursor: string;
}

export class ArticleEmbedded {
    article_id: string;
    nno: string;
    numref: string;
    lib: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
    detention: Detention;
}

export class ArticlePreviousValues {
    id: string;
    createdAt?: DateTime;
    numref: string;
    nno: string;
    lib: string;
    untcpt?: number;
    untprx?: number;
    cdeapr?: string;
    srvpou?: string;
    typart?: string;
    numser?: string;
    pictureUrl?: string;
}

export class ArticleSubscriptionPayload {
    mutation: MutationType;
    node?: Article;
    updatedFields?: string[];
    previousValues?: ArticlePreviousValues;
}

export class Auth {
    access_token?: string;
}

export class BatchPayload {
    count: Long;
}

export class Detention implements Node {
    id: string;
    lib: string;
    unite: Unite;
    inventaire?: Inventaire[];
}

export class DetentionConnection {
    pageInfo: PageInfo;
    edges: DetentionEdge[];
    aggregate: AggregateDetention;
}

export class DetentionEdge {
    node: Detention;
    cursor: string;
}

export class DetentionPreviousValues {
    id: string;
    lib: string;
}

export class DetentionSubscriptionPayload {
    mutation: MutationType;
    node?: Detention;
    updatedFields?: string[];
    previousValues?: DetentionPreviousValues;
}

export class Inventaire implements Node {
    id: string;
    lib: string;
    dtever?: DateTime;
    exideb?: string;
    dtecre?: DateTime;
    cdevrf?: string;
    obs?: string;
    articles?: ArticleEmbedded[];
    detention?: Detention;
}

export class InventaireConnection {
    pageInfo: PageInfo;
    edges: InventaireEdge[];
    aggregate: AggregateInventaire;
}

export class InventaireEdge {
    node: Inventaire;
    cursor: string;
}

export class InventairePreviousValues {
    id: string;
    lib: string;
    dtever?: DateTime;
    exideb?: string;
    dtecre?: DateTime;
    cdevrf?: string;
    obs?: string;
}

export class InventaireSubscriptionPayload {
    mutation: MutationType;
    node?: Inventaire;
    updatedFields?: string[];
    previousValues?: InventairePreviousValues;
}

export abstract class IMutation {
    abstract login(data: LoginInput): Auth | Promise<Auth>;

    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createArticle(data: ArticleCreateInput): Article | Promise<Article>;

    abstract createUnite(data: UniteCreateInput): Unite | Promise<Unite>;

    abstract createInventaire(data: InventaireCreateInput): Inventaire | Promise<Inventaire>;

    abstract createDetention(data: DetentionCreateInput): Detention | Promise<Detention>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateArticle(data: ArticleUpdateInput, where: ArticleWhereUniqueInput): Article | Promise<Article>;

    abstract updateUnite(data: UniteUpdateInput, where: UniteWhereUniqueInput): Unite | Promise<Unite>;

    abstract updateInventaire(data: InventaireUpdateInput, where: InventaireWhereUniqueInput): Inventaire | Promise<Inventaire>;

    abstract updateDetention(data: DetentionUpdateInput, where: DetentionWhereUniqueInput): Detention | Promise<Detention>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteArticle(where: ArticleWhereUniqueInput): Article | Promise<Article>;

    abstract deleteUnite(where: UniteWhereUniqueInput): Unite | Promise<Unite>;

    abstract deleteInventaire(where: InventaireWhereUniqueInput): Inventaire | Promise<Inventaire>;

    abstract deleteDetention(where: DetentionWhereUniqueInput): Detention | Promise<Detention>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertArticle(where: ArticleWhereUniqueInput, create: ArticleCreateInput, update: ArticleUpdateInput): Article | Promise<Article>;

    abstract upsertUnite(where: UniteWhereUniqueInput, create: UniteCreateInput, update: UniteUpdateInput): Unite | Promise<Unite>;

    abstract upsertInventaire(where: InventaireWhereUniqueInput, create: InventaireCreateInput, update: InventaireUpdateInput): Inventaire | Promise<Inventaire>;

    abstract upsertDetention(where: DetentionWhereUniqueInput, create: DetentionCreateInput, update: DetentionUpdateInput): Detention | Promise<Detention>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyArticles(data: ArticleUpdateManyMutationInput, where?: ArticleWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyUnites(data: UniteUpdateManyMutationInput, where?: UniteWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyInventaires(data: InventaireUpdateManyMutationInput, where?: InventaireWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyDetentions(data: DetentionUpdateManyMutationInput, where?: DetentionWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyArticles(where?: ArticleWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUnites(where?: UniteWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyInventaires(where?: InventaireWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyDetentions(where?: DetentionWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract articles(where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Article[] | Promise<Article[]>;

    abstract unites(where?: UniteWhereInput, orderBy?: UniteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Unite[] | Promise<Unite[]>;

    abstract inventaires(where?: InventaireWhereInput, orderBy?: InventaireOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Inventaire[] | Promise<Inventaire[]>;

    abstract detentions(where?: DetentionWhereInput, orderBy?: DetentionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Detention[] | Promise<Detention[]>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract article(where: ArticleWhereUniqueInput): Article | Promise<Article>;

    abstract unite(where: UniteWhereUniqueInput): Unite | Promise<Unite>;

    abstract inventaire(where: InventaireWhereUniqueInput): Inventaire | Promise<Inventaire>;

    abstract detention(where: DetentionWhereUniqueInput): Detention | Promise<Detention>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract articlesConnection(where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ArticleConnection | Promise<ArticleConnection>;

    abstract unitesConnection(where?: UniteWhereInput, orderBy?: UniteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UniteConnection | Promise<UniteConnection>;

    abstract inventairesConnection(where?: InventaireWhereInput, orderBy?: InventaireOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): InventaireConnection | Promise<InventaireConnection>;

    abstract detentionsConnection(where?: DetentionWhereInput, orderBy?: DetentionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): DetentionConnection | Promise<DetentionConnection>;

    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract article(where?: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload | Promise<ArticleSubscriptionPayload>;

    abstract unite(where?: UniteSubscriptionWhereInput): UniteSubscriptionPayload | Promise<UniteSubscriptionPayload>;

    abstract inventaire(where?: InventaireSubscriptionWhereInput): InventaireSubscriptionPayload | Promise<InventaireSubscriptionPayload>;

    abstract detention(where?: DetentionSubscriptionWhereInput): DetentionSubscriptionPayload | Promise<DetentionSubscriptionPayload>;
}

export class Unite implements Node {
    id: string;
    cdeunt: string;
    dtepjc?: DateTime;
    libunt: string;
    typuni?: string;
    users?: User[];
    detentions?: Detention[];
}

export class UniteConnection {
    pageInfo: PageInfo;
    edges: UniteEdge[];
    aggregate: AggregateUnite;
}

export class UniteEdge {
    node: Unite;
    cursor: string;
}

export class UnitePreviousValues {
    id: string;
    cdeunt: string;
    dtepjc?: DateTime;
    libunt: string;
    typuni?: string;
}

export class UniteSubscriptionPayload {
    mutation: MutationType;
    node?: Unite;
    updatedFields?: string[];
    previousValues?: UnitePreviousValues;
}

export class User implements Node {
    id: string;
    dtecre?: DateTime;
    identifiant: string;
    password: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
    unites?: Unite[];
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    dtecre?: DateTime;
    identifiant: string;
    password: string;
    nom?: string;
    prenom?: string;
    role?: UserRole;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
export type Upload = any;
