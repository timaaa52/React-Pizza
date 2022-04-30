import {actionsType, addPizzaToCartACType, setTotalCountACType, setTotalPriceACType} from "../actions/cartActions";
import {onAddPizzaHandlerType} from "../../pages/Home";



type CartStateType = {
    items: { [key: string]: Array<onAddPizzaHandlerType> }
    totalPrice: number
    totalCount: number
}


const initialState: CartStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const cartReducer = (state = initialState, action: GeneralType) => {
    switch (action.type) {
        case actionsType.SET_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload.price
            }
        }
        case actionsType.SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload.count
            }
        }
        case actionsType.ADD_PIZZA_TO_CART: {
            return {
                ...state,
                items: {
                    [action.payload.item.id]: [
                        ...state[action.payload.item.id],
                        action.payload.item
                    ]
                }
            }
        }
        default: return state;
    }
}


type GeneralType = setTotalPriceACType | setTotalCountACType | addPizzaToCartACType
