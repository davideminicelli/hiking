// IMPORT STYLES

// IMPORT DATA

// IMPORT COMPONENTS
import React from 'react';
import ProductDisplayer from './ProductDisplayer';
import { updateCategories } from '../Actions';
import { connect } from 'react-redux';


const Shop = (props)=> {

    return (
        <section>
            <h1>Shop</h1>
            <div>
                <div>
                    <input onChange={()=> props.updateCategories()} className="category-input" type="checkbox" id="clothing" name="clothing" value="clothing" />
                    <label htmlFor="clothing">Clothing</label>
                </div>

                <div>
                    <input onChange={()=> props.updateCategories()} className="category-input" type="checkbox" id="shoes" name="shoes" value="shoes" />
                    <label htmlFor="shoes">Shoes</label>
                </div>
                
                <div>
                    <input onChange={()=> props.updateCategories()} className="category-input" type="checkbox" id="accessories" name="accessories" value="accessories" />
                    <label htmlFor="accessories">Accessories</label>
                </div>
            </div>

            <div>
                <ProductDisplayer />
            </div>
        </section>
    )
};

const mapStateToProps = state => {
    return {
        selectedCategories: state.selectedCategories
    }
}

export default connect(mapStateToProps, {updateCategories})(Shop)