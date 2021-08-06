import React from 'react';
import { products } from '../Data/products';
import { connect } from 'react-redux';

const ProductDisplayer = props => {

    const selection = props.selectedCategories;

    const selectedProducts = products.map(
        product => {
            if (selection.indexOf(product.category) !== -1) {
                return (
                    <div>
                        <p>{product.name}, Price: {product.price}£</p>
                        <button>Buy Now</button>
                    </div>
                )
            }
        }
    );


    return (
        <section>
            <h2>Product Displayer</h2>
            {selectedProducts}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        selectedCategories: state.selectedCategories
    }
}

export default connect(mapStateToProps)(ProductDisplayer);