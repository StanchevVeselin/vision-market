

export const initialState = {
    basket: [],
}

export const getBasketCount = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0))
}

const reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
           const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
           )
          console.log(action);
           let newBasket = [...state.basket]

           if(index>=0) {
                newBasket.splice(index, 1)
           } else{
            console.warn(`Can't remove product-id: ${action.id} )`)
           }

           return {
            ...state,
            basket: newBasket
           };

           case "LOGOUT": 
                console.log(action);
                    return {
                        ...state,
                        basket: []
                    };
            case "EMPTY_BASKET": 
                    return {
                        ...state,
                        basket: []
                    };
        
                default:
                    return state;
    }
}

export default reducer;