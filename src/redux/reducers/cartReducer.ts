import {
    actionsType,
    addPizzaToCartACType,
    clearCartACType, removeCartItemACType,
    setTotalCountACType,
    setTotalPriceACType
} from "../actions/cartActions";

export type itemPizzaType = {
    id: number
    name: string
    price: number
    type: string
    size: number
}

export type CartStateType = {
    items: { [key: string]: {
        items: Array<itemPizzaType>
        totalPrice: number
        } }
    totalPrice: number
    totalCount: number
}


const initialState: CartStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr: any) => arr.reduce((acc: number, val: itemPizzaType) => acc + val.price, 0)

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
            const currentPizzaItems = !state.items[action.payload.item.id]
                ? [action.payload.item]
                : [...state.items[action.payload.item.id].items, action.payload.item]
            const newItems = {
                ...state.items,
                [action.payload.item.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }
            const totalCount = Object.values(newItems).map((el:any) => el.items)
            return {
                ...state,
                items: newItems,
                // заимствуем метод concat и через apply всовываем все свойства обьекта newItem и получаем длину, для корректного отображения на странице
                totalCount: [].concat.apply([], totalCount).length,
                // все тоже как и више, только с помощью редьюса пробегаемся по массиву и свойтве price берем цену, и сумму цен всех пицц выводим на страницу
                totalPrice: getTotalPrice([].concat.apply([], totalCount)),
            }
        }
        case actionsType.CLEAR_CART: {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case actionsType.REMOVE_CART_ITEM: {
            return {
                ...state,
                items: {

                }


            }
        }
        default: return state;
    }
}


type GeneralType = setTotalPriceACType
    | setTotalCountACType
    | addPizzaToCartACType
    | clearCartACType
    | removeCartItemACType
