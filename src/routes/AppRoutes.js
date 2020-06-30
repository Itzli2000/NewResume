import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Home from '../components/home/Home';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" render={() => <Home/>}
                />
            </Switch>
        </Router>
    );
};

export default AppRoutes;