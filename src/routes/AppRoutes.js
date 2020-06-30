import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components
import Home from '../components/home/Home';
import About from '../components/about/About';
import Work from '../components/work/Work';
import NavBar from '../components/layout/NavBar';

const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" >
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/Home" render={() => <About />} />
                <Route exact path="/Home" render={() => <Work />} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;