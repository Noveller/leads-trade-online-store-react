// @flow
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import Root from './Root';


import './index.css';
import * as serviceWorker from './serviceWorker';


const root = document.getElementById('root');

if (root !== null) {
    ReactDOM.render(<Root store={store}/>, root);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
