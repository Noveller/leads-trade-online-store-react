// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import ProductListContainer from "./containers/ProductListContainer";
import type { Store } from 'redux';

const Root = ({ store }: {store: Store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/products"/>
                )}/>

                <Route path="/products" component={ProductListContainer} />
            </Switch>

        </Router>
    </Provider>
);

export default Root;