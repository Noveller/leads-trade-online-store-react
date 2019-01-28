import React, { Component } from 'react';
import {connect} from "react-redux";

import Product from '../components/Product/Product'

import * as ProductActions from "../redux/actions/product.action";
import * as ShoppingCardActions from '../redux/actions/shoping_card.action';


class ProductListContainer extends Component {

    componentDidMount() {

        this.props.dispatch(ProductActions.load_all());
        this.props.dispatch(ShoppingCardActions.load_all());
    }

    addToCard(product) {

        this.props.dispatch(ShoppingCardActions.add_item(product));

    }

    removeFromCard(order) {

        this.props.dispatch(ShoppingCardActions.remove_item(order));

    }


    render() {

        const products = this.props.products;
        const orders = this.props.shopping_card;

        return (
            <div className="row">
                {
                    products.items.map((product, i) => (
                        <Product
                            addToCard={ e => this.addToCard(product) }
                            removeFromCard={ e => this.removeFromCard(orders.items.find(order => order.productId === product.id)) }
                            was_added={!!orders.items.find(item => item.productId === product.id)}
                            product={product}
                            key={i}/>
                    ))
                }
            </div>
        )
    }
}

export default connect(state => ({
    products: state.products,
    shopping_card: state.shopping_card
}))(ProductListContainer);