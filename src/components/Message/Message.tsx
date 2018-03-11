import * as React from 'react';

import formatDate from '../../utils/formatDate';
import './Message.css';

interface Props {
    text: string;
    authorName: string;
    authorAvatarUrl: string | null;
    createdAt: string;
    isLoggedInUser?: boolean;
}

const userColors = ['#8365ab', '#539e4f', '#ae9661', '#4979a3', '#b7635d', '#b3577a', '#5397b4', '#c07844', '#8365ab'];

class Message extends React.Component<Props> {
    render() {
        const { text, authorAvatarUrl, authorName, createdAt, isLoggedInUser = false } = this.props;
        const randomUserColorIndex = Math.ceil(Math.random() * 9);
        const randomUserColor = userColors[randomUserColorIndex];
        const { date, time } = formatDate(createdAt);

        return (
            <div className={`message${isLoggedInUser ? ' is-loggedin' : ''}`}>
                {authorAvatarUrl ? (
                    <img className="message__avatar" src={authorAvatarUrl} />
                ) : (
                    <div className="message__avatar-stub" style={{ backgroundColor: randomUserColor }}>
                        {authorName.slice(0, 1)}
                    </div>
                )}
                <div className="message__content">
                    <div className="message__author" style={{ color: randomUserColor }}>
                        {authorName}
                    </div>
                    <div className="message__text">{text}</div>
                </div>
                <div className="message__date">
                    {date}
                    <br />
                    {time}
                </div>
            </div>
        );
    }
}

export default Message;
