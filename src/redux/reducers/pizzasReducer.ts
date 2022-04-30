import { Dispatch } from "redux"
import { pizzasApi } from "../../api/api"
import { pizzasType } from "../../pages/Home"
import { setPizzasAC, setPizzasACType, setPizzasLoadingACType } from "../actions/pizzasActions"
import { sortByType } from "./filterReducer"

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
                isLoading: true,
            }
        case 'SET_PIZZAS_LOADING': 
            return {
                ...state, 
                isLoading: action.payload.status
            }
        default: return state;
    }
}


export const fetchPizzasTC = (category: number | null, sortBy: sortByType) => (dispatch: Dispatch) => {
    pizzasApi.getPizzas(category, sortBy).then(res => dispatch(setPizzasAC(res.data)))
}



type generalType = setPizzasACType | setPizzasLoadingACType