import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import 'normalize.css';

import './index.css';
import Root from './Root';
import apolloClient from './apolloClient';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);
