/* tslint:disable */

export type DateTime = any;
/* An object with an ID */
export interface Node {
    id: string /* The id of the object. */;
}

export interface Query {
    allMessages: Message[];
    allUsers: User[];
    _allMessagesMeta: _QueryMeta;
    _allUsersMeta: _QueryMeta;
    Message?: Message | null;
    User?: User | null;
    loggedInUser?: LoggedInUserPayload | null /* loggedInUser */;
    user?: User | null;
    node?: Node | null /* Fetches an object given its ID */;
}

export interface Message extends Node {
    author: User;
    createdAt: DateTime;
    id: string;
    text: string;
}

export interface User extends Node {
    createdAt: DateTime;
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    id: string;
    messages: Message[];
    photo?: string | null;
    updatedAt: DateTime;
    _messagesMeta: _QueryMeta /* Meta information about the query. */;
}
/* Meta information about the query. */
export interface _QueryMeta {
    count: number;
}
/* LoggedInUserPayload */
export interface LoggedInUserPayload {
    id: string;
    firstName?: string | null;
    photo?: string | null;
}

export interface Mutation {
    createMessage?: Message | null;
    updateMessage?: Message | null;
    updateUser?: User | null;
    updateOrCreateMessage?: Message | null;
    updateOrCreateUser?: User | null;
    deleteMessage?: Message | null;
    deleteUser?: User | null;
    addToUserMessages?: AddToUserMessagesPayload | null;
    createUser?: User | null;
    authenticateUser: AuthenticateUserPayload /* facebookAuthentication */;
}

export interface AddToUserMessagesPayload {
    authorUser?: User | null;
    messagesMessage?: Message | null;
}
/* AuthenticateUserPayload */
export interface AuthenticateUserPayload {
    id: string;
    token: string;
}

export interface Subscription {
    Message?: MessageSubscriptionPayload | null;
    User?: UserSubscriptionPayload | null;
}

export interface MessageSubscriptionPayload {
    mutation: _ModelMutationType;
    node?: Message | null;
    updatedFields: string[];
    previousValues?: MessagePreviousValues | null;
}

export interface MessagePreviousValues {
    createdAt: DateTime;
    id: string;
    text: string;
}

export interface UserSubscriptionPayload {
    mutation: _ModelMutationType;
    node?: User | null;
    updatedFields: string[];
    previousValues?: UserPreviousValues | null;
}

export interface UserPreviousValues {
    createdAt: DateTime;
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    id: string;
    photo?: string | null;
    updatedAt: DateTime;
}

export interface MessageFilter {
    AND: MessageFilter[] /* Logical AND on all given filters. */;
    OR: MessageFilter[] /* Logical OR on all given filters. */;
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null /* All values that are not equal to given value. */;
    createdAt_in: DateTime[] /* All values that are contained in given list. */;
    createdAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    createdAt_lt?: DateTime | null /* All values less than the given value. */;
    createdAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    createdAt_gt?: DateTime | null /* All values greater than the given value. */;
    createdAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    id?: string | null;
    id_not?: string | null /* All values that are not equal to given value. */;
    id_in: string[] /* All values that are contained in given list. */;
    id_not_in: string[] /* All values that are not contained in given list. */;
    id_lt?: string | null /* All values less than the given value. */;
    id_lte?: string | null /* All values less than or equal the given value. */;
    id_gt?: string | null /* All values greater than the given value. */;
    id_gte?: string | null /* All values greater than or equal the given value. */;
    id_contains?: string | null /* All values containing the given string. */;
    id_not_contains?: string | null /* All values not containing the given string. */;
    id_starts_with?: string | null /* All values starting with the given string. */;
    id_not_starts_with?: string | null /* All values not starting with the given string. */;
    id_ends_with?: string | null /* All values ending with the given string. */;
    id_not_ends_with?: string | null /* All values not ending with the given string. */;
    text?: string | null;
    text_not?: string | null /* All values that are not equal to given value. */;
    text_in: string[] /* All values that are contained in given list. */;
    text_not_in: string[] /* All values that are not contained in given list. */;
    text_lt?: string | null /* All values less than the given value. */;
    text_lte?: string | null /* All values less than or equal the given value. */;
    text_gt?: string | null /* All values greater than the given value. */;
    text_gte?: string | null /* All values greater than or equal the given value. */;
    text_contains?: string | null /* All values containing the given string. */;
    text_not_contains?: string | null /* All values not containing the given string. */;
    text_starts_with?: string | null /* All values starting with the given string. */;
    text_not_starts_with?: string | null /* All values not starting with the given string. */;
    text_ends_with?: string | null /* All values ending with the given string. */;
    text_not_ends_with?: string | null /* All values not ending with the given string. */;
    author?: UserFilter | null;
}

export interface UserFilter {
    AND: UserFilter[] /* Logical AND on all given filters. */;
    OR: UserFilter[] /* Logical OR on all given filters. */;
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null /* All values that are not equal to given value. */;
    createdAt_in: DateTime[] /* All values that are contained in given list. */;
    createdAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    createdAt_lt?: DateTime | null /* All values less than the given value. */;
    createdAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    createdAt_gt?: DateTime | null /* All values greater than the given value. */;
    createdAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    email?: string | null;
    email_not?: string | null /* All values that are not equal to given value. */;
    email_in: string[] /* All values that are contained in given list. */;
    email_not_in: string[] /* All values that are not contained in given list. */;
    email_lt?: string | null /* All values less than the given value. */;
    email_lte?: string | null /* All values less than or equal the given value. */;
    email_gt?: string | null /* All values greater than the given value. */;
    email_gte?: string | null /* All values greater than or equal the given value. */;
    email_contains?: string | null /* All values containing the given string. */;
    email_not_contains?: string | null /* All values not containing the given string. */;
    email_starts_with?: string | null /* All values starting with the given string. */;
    email_not_starts_with?: string | null /* All values not starting with the given string. */;
    email_ends_with?: string | null /* All values ending with the given string. */;
    email_not_ends_with?: string | null /* All values not ending with the given string. */;
    facebookUserId?: string | null;
    facebookUserId_not?: string | null /* All values that are not equal to given value. */;
    facebookUserId_in: string[] /* All values that are contained in given list. */;
    facebookUserId_not_in: string[] /* All values that are not contained in given list. */;
    facebookUserId_lt?: string | null /* All values less than the given value. */;
    facebookUserId_lte?: string | null /* All values less than or equal the given value. */;
    facebookUserId_gt?: string | null /* All values greater than the given value. */;
    facebookUserId_gte?: string | null /* All values greater than or equal the given value. */;
    facebookUserId_contains?: string | null /* All values containing the given string. */;
    facebookUserId_not_contains?: string | null /* All values not containing the given string. */;
    facebookUserId_starts_with?: string | null /* All values starting with the given string. */;
    facebookUserId_not_starts_with?: string | null /* All values not starting with the given string. */;
    facebookUserId_ends_with?: string | null /* All values ending with the given string. */;
    facebookUserId_not_ends_with?: string | null /* All values not ending with the given string. */;
    firstName?: string | null;
    firstName_not?: string | null /* All values that are not equal to given value. */;
    firstName_in: string[] /* All values that are contained in given list. */;
    firstName_not_in: string[] /* All values that are not contained in given list. */;
    firstName_lt?: string | null /* All values less than the given value. */;
    firstName_lte?: string | null /* All values less than or equal the given value. */;
    firstName_gt?: string | null /* All values greater than the given value. */;
    firstName_gte?: string | null /* All values greater than or equal the given value. */;
    firstName_contains?: string | null /* All values containing the given string. */;
    firstName_not_contains?: string | null /* All values not containing the given string. */;
    firstName_starts_with?: string | null /* All values starting with the given string. */;
    firstName_not_starts_with?: string | null /* All values not starting with the given string. */;
    firstName_ends_with?: string | null /* All values ending with the given string. */;
    firstName_not_ends_with?: string | null /* All values not ending with the given string. */;
    id?: string | null;
    id_not?: string | null /* All values that are not equal to given value. */;
    id_in: string[] /* All values that are contained in given list. */;
    id_not_in: string[] /* All values that are not contained in given list. */;
    id_lt?: string | null /* All values less than the given value. */;
    id_lte?: string | null /* All values less than or equal the given value. */;
    id_gt?: string | null /* All values greater than the given value. */;
    id_gte?: string | null /* All values greater than or equal the given value. */;
    id_contains?: string | null /* All values containing the given string. */;
    id_not_contains?: string | null /* All values not containing the given string. */;
    id_starts_with?: string | null /* All values starting with the given string. */;
    id_not_starts_with?: string | null /* All values not starting with the given string. */;
    id_ends_with?: string | null /* All values ending with the given string. */;
    id_not_ends_with?: string | null /* All values not ending with the given string. */;
    photo?: string | null;
    photo_not?: string | null /* All values that are not equal to given value. */;
    photo_in: string[] /* All values that are contained in given list. */;
    photo_not_in: string[] /* All values that are not contained in given list. */;
    photo_lt?: string | null /* All values less than the given value. */;
    photo_lte?: string | null /* All values less than or equal the given value. */;
    photo_gt?: string | null /* All values greater than the given value. */;
    photo_gte?: string | null /* All values greater than or equal the given value. */;
    photo_contains?: string | null /* All values containing the given string. */;
    photo_not_contains?: string | null /* All values not containing the given string. */;
    photo_starts_with?: string | null /* All values starting with the given string. */;
    photo_not_starts_with?: string | null /* All values not starting with the given string. */;
    photo_ends_with?: string | null /* All values ending with the given string. */;
    photo_not_ends_with?: string | null /* All values not ending with the given string. */;
    updatedAt?: DateTime | null;
    updatedAt_not?: DateTime | null /* All values that are not equal to given value. */;
    updatedAt_in: DateTime[] /* All values that are contained in given list. */;
    updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    updatedAt_lt?: DateTime | null /* All values less than the given value. */;
    updatedAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    updatedAt_gt?: DateTime | null /* All values greater than the given value. */;
    updatedAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    messages_every?: MessageFilter | null;
    messages_some?: MessageFilter | null;
    messages_none?: MessageFilter | null;
}

export interface MessageauthorUser {
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    photo?: string | null;
    messagesIds: string[];
    messages: UsermessagesMessage[];
}

export interface UsermessagesMessage {
    text: string;
}

export interface UpdateMessage {
    id: string;
    text?: string | null;
    authorId?: string | null;
    author?: MessageauthorUser | null;
}

export interface CreateMessage {
    text: string;
    authorId?: string | null;
    author?: MessageauthorUser | null;
}

export interface UpdateUser {
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    id: string;
    photo?: string | null;
    messagesIds: string[];
    messages: UsermessagesMessage[];
}

export interface CreateUser {
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    photo?: string | null;
    messagesIds: string[];
    messages: UsermessagesMessage[];
}

export interface MessageSubscriptionFilter {
    AND: MessageSubscriptionFilter[] /* Logical AND on all given filters. */;
    OR: MessageSubscriptionFilter[] /* Logical OR on all given filters. */;
    mutation_in: _ModelMutationType[] /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */;
    updatedFields_contains?:
        | string
        | null /* The subscription event gets only dispatched when one of the updated fields names is included in this list */;
    updatedFields_contains_every: string[] /* The subscription event gets only dispatched when all of the field names included in this list have been updated */;
    updatedFields_contains_some: string[] /* The subscription event gets only dispatched when some of the field names included in this list have been updated */;
    node?: MessageSubscriptionFilterNode | null;
}

export interface MessageSubscriptionFilterNode {
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null /* All values that are not equal to given value. */;
    createdAt_in: DateTime[] /* All values that are contained in given list. */;
    createdAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    createdAt_lt?: DateTime | null /* All values less than the given value. */;
    createdAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    createdAt_gt?: DateTime | null /* All values greater than the given value. */;
    createdAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    id?: string | null;
    id_not?: string | null /* All values that are not equal to given value. */;
    id_in: string[] /* All values that are contained in given list. */;
    id_not_in: string[] /* All values that are not contained in given list. */;
    id_lt?: string | null /* All values less than the given value. */;
    id_lte?: string | null /* All values less than or equal the given value. */;
    id_gt?: string | null /* All values greater than the given value. */;
    id_gte?: string | null /* All values greater than or equal the given value. */;
    id_contains?: string | null /* All values containing the given string. */;
    id_not_contains?: string | null /* All values not containing the given string. */;
    id_starts_with?: string | null /* All values starting with the given string. */;
    id_not_starts_with?: string | null /* All values not starting with the given string. */;
    id_ends_with?: string | null /* All values ending with the given string. */;
    id_not_ends_with?: string | null /* All values not ending with the given string. */;
    text?: string | null;
    text_not?: string | null /* All values that are not equal to given value. */;
    text_in: string[] /* All values that are contained in given list. */;
    text_not_in: string[] /* All values that are not contained in given list. */;
    text_lt?: string | null /* All values less than the given value. */;
    text_lte?: string | null /* All values less than or equal the given value. */;
    text_gt?: string | null /* All values greater than the given value. */;
    text_gte?: string | null /* All values greater than or equal the given value. */;
    text_contains?: string | null /* All values containing the given string. */;
    text_not_contains?: string | null /* All values not containing the given string. */;
    text_starts_with?: string | null /* All values starting with the given string. */;
    text_not_starts_with?: string | null /* All values not starting with the given string. */;
    text_ends_with?: string | null /* All values ending with the given string. */;
    text_not_ends_with?: string | null /* All values not ending with the given string. */;
    author?: UserFilter | null;
}

export interface UserSubscriptionFilter {
    AND: UserSubscriptionFilter[] /* Logical AND on all given filters. */;
    OR: UserSubscriptionFilter[] /* Logical OR on all given filters. */;
    mutation_in: _ModelMutationType[] /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */;
    updatedFields_contains?:
        | string
        | null /* The subscription event gets only dispatched when one of the updated fields names is included in this list */;
    updatedFields_contains_every: string[] /* The subscription event gets only dispatched when all of the field names included in this list have been updated */;
    updatedFields_contains_some: string[] /* The subscription event gets only dispatched when some of the field names included in this list have been updated */;
    node?: UserSubscriptionFilterNode | null;
}

export interface UserSubscriptionFilterNode {
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null /* All values that are not equal to given value. */;
    createdAt_in: DateTime[] /* All values that are contained in given list. */;
    createdAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    createdAt_lt?: DateTime | null /* All values less than the given value. */;
    createdAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    createdAt_gt?: DateTime | null /* All values greater than the given value. */;
    createdAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    email?: string | null;
    email_not?: string | null /* All values that are not equal to given value. */;
    email_in: string[] /* All values that are contained in given list. */;
    email_not_in: string[] /* All values that are not contained in given list. */;
    email_lt?: string | null /* All values less than the given value. */;
    email_lte?: string | null /* All values less than or equal the given value. */;
    email_gt?: string | null /* All values greater than the given value. */;
    email_gte?: string | null /* All values greater than or equal the given value. */;
    email_contains?: string | null /* All values containing the given string. */;
    email_not_contains?: string | null /* All values not containing the given string. */;
    email_starts_with?: string | null /* All values starting with the given string. */;
    email_not_starts_with?: string | null /* All values not starting with the given string. */;
    email_ends_with?: string | null /* All values ending with the given string. */;
    email_not_ends_with?: string | null /* All values not ending with the given string. */;
    facebookUserId?: string | null;
    facebookUserId_not?: string | null /* All values that are not equal to given value. */;
    facebookUserId_in: string[] /* All values that are contained in given list. */;
    facebookUserId_not_in: string[] /* All values that are not contained in given list. */;
    facebookUserId_lt?: string | null /* All values less than the given value. */;
    facebookUserId_lte?: string | null /* All values less than or equal the given value. */;
    facebookUserId_gt?: string | null /* All values greater than the given value. */;
    facebookUserId_gte?: string | null /* All values greater than or equal the given value. */;
    facebookUserId_contains?: string | null /* All values containing the given string. */;
    facebookUserId_not_contains?: string | null /* All values not containing the given string. */;
    facebookUserId_starts_with?: string | null /* All values starting with the given string. */;
    facebookUserId_not_starts_with?: string | null /* All values not starting with the given string. */;
    facebookUserId_ends_with?: string | null /* All values ending with the given string. */;
    facebookUserId_not_ends_with?: string | null /* All values not ending with the given string. */;
    firstName?: string | null;
    firstName_not?: string | null /* All values that are not equal to given value. */;
    firstName_in: string[] /* All values that are contained in given list. */;
    firstName_not_in: string[] /* All values that are not contained in given list. */;
    firstName_lt?: string | null /* All values less than the given value. */;
    firstName_lte?: string | null /* All values less than or equal the given value. */;
    firstName_gt?: string | null /* All values greater than the given value. */;
    firstName_gte?: string | null /* All values greater than or equal the given value. */;
    firstName_contains?: string | null /* All values containing the given string. */;
    firstName_not_contains?: string | null /* All values not containing the given string. */;
    firstName_starts_with?: string | null /* All values starting with the given string. */;
    firstName_not_starts_with?: string | null /* All values not starting with the given string. */;
    firstName_ends_with?: string | null /* All values ending with the given string. */;
    firstName_not_ends_with?: string | null /* All values not ending with the given string. */;
    id?: string | null;
    id_not?: string | null /* All values that are not equal to given value. */;
    id_in: string[] /* All values that are contained in given list. */;
    id_not_in: string[] /* All values that are not contained in given list. */;
    id_lt?: string | null /* All values less than the given value. */;
    id_lte?: string | null /* All values less than or equal the given value. */;
    id_gt?: string | null /* All values greater than the given value. */;
    id_gte?: string | null /* All values greater than or equal the given value. */;
    id_contains?: string | null /* All values containing the given string. */;
    id_not_contains?: string | null /* All values not containing the given string. */;
    id_starts_with?: string | null /* All values starting with the given string. */;
    id_not_starts_with?: string | null /* All values not starting with the given string. */;
    id_ends_with?: string | null /* All values ending with the given string. */;
    id_not_ends_with?: string | null /* All values not ending with the given string. */;
    photo?: string | null;
    photo_not?: string | null /* All values that are not equal to given value. */;
    photo_in: string[] /* All values that are contained in given list. */;
    photo_not_in: string[] /* All values that are not contained in given list. */;
    photo_lt?: string | null /* All values less than the given value. */;
    photo_lte?: string | null /* All values less than or equal the given value. */;
    photo_gt?: string | null /* All values greater than the given value. */;
    photo_gte?: string | null /* All values greater than or equal the given value. */;
    photo_contains?: string | null /* All values containing the given string. */;
    photo_not_contains?: string | null /* All values not containing the given string. */;
    photo_starts_with?: string | null /* All values starting with the given string. */;
    photo_not_starts_with?: string | null /* All values not starting with the given string. */;
    photo_ends_with?: string | null /* All values ending with the given string. */;
    photo_not_ends_with?: string | null /* All values not ending with the given string. */;
    updatedAt?: DateTime | null;
    updatedAt_not?: DateTime | null /* All values that are not equal to given value. */;
    updatedAt_in: DateTime[] /* All values that are contained in given list. */;
    updatedAt_not_in: DateTime[] /* All values that are not contained in given list. */;
    updatedAt_lt?: DateTime | null /* All values less than the given value. */;
    updatedAt_lte?: DateTime | null /* All values less than or equal the given value. */;
    updatedAt_gt?: DateTime | null /* All values greater than the given value. */;
    updatedAt_gte?: DateTime | null /* All values greater than or equal the given value. */;
    messages_every?: MessageFilter | null;
    messages_some?: MessageFilter | null;
    messages_none?: MessageFilter | null;
}
export interface AllMessagesQueryArgs {
    filter?: MessageFilter | null;
    orderBy?: MessageOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface AllUsersQueryArgs {
    filter?: UserFilter | null;
    orderBy?: UserOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface AllMessagesMetaQueryArgs {
    filter?: MessageFilter | null;
    orderBy?: MessageOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface AllUsersMetaQueryArgs {
    filter?: UserFilter | null;
    orderBy?: UserOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface MessageQueryArgs {
    id?: string | null;
}
export interface UserQueryArgs {
    facebookUserId?: string | null;
    id?: string | null;
}
export interface NodeQueryArgs {
    id: string /* The ID of an object */;
}
export interface AuthorMessageArgs {
    filter?: UserFilter | null;
}
export interface MessagesUserArgs {
    filter?: MessageFilter | null;
    orderBy?: MessageOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface MessagesMetaUserArgs {
    filter?: MessageFilter | null;
    orderBy?: MessageOrderBy | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
}
export interface CreateMessageMutationArgs {
    text: string;
    authorId?: string | null;
    author?: MessageauthorUser | null;
}
export interface UpdateMessageMutationArgs {
    id: string;
    text?: string | null;
    authorId?: string | null;
    author?: MessageauthorUser | null;
}
export interface UpdateUserMutationArgs {
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    id: string;
    photo?: string | null;
    messagesIds: string[];
    messages: UsermessagesMessage[];
}
export interface UpdateOrCreateMessageMutationArgs {
    update: UpdateMessage;
    create: CreateMessage;
}
export interface UpdateOrCreateUserMutationArgs {
    update: UpdateUser;
    create: CreateUser;
}
export interface DeleteMessageMutationArgs {
    id: string;
}
export interface DeleteUserMutationArgs {
    id: string;
}
export interface AddToUserMessagesMutationArgs {
    messagesMessageId: string;
    authorUserId: string;
}
export interface CreateUserMutationArgs {
    email?: string | null;
    facebookUserId?: string | null;
    firstName?: string | null;
    photo?: string | null;
    messagesIds: string[];
    messages: UsermessagesMessage[];
}
export interface AuthenticateUserMutationArgs {
    facebookToken: string;
}
export interface MessageSubscriptionArgs {
    filter?: MessageSubscriptionFilter | null;
}
export interface UserSubscriptionArgs {
    filter?: UserSubscriptionFilter | null;
}

export type MessageOrderBy = 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'text_ASC' | 'text_DESC';

export type UserOrderBy =
    | 'createdAt_ASC'
    | 'createdAt_DESC'
    | 'email_ASC'
    | 'email_DESC'
    | 'facebookUserId_ASC'
    | 'facebookUserId_DESC'
    | 'firstName_ASC'
    | 'firstName_DESC'
    | 'id_ASC'
    | 'id_DESC'
    | 'photo_ASC'
    | 'photo_DESC'
    | 'updatedAt_ASC'
    | 'updatedAt_DESC';

export type _ModelMutationType = 'CREATED' | 'UPDATED' | 'DELETED';
