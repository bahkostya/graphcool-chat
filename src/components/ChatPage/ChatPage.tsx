import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import InputControls from '../InputControls/InputControls';
import Message from '../Message/Message';
import loggedInUserQuery from '../../graphql/loggedInUserQuery.graphql';
import allMessagesQuery from '../../graphql/allMessagesQuery.graphql';
import allUsersQuery from '../../graphql/allUsersQuery.graphql';
import newMessage from '../../graphql/newMessage.graphql';
import newUser from '../../graphql/newUser.graphql';
import {
    LoggedInUserQuery,
    AllMessagesQuery,
    MessageSubscription,
    AllUsersQuery,
    UserSubscription,
} from '../../types/gql';
import { Message as MessageType, User } from '../../types/api';
import checkIfLoggedIn from '../../utils/checkIfLoggedIn';
import './ChatPage.css';
import NewUser from '../NewUser/NewUser';

interface MappedProps {
    user: QueryProps & LoggedInUserQuery;
    messages: QueryProps & AllMessagesQuery;
    users: QueryProps & AllUsersQuery;
    subscribeToNewMessages(): void;
    subscribeToNewUsers(): void;
}

type Props = MappedProps & RouteComponentProps<{}>;

interface State {
    textAreaHeight: number;
}

function isMessage(listItem: MessageType | User): listItem is MessageType {
    return (listItem as MessageType).author !== undefined;
}

class ChatPage extends React.Component<Props, State> {
    endRef: HTMLDivElement;

    state: State = {
        textAreaHeight: 32,
    };

    componentDidMount() {
        this.props.subscribeToNewMessages();
        this.props.subscribeToNewUsers();
    }

    componentDidUpdate(prevProps: Props) {
        if (
            prevProps.messages.allMessages &&
            prevProps.messages.allMessages.length !== this.props.messages.allMessages.length
        ) {
            const { messages, user } = this.props;
            const lastMessage = messages.allMessages[messages.allMessages.length - 1];

            if (
                (user.loggedInUser && lastMessage.author.id === user.loggedInUser.id) ||
                window.innerHeight + window.scrollY >= this.endRef.offsetTop - 70
            ) {
                this.endRef.scrollIntoView();

                return;
            }
        }
    }

    handleHeightChange = (height: number) => {
        this.setState(
            {
                textAreaHeight: height + 40,
            },
            () => {
                this.endRef.scrollIntoView();
            }
        );
    };

    initRef = (el: HTMLDivElement) => (this.endRef = el);

    render() {
        const { messages, user, users } = this.props;

        if (user.loading || messages.loading || users.loading) {
            return null;
        }

        if (!checkIfLoggedIn(user.loggedInUser)) {
            return <Redirect to="/login" />;
        }

        const { id, photo, firstName } = user.loggedInUser!;

        const list = [...messages.allMessages, ...users.allUsers].sort(
            (a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
        ) as (User | MessageType)[];

        return (
            <div className="chat-page">
                <Header {...{ id, photo, firstName }} />
                <div className="chat-page__main" style={{ paddingBottom: this.state.textAreaHeight }}>
                    {list.map(listItem => {
                        if (isMessage(listItem)) {
                            return (
                                <Message
                                    text={listItem.text}
                                    authorName={listItem.author.firstName}
                                    authorAvatarUrl={listItem.author.photo}
                                    createdAt={listItem.createdAt}
                                    key={listItem.id}
                                    isLoggedInUser={listItem.author.id === id}
                                />
                            );
                        }
                        return <NewUser key={listItem.id} userName={listItem.firstName} />;
                    })}
                    <div ref={this.initRef} />
                    <InputControls userId={id} onHeightChange={this.handleHeightChange} />
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
            const { messages } = props as Partial<MappedProps>;
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
    graphql(allUsersQuery, {
        options: { fetchPolicy: 'network-only' },
        name: 'users',
        props: props => {
            const { users } = props as Partial<MappedProps>;
            if (!users) {
                return props;
            }

            return {
                ...props,
                subscribeToNewUsers: () => {
                    return users.subscribeToMore({
                        document: newUser,
                        updateQuery: (prev: AllUsersQuery, { subscriptionData: { data } }) => {
                            if (!data) {
                                return prev;
                            }
                            const subscriptionData = data as UserSubscription;

                            return {
                                allMessages: [...prev.allUsers, subscriptionData.User!.node],
                            };
                        },
                    });
                },
            };
        },
    }),
    withRouter
)(ChatPage);
