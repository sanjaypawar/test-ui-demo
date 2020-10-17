import React from 'react';
import Home from './Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path='/' componant={ Home }/>
            </Switch>
        </Router>
    )
}
