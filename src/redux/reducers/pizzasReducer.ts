import { Dispatch } from "redux"
import { pizzasApi } from "../../api/api"
import { pizzasType } from "../../pages/Home"
import { setPizzasAC, setPizzasACType } from "../actions/pizzasActions"

type stateType = {
    items: pizzasType[],
    isLoading: boolean
}
const initialState: stateType = {
    items: [],
    isLoading: false,
}
export const pizzasReducer = (state: stateType = initialState, action: generalType): stateType => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload.items,
            }
        default: return state;
    }
}


export const fetchPizzasTC = () => (dispatch: Dispatch) => {
    pizzasApi.getPizzas().then(res => dispatch(setPizzasAC(res.data)))
}



type generalType = setPizzasACType