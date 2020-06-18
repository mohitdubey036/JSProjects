import * as actionTypes from '../actions/actionType'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.3
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                purchaseable : true,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }

        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients : action.ingredient,
                error : false,
                totalPrice : 4
            }

        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error : true
            }
        default: return state
    }
}
export default reducer;