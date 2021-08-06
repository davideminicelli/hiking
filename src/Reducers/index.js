import { combineReducers } from "redux";

const selectedCategoriesReducer = (selectedCategories =[], action)=> {
    if (action.type === 'UPDATE_CATEGORY_SELECTION') {
        return action.payload
    };
    return selectedCategories;
};

export default combineReducers(
    {
        selectedCategories: selectedCategoriesReducer
    }
)