import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProdvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
 
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
            <Fragment>
            <Header />
            <Alerts />
            <div className="container">
            <Dashboard />
            </div>
            </Fragment>
            </AlertProdvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));