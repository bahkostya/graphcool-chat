import * as React from 'react';

import './NewUser.css';

interface Props {
    userName: string;
}

class NewUser extends React.Component<Props> {
    render() {
        return (
            <div className="new-user">
                <div className="new-user__text">
                    {this.props.userName} <span>joined chat</span>
                </div>
            </div>
        );
    }
}

export default NewUser;
