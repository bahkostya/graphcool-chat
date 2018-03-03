import * as React from 'react';

import './Header.css';

interface Props {}

const avatarImgUrl = 'http://graph.facebook.com/1870579839642882/picture?type=normal';
const name = 'Kostiantyn';

class Header extends React.Component<Props> {
    render() {
        return (
            <div className="header">
                <img className="header__avatar" src={avatarImgUrl} alt="" />
                <div className="header__name">Hi, {name}!</div>
                <button className="header__logout">Logout</button>
            </div>
        );
    }
}

export default Header;
