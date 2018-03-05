import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './Header.css';

interface Props {
    id: string;
    photo: string | null;
    firstName: string | null;
}

class Header extends React.Component<Props & RouteComponentProps<{}>> {
    handleLogout = () => {
        localStorage.removeItem('graphcoolToken');
        this.props.history.push('/login');
    };

    render() {
        const { firstName, photo } = this.props;

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

export default withRouter(Header);
