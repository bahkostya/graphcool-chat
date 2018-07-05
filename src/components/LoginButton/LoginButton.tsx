import * as React from 'react';

import './LoginButton.css';

interface Props {
    imageUrl: string;
    text: string;
    color: string;
    onButtonClick(): void;
}

class LoginButton extends React.Component<Props> {
    render() {
        const { color, text, imageUrl } = this.props;
        console.log(imageUrl);

        return (
            <button
                className="login-button"
                style={{
                    backgroundColor: color,
                    backgroundImage: `url(${imageUrl})`,
                }}
                onClick={this.props.onButtonClick}
            >
                {text}
            </button>
        );
    }
}

export default LoginButton;
