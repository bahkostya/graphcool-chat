import * as React from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { graphql, QueryProps } from 'react-apollo';
import { compose } from 'recompose';

import loggedInUserQuery from '../../graphql/loggedInUserQuery.graphql';
import authenticateUserMutation from '../../graphql/authenticateUserMutation.graphql';
import { LoggedInUserQuery, AuthenticateUserMutationVariables, AuthenticateUserMutation } from '../../types/gql';
import LoginButton from '../LoginButton/LoginButton';
import checkIfLoggedIn from '../../utils/checkIfLoggedIn';
import './LoginPage.css';

const fbLogo = require('../../assets/facebook-app-logo.svg');
const FACEBOOK_API_VERSION = '2.19';

interface MappedProps {
    data: QueryProps & LoggedInUserQuery;
    authenticateUserMutation(args: {
        variables: AuthenticateUserMutationVariables;
    }): { data: AuthenticateUserMutation };
}

type Props = MappedProps & RouteComponentProps<{}>;

class LoginPage extends React.Component<Props> {
    componentDidMount() {
        this.initializeFacebookSDK();
    }

    initializeFacebookSDK() {
        (window as WindowInterface).fbAsyncInit = function() {
            FB.init({
                appId: process.env.REACT_APP_FACEBOOK_APP_ID || '',
                cookie: true, // enable cookies to allow the server to access the session
                version: FACEBOOK_API_VERSION,
            });
        };

        // Load the SDK asynchronously
        (function(d: Document, s: string, id: string) {
            let js: HTMLScriptElement;
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s) as HTMLScriptElement;
            js.id = id;
            js.src = '//connect.facebook.net/en_US/all.js';
            fjs.parentNode!.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    handleFBLogin = () => {
        FB.login(
            response => {
                this.facebookCallback(response);
            },
            { scope: 'public_profile,email' }
        );
    };

    facebookCallback = async (facebookResponse: fb.AuthResponse) => {
        if (facebookResponse.status === 'connected') {
            const facebookToken = facebookResponse.authResponse.accessToken;
            console.log(facebookToken);

            const graphcoolResponse = await this.props.authenticateUserMutation({ variables: { facebookToken } });
            const graphcoolToken = graphcoolResponse.data.authenticateUser.token;
            localStorage.setItem('graphcoolToken', graphcoolToken);
            this.props.history.push('/');
        }
    };

    render() {
        console.log(this.props);
        if (this.props.data.loading) {
            return null;
        }

        if (checkIfLoggedIn(this.props.data.loggedInUser)) {
            return <Redirect to="/" />;
        }

        return (
            <div className="login-page">
                <div className="login-page__form">
                    <div className="login-page__title">Chat</div>
                    <div className="login-page__text">Please login to try</div>
                    <LoginButton
                        text="Sign up with Facebook"
                        color="#3b5998"
                        imageUrl={fbLogo}
                        onButtonClick={this.handleFBLogin}
                    />
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(authenticateUserMutation, { name: 'authenticateUserMutation' }),
    graphql(loggedInUserQuery, { options: { fetchPolicy: 'network-only' } }),
    withRouter
)(LoginPage);
