import React from 'react';

import { getProductsState } from '../redux/selectors';

import  { connect } from 'react-redux';

const person = ({ products }) => {
    return (
        <div>
            <p>i`m a  and I am  years old</p>

            <p> { JSON.stringify(products.allIds) } </p>
        </div>
    );
};

const mapStateToProps = state => {

    const products = getProductsState(state);

    return { products };

};

export default connect(mapStateToProps)(person);

