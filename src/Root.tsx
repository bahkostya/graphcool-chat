import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import ChatPage from './components/ChatPage/ChatPage';

class Root extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ChatPage} />
                    <Route exact path="/login" component={LoginPage} />
                    {/* <Route path="/about" component={About} /> */}
                    <Route render={() => <div>PAGE NOT FOUND</div>} />
                </Switch>
            </HashRouter>
        );
    }
}

export default Root;
