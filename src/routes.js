import React from 'react';
import Home from './Home';
import PromotedEvent from './PromotedEvent';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path='/' >
                  <Home />
                  <PromotedEvent />
                </Route>
            </Switch>
        </Router>
    );
};
