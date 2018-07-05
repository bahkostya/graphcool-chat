import { LoggedInUserPayload } from '../types/api';

export default function checkIfLoggedIn(loggedInUser: LoggedInUserPayload | null) {
    return loggedInUser && loggedInUser.id && loggedInUser.id !== '';
}
