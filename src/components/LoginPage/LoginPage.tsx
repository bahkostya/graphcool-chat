import * as React from 'react';

import LoginButton from '../LoginButton/LoginButton';
import './LoginPage.css';

const fbLogo = require('../../assets/facebook-app-logo.svg');

class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-page__form">
                    <div className="login-page__title">Chat</div>
                    <div className="login-page__text">Please login to try</div>
                    <LoginButton text="Sign up with Facebook" color="#3b5998" imageUrl={fbLogo} />
                </div>
            </div>
        );
    }
}

export default LoginPage;
