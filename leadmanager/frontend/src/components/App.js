import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import { Provider as AlertProdvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Register from './accounts/Register';
import Login from './accounts/Login';

 
import { Provider } from 'react-redux';
import store from '../store';

//Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <AlertProdvider template={AlertTemplate} {...alertOptions}>
            <Router>
            <Fragment>
            <Header />
            <Alerts />
            <div className="container">
            <Switch>
                <Route exact path="/" Component={Dashboard} />
                <Route exact path="/register" Component={Register} />
                <Route exact path="/login" Component={Login} />
            </Switch> 
            <Dashboard />
            </div>
            </Fragment>
            </Router>
            </AlertProdvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));