import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import ProductListContainer from "../../containers/ProductListContainer";

const Root = ({ store }) => (
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


Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;