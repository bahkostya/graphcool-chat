import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import InputControls from '../InputControls/InputControls';
import Message from '../Message/Message';
import loggedInUserQuery from '../../graphql/loggedInUserQuery.graphql';
import allMessagesQuery from '../../graphql/allMessagesQuery.graphql';
import newMessage from '../../graphql/newMessage.graphql';
import { LoggedInUserQuery, AllMessagesQuery, MessageSubscription } from '../../types/gql';
import checkIfLoggedIn from '../../utils/checkIfLoggedIn';
import './ChatPage.css';

interface MappedProps {
    user: QueryProps & LoggedInUserQuery;
    messages: QueryProps & AllMessagesQuery;
    subscribeToNewMessages(): void;
}

type Props = MappedProps & RouteComponentProps<{}>;

class ChatPage extends React.Component<Props> {
    endRef: HTMLDivElement;

    componentDidMount() {
        this.props.subscribeToNewMessages();
    }

    componentDidUpdate(prevProps: Props) {
        if (
            prevProps.messages.allMessages &&
            prevProps.messages.allMessages.length !== this.props.messages.allMessages.length
        ) {
            const { messages, user } = this.props;
            const lastMessage = messages.allMessages[messages.allMessages.length - 1];

            if (user.loggedInUser && lastMessage.author.id === user.loggedInUser.id) {
                this.endRef.scrollIntoView();
            }
        }
    }

    initRef = (el: HTMLDivElement) => (this.endRef = el);

    render() {
        const { messages, user } = this.props;

        if (user.loading) {
            return null;
        }

        if (!checkIfLoggedIn(user.loggedInUser)) {
            return <Redirect to="/login" />;
        }

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
                                    createdAt={message.createdAt}
                                    key={message.id}
                                    isLoggedInUser={message.author.id === id}
                                />
                            ))}
                        <div ref={this.initRef} />
                    </div>
                    <InputControls userId={id} onHeightChange={() => this.endRef.scrollIntoView()} />
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(loggedInUserQuery, { options: { fetchPolicy: 'network-only' }, name: 'user' }),
    graphql(allMessagesQuery, {
        options: { fetchPolicy: 'network-only' },
        name: 'messages',
        props: props => {
            const { messages, user } = props as Partial<MappedProps>;
            if (!messages) {
                return props;
            }

            return {
                ...props,
                subscribeToNewMessages: () => {
                    return messages.subscribeToMore({
                        document: newMessage,
                        updateQuery: (prev: AllMessagesQuery, { subscriptionData: { data } }) => {
                            if (!data) {
                                return prev;
                            }
                            const subscriptionData = data as MessageSubscription;

                            return {
                                allMessages: [...prev.allMessages, subscriptionData.Message!.node],
                            };
                        },
                    });
                },
            };
        },
    }),
    withRouter
)(ChatPage);
