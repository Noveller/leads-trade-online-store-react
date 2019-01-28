import React from 'react'

const product = props => (


    <div className="col-xs-12 col-sm-3 col-md-2">

        <div className="thumbnail">
            <img src={ props.product.image } alt=""/>

            <div className="caption">
                <h4>{ props.product.title }</h4>
                <p><b>{props.product.price} $</b></p>
                <p>{props.product.description}</p>

                <p className="text-center">

                    <button
                        onClick={ !props.was_added ? props.addToCard : props.removeFromCard }
                        className={
                            ['btn', !props.was_added ? 'btn-primary' : 'btn-', 'btn-md'].join(' ')}>{ !props.was_added ? 'Add' : 'Remove' }</button>
                </p>
            </div>

        </div>


    </div>
);

export default product;