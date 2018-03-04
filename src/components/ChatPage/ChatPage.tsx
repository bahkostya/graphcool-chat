import * as React from 'react';
import Textarea from 'react-textarea-autosize';

import Header from '../Header/Header';
import Message from '../Message/Message';
import './ChatPage.css';

class ChatPage extends React.Component {
    endRef: HTMLDivElement;

    initRef = (el: HTMLDivElement) => (this.endRef = el);

    render() {
        return (
            <div className="chat-page">
                <Header />
                <div className="chat-page__main">
                    <div className="chat-page__message-list">
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                            isLoggedInUser
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                            isLoggedInUser
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                            isLoggedInUser
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                            isLoggedInUser
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                        />
                        <Message
                            text="lorem ipsum dolor asdasd asdasd asdasd asdad asdasssss sssss"
                            authorName="Johnatan"
                            authorAvatarUrl="http://graph.facebook.com/1872751829425683/picture?type=normal"
                            date="13:56"
                            isLoggedInUser
                        />
                        <div ref={this.initRef} />
                    </div>
                    <div className="input-controls">
                        <Textarea
                            className="input-controls__text-area"
                            minRows={1}
                            maxRows={6}
                            onHeightChange={() => this.endRef.scrollIntoView()}
                        />
                        <button className="input-controls__button" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatPage;
