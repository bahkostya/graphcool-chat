import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import InputControls from '../InputControls/InputControls';
import Message from '../Message/Message';
import loggedInUserQuery from '../../graphql/loggedInUserQuery.graphql';
import allMessagesQuery from '../../graphql/allMessagesQuery.graphql';
import { LoggedInUserQuery, AllMessagesQuery } from '../../types/gql';
import checkIfLoggedIn from '../../utils/checkIfLoggedIn';
import './ChatPage.css';

interface MappedProps {
    user: QueryProps & LoggedInUserQuery;
    messages: QueryProps & AllMessagesQuery;
}

type Props = MappedProps & RouteComponentProps<{}>;

class ChatPage extends React.Component<Props> {
    endRef: HTMLDivElement;

    initRef = (el: HTMLDivElement) => (this.endRef = el);

    render() {
        const { messages, user } = this.props;

        if (user.loading) {
            return null;
        }

        if (!checkIfLoggedIn(user.loggedInUser)) {
            return <Redirect to="/login" />;
        }

        console.log(this.props);

        const { id, photo, firstName } = user.loggedInUser!;

        return (
            <div className="chat-page">
                <Header {...{ id, photo, firstName }} />
                <div className="chat-page__main">
                    <div className="chat-page__message-list">
                        {!messages.loading &&
                            messages.allMessages.map(message => (
                                <Message
                                    text={message.text}
                                    authorName={message.author.firstName}
                                    authorAvatarUrl={message.author.photo}
                                    date={new Date(message.createdAt).toLocaleTimeString('en-GB').slice(0, 5)}
                                    key={message.id}
                                    isLoggedInUser={message.author.id === id}
                                />
                            ))}
                        <div ref={this.initRef} />
                    </div>
                    <InputControls onHeightChange={() => this.endRef.scrollIntoView()} />
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(loggedInUserQuery, { options: { fetchPolicy: 'network-only' }, name: 'user' }),
    graphql(allMessagesQuery, { options: { fetchPolicy: 'network-only' }, name: 'messages' }),
    withRouter
)(ChatPage);
