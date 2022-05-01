import {actionsType, addPizzaToCartACType, setTotalCountACType, setTotalPriceACType} from "../actions/cartActions";

export type itemPizzaType = {
    id: number
    name: string
    price: number
    type: string
    size: number
}

type CartStateType = {
    items: { [key: string]: Array<itemPizzaType> }
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
            const newItems = {
                ...state.items,
                [action.payload.item.id]:  !state.items[action.payload.item.id]
                    ? [action.payload.item]
                    : [...state.items[action.payload.item.id], action.payload.item]
            }
            return {
                ...state,
                items: newItems,
                // заимствуем метод concat и через apply всовываем все свойства обьекта newItem и получаем длину, для корректного отображения на странице
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                // все тоже как и више, только с помощью редьюса пробегаемся по массиву и свойтве price берем цену, и сумму цен всех пицц выводим на страницу
                totalPrice: [].concat.apply([], Object.values(newItems)).reduce((acc, val: itemPizzaType) => acc + val.price, 0),
            }
        }
        default: return state;
    }
}


type GeneralType = setTotalPriceACType | setTotalCountACType | addPizzaToCartACType
