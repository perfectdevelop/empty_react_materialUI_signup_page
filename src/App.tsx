import React from 'react';

import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FourNotFourPage from './page/404/FourNotFourPage';
import LoginPage from './page/sign/LoginPage';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>

                    <Route path="*">
                        <FourNotFourPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
