import { LoggedInUserQuery } from '../types/gql';

export default function checkIfLoggedIn(data: LoggedInUserQuery) {
    return data.loggedInUser && data.loggedInUser.id && data.loggedInUser.id !== '';
}
