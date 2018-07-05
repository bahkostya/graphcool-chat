import { fromEvent, FunctionEvent } from 'graphcool-lib';
import { GraphQLClient } from 'graphql-request';

import loggedInUser from './facebook/loggedInUser';

interface Message {
    id: string;
    createdAt: string;
    text: string;
    author: {
        id: string;
        firstName: string | null;
        photo: string | null;
    };
}

export default async (event: FunctionEvent<Message[]>) => {
    try {
        // no logged in user
        const user = await loggedInUser(event);

        return {
            data: event.data.map(message =>
                Object.assign({}, message, { isAuthor: message.author.id === user.data.id })
            ),
        };
    } catch (e) {
        return { error: 'An unexpected error occured.' };
    }
};
