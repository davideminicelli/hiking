import { combineReducers } from "redux";

const selectedCategoriesReducer = (selectedCategories =[], action)=> {
    if (action.type === 'UPDATE_CATEGORY_SELECTION') {
        return action.payload
    };
    return selectedCategories;
};

const basketReducer = (basketContent =[], action)=> {
    
    
    if (action.type === 'ADD_TO_BASKET') {
        const fromBasketContent = basketContent;
        let checker = 0;
        fromBasketContent.map(
            singleItem => {
                if (singleItem.id === action.payload.id) {
                    checker = 1;
                    singleItem.quantity++
                }
            }
        );

        if (checker === 0) {return [...fromBasketContent, action.payload]}
        else {return [...fromBasketContent]}
    }

    else if (action.type === 'REMOVE_FROM_BASKET') {
        const fromBasketContent = basketContent;
        fromBasketContent.map(
            single => {
                if (single.id === action.payload.id) {
                    if (single.quantity > 1) {
                        single.quantity--
                    }
                    else {
                        fromBasketContent.splice(single.indexOf, 1)
                    }
                }
            }
        );
        return [...fromBasketContent]
    }
    
    return basketContent;
}


export default combineReducers(
    {
        selectedCategories: selectedCategoriesReducer,
        basketContent: basketReducer
    }
)