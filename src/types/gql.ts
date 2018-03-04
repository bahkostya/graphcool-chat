/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface AuthenticateUserMutationVariables {
    facebookToken: string;
}

export interface AuthenticateUserMutation {
    // facebookAuthentication
    authenticateUser: {
        token: string;
    };
}

export interface LoggedInUserQuery {
    // loggedInUser
    loggedInUser: {
        id: string;
        photo: string | null;
        firstName: string | null;
    } | null;
}
