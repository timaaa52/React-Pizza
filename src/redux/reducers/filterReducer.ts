import { Dispatch } from "redux";
import { setCategoryType, setSortByType } from "../actions/fiterActions"
import {pizzasApi} from "../../api/api"
import { setPizzasAC } from "../actions/pizzasActions";

export type sortByType = 'rating' | 'price' | 'name';

export type stateType = {
    category: null | number
    sortBy: sortByType
}
const initialState: stateType = {
    category: null,
    sortBy: 'rating'
}

export const filterReducer = (state: stateType = initialState, action: generalType): stateType => {
    switch (action.type) {
        case 'SET_CATEGORY':
        case 'SET_SORT_BY' :
            return { ...state, ...action.payload };
        default: return state;
    }
}

export const filtredPizzasTC = (filter: string) => {
    return (dispatch: Dispatch) => {
       if(filter === 'rating') pizzasApi.setPizzasFilterByRating(filter).then(res => dispatch(setPizzasAC(res.data)))
       if(filter === 'name') pizzasApi.setPizzasFilterByName(filter).then(res => dispatch(setPizzasAC(res.data)))
       if(filter === 'price') pizzasApi.setPizzasFilterByPrice(filter).then(res => dispatch(setPizzasAC(res.data)))
    }
}

export const setCategoryPizzasTC = (category: number | null) => (dispatch: Dispatch) => {
    if(typeof category === 'number') pizzasApi.setPizzasCategoty(category).then(res => {dispatch(setPizzasAC(res.data))})
    if(typeof category === null) pizzasApi.getPizzas().then(res => { dispatch(setPizzasAC(res.data)) })
}


type generalType = setSortByType | setCategoryType;