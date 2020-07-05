import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect, useLocation } from "react-router-dom";
// Components
import Home from '../components/home/Home';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
// import NavBar from '../components/layout/NavBar';
// Helper
import { scrollPageTo } from './../helpers';



const PageViews = () => {
    let location = useLocation();

    useEffect(
        () => {
            scrollPageTo(0, 0);
        },
        [location]
    );

    return null;
}

const AppRoutes = (props) => {

    return (
        <div className="col">
            <HashRouter basename="/">
                {/* <NavBar {...props} /> */}
                <PageViews />
                <Switch>
                    <Route exact path="/" >
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" render={(props) => <Home {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route exact path="/projects" render={(props) => <Projects {...props} />} />
                </Switch>
            </HashRouter>
        </div>
    );
};

export default AppRoutes;