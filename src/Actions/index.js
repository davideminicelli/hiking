export const updateCategories = ()=> {
    
    let selected = [];

    let checks = document.querySelectorAll('.category-input')

    checks.forEach(
        single => {
            if (single.checked) {
                selected.push(single.value)
            }
        }
    )
    
    return {
    type: 'UPDATE_CATEGORY_SELECTION',
    payload: selected
    }
}

export const addToBasket = item => {
    return {
        type: 'ADD_TO_BASKET',
        payload: {
            name: item.name,
            price: item.price,
            quantity: 1,
            id: item.id
        }
    }
}

export const removeFromBasket = item => {
    return {
        type: 'REMOVE_FROM_BASKET',
        payload: {
            id: item.id,
            quantity: item.quantity
        }
    }
}