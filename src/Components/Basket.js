import React from 'react';
import { connect } from 'react-redux';
import { removeFromBasket } from '../Actions';


const Basket = (props)=> {

const productsInBasket = props.basketContent.map(
        product => {return (
        <div>
            <p key={product.id}>{product.name}, price: {product.price}£, Quantity: {product.quantity}</p>
            <button onClick={() => props.removeFromBasket(product)}>Remove Item</button>
        </div>
        )
        }
    );

const howManyInBasket = ()=> {
    let counter = 0;
    props.basketContent.map(
        item => counter = counter + item.quantity
    )
    return counter
}

    return (
        <div>
            <h2>Basket({howManyInBasket()})</h2>
            {productsInBasket}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        basketContent: state.basketContent
    }
}

export default connect(mapStateToProps, {removeFromBasket})(Basket);