import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { OperationDefinitionNode } from 'graphql';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';

const serviceId = process.env.REACT_APP_GRAPHCOOL_SERVICE_ID;

const httpLink = new HttpLink({ uri: `https://api.graph.cool/simple/v1/${serviceId}` });

const wsLink = new WebSocketLink({
    uri: `wss://subscriptions.graph.cool/v1/${serviceId}`,
    options: {
        reconnect: true,
    },
});

const middlewareLink = setContext(() => ({
    headers: {
        authorization: localStorage.getItem('graphcoolToken')
            ? `Bearer ${localStorage.getItem('graphcoolToken')}`
            : null,
    },
}));

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    middlewareLink.concat(httpLink)
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
