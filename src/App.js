import React, { Component } from 'react';
import './App.css';
// import ProductsList from './components/ProductsList/ProductsList';
import ProductListContainer from './containers/ProductListContainer';

class App extends Component {

    render() {
        return (
            <div className="App">
                <ProductListContainer/>
            </div>
        );
    }
}

export default App;
