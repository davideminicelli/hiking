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