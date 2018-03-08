/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface AllMessagesQuery {
    allMessages: Array<{
        id: string;
        createdAt: string;
        text: string;
        author: {
            id: string;
            firstName: string;
            photo: string;
        };
    }>;
}

export interface AuthenticateUserMutationVariables {
    facebookToken: string;
}

export interface AuthenticateUserMutation {
    // facebookAuthentication
    authenticateUser: {
        token: string;
    };
}

export interface CreateMessageMutationVariables {
    text: string;
    authorId?: string | null;
}

export interface CreateMessageMutation {
    createMessage: {
        id: string;
        text: string;
        createdAt: string;
        author: {
            id: string;
            photo: string;
            firstName: string;
        };
    } | null;
}

export interface LoggedInUserQuery {
    // loggedInUser
    loggedInUser: {
        id: string;
        photo: string | null;
        firstName: string | null;
    } | null;
}
