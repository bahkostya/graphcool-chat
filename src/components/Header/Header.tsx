import * as React from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { graphql, QueryProps } from 'react-apollo';
import { compose } from 'recompose';

import loggedInUserQuery from '../../graphql/loggedInUserQuery.graphql';
import { LoggedInUserQuery } from '../../types/gql';
import checkIfLoggedIn from '../../utils/checkIfLoggedIn';
import './Header.css';

interface MappedProps {
    data: QueryProps & LoggedInUserQuery;
}

type Props = MappedProps & RouteComponentProps<{}>;

class Header extends React.Component<Props> {
    handleLogout = () => {
        localStorage.removeItem('graphcoolToken');
        this.props.history.push('/login');
    };

    render() {
        if (!checkIfLoggedIn(this.props.data)) {
            return <Redirect to="/login" />;
        }

        const { firstName, photo } = this.props.data.loggedInUser!;

        return (
            <div className="header">
                <img className="header__avatar" src={photo || ''} alt="" />
                <div className="header__name">Hi, {firstName}!</div>
                <button className="header__logout" onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        );
    }
}

export default compose(graphql(loggedInUserQuery, { options: { fetchPolicy: 'network-only' } }), withRouter)(Header);
