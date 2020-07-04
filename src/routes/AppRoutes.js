import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// Components
import Home from '../components/home/Home';
import About from '../components/about/About';
import Work from '../components/work/Work';
// import NavBar from '../components/layout/NavBar';

const AppRoutes = (props) => {
    return (
        <div className="col">
            <HashRouter basename="/">
                {/* <NavBar {...props} /> */}
                <Switch>
                    <Route exact path="/" >
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" render={(props) => <Home {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route exact path="/work" render={(props) => <Work {...props} />} />
                </Switch>
            </HashRouter>
        </div>
    );
};

export default AppRoutes;